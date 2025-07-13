/**
 * AdTech Metro Area Targeting System Example
 * 
 * This example shows how to use the metro area mapping files
 * to handle metro area targeting in your adtech system.
 */

// Import the metro area mappings
const { US_METRO_AREAS } = require('./us_metro_areas.js');
const { CANADIAN_METRO_AREAS } = require('./canadian_metro_areas.js');

class AdTargetingSystem {
  constructor(mmdbReader) {
    this.mmdbReader = mmdbReader;
    this.usMetroAreas = US_METRO_AREAS;
    this.canadianMetroAreas = CANADIAN_METRO_AREAS;
    
    // Create reverse lookup maps for faster IP matching
    this.usCityToMetroMap = this.buildCityToMetroMap(US_METRO_AREAS);
    this.canadianCityToMetroMap = this.buildCityToMetroMap(CANADIAN_METRO_AREAS);
  }

  /**
   * Build a reverse lookup map from city names to metro areas
   */
  buildCityToMetroMap(metroAreas) {
    const cityToMetroMap = {};
    
    Object.entries(metroAreas).forEach(([metroKey, metro]) => {
      metro.cities.forEach(city => {
        const key = `${city}|${metro.state || metro.province}`;
        if (!cityToMetroMap[key]) {
          cityToMetroMap[key] = [];
        }
        cityToMetroMap[key].push(metroKey);
      });
    });
    
    return cityToMetroMap;
  }

  /**
   * Get metro areas for advertiser selection UI
   */
  getAvailableMetroAreas(country = 'US') {
    const metroAreas = country === 'US' ? this.usMetroAreas : this.canadianMetroAreas;
    
    return Object.entries(metroAreas)
      .map(([key, metro]) => ({
        value: key,
        label: `${metro.display_name} (${metro.population.toLocaleString()})`,
        country: country,
        state: metro.state || metro.province,
        population: metro.population,
        rank: metro.rank
      }))
      .sort((a, b) => a.rank - b.rank);
  }

  /**
   * Expand metro area selection to individual cities
   */
  expandMetroToCities(metroKey, country = 'US') {
    const metroAreas = country === 'US' ? this.usMetroAreas : this.canadianMetroAreas;
    const metro = metroAreas[metroKey];
    
    if (!metro) {
      console.warn(`Metro area ${metroKey} not found`);
      return [];
    }
    
    return metro.cities.map(city => ({
      city: city,
      state: metro.state || metro.province,
      country: country
    }));
  }

  /**
   * Match IP address against campaign targeting
   */
  matchIPToTargeting(ipAddress, campaignTargets) {
    try {
      // Get location data from MaxMind MMDB
      const geoData = this.mmdbReader.get(ipAddress);
      
      if (!geoData || !geoData.city) {
        return { matched: false, reason: 'No city data available' };
      }
      
      const userCity = geoData.city.names?.en;
      const userCountry = geoData.country?.iso_code;
      const userState = geoData.subdivisions?.[0]?.iso_code;
      
      if (!userCity || !userCountry || !userState) {
        return { matched: false, reason: 'Incomplete location data' };
      }
      
      // Check each campaign target
      for (const target of campaignTargets) {
        const match = this.checkTargetMatch(userCity, userState, userCountry, target);
        if (match.matched) {
          return {
            matched: true,
            target: target,
            userLocation: {
              city: userCity,
              state: userState,
              country: userCountry
            },
            matchReason: match.reason
          };
        }
      }
      
      return { 
        matched: false, 
        reason: 'No matching targets',
        userLocation: {
          city: userCity,
          state: userState,
          country: userCountry
        }
      };
      
    } catch (error) {
      console.error('Error matching IP to targeting:', error);
      return { matched: false, reason: 'Error processing IP' };
    }
  }

  /**
   * Check if user location matches a specific target
   */
  checkTargetMatch(userCity, userState, userCountry, target) {
    switch (target.type) {
      case 'metro':
        return this.matchMetroTarget(userCity, userState, userCountry, target);
      
      case 'city':
        return this.matchCityTarget(userCity, userState, userCountry, target);
      
      case 'state':
        return this.matchStateTarget(userState, userCountry, target);
      
      case 'country':
        return this.matchCountryTarget(userCountry, target);
      
      default:
        return { matched: false, reason: 'Unknown target type' };
    }
  }

  /**
   * Match against metro area targeting
   */
  matchMetroTarget(userCity, userState, userCountry, target) {
    const cityKey = `${userCity}|${userState}`;
    const cityToMetroMap = userCountry === 'US' ? this.usCityToMetroMap : this.canadianCityToMetroMap;
    
    const userMetros = cityToMetroMap[cityKey] || [];
    
    if (userMetros.includes(target.metro_key)) {
      return { 
        matched: true, 
        reason: `City ${userCity} is part of ${target.display_name}` 
      };
    }
    
    return { 
      matched: false, 
      reason: `City ${userCity} not in targeted metro area` 
    };
  }

  /**
   * Match against city targeting
   */
  matchCityTarget(userCity, userState, userCountry, target) {
    if (target.city === userCity && 
        target.state === userState && 
        target.country === userCountry) {
      return { 
        matched: true, 
        reason: `Direct city match: ${userCity}, ${userState}` 
      };
    }
    
    return { 
      matched: false, 
      reason: 'City does not match target' 
    };
  }

  /**
   * Match against state/province targeting
   */
  matchStateTarget(userState, userCountry, target) {
    if (target.state === userState && target.country === userCountry) {
      return { 
        matched: true, 
        reason: `State match: ${userState}` 
      };
    }
    
    return { 
      matched: false, 
      reason: 'State does not match target' 
    };
  }

  /**
   * Match against country targeting
   */
  matchCountryTarget(userCountry, target) {
    if (target.country === userCountry) {
      return { 
        matched: true, 
        reason: `Country match: ${userCountry}` 
      };
    }
    
    return { 
      matched: false, 
      reason: 'Country does not match target' 
    };
  }

  /**
   * Get targeting breakdown for a metro area
   */
  getMetroTargetingBreakdown(metroKey, country = 'US') {
    const metroAreas = country === 'US' ? this.usMetroAreas : this.canadianMetroAreas;
    const metro = metroAreas[metroKey];
    
    if (!metro) {
      return null;
    }
    
    return {
      metroKey: metroKey,
      name: metro.name,
      displayName: metro.display_name,
      primaryCity: metro.primary_city,
      state: metro.state || metro.province,
      country: country,
      population: metro.population,
      rank: metro.rank,
      cities: metro.cities,
      cityCount: metro.cities.length
    };
  }
}

// Example usage
class AdCampaignExample {
  constructor(targetingSystem) {
    this.targeting = targetingSystem;
  }

  /**
   * Example: Create a campaign targeting Buffalo Metro
   */
  createBuffaloMetroCampaign() {
    const campaign = {
      name: "Buffalo Metro Holiday Campaign",
      targets: [
        {
          type: 'metro',
          metro_key: 'buffalo-metro',
          country: 'US',
          display_name: 'Buffalo Metro Area'
        }
      ]
    };
    
    // Get breakdown of what this targeting includes
    const breakdown = this.targeting.getMetroTargetingBreakdown('buffalo-metro', 'US');
    console.log('Buffalo Metro Campaign Targeting:', breakdown);
    
    return campaign;
  }

  /**
   * Example: Test IP matching
   */
  testIPMatching() {
    const campaign = this.createBuffaloMetroCampaign();
    
    // Test IPs (these would be real IPs from your MaxMind analysis)
    const testIPs = [
      '24.213.146.108', // Buffalo, NY
      '74.77.103.181',  // Buffalo, NY  
      '8.8.8.8'         // Not Buffalo
    ];
    
    testIPs.forEach(ip => {
      const result = this.targeting.matchIPToTargeting(ip, campaign.targets);
      console.log(`IP ${ip}:`, result);
    });
  }

  /**
   * Example: Get available metro areas for UI
   */
  getTargetingOptions() {
    const usMetros = this.targeting.getAvailableMetroAreas('US');
    const canadianMetros = this.targeting.getAvailableMetroAreas('CA');
    
    return {
      us: usMetros.slice(0, 10), // Top 10 US metros
      canada: canadianMetros.slice(0, 10) // Top 10 Canadian metros
    };
  }
}

// Example frontend integration (React/Vue/etc.)
const FrontendExample = {
  // Metro area selector component
  MetroAreaSelector: `
    <select v-model="selectedMetro" @change="onMetroChange">
      <option value="">Select Metro Area</option>
      <optgroup label="United States">
        <option v-for="metro in usMetros" :value="metro.value">
          {{ metro.label }}
        </option>
      </optgroup>
      <optgroup label="Canada">
        <option v-for="metro in canadianMetros" :value="metro.value">
          {{ metro.label }}
        </option>
      </optgroup>
    </select>
  `,

  // Metro breakdown display
  MetroBreakdown: `
    <div v-if="selectedMetroBreakdown" class="metro-breakdown">
      <h4>{{ selectedMetroBreakdown.displayName }}</h4>
      <p><strong>Primary City:</strong> {{ selectedMetroBreakdown.primaryCity }}</p>
      <p><strong>Population:</strong> {{ selectedMetroBreakdown.population.toLocaleString() }}</p>
      <p><strong>Includes {{ selectedMetroBreakdown.cityCount }} cities:</strong></p>
      <ul>
        <li v-for="city in selectedMetroBreakdown.cities.slice(0, 5)" :key="city">
          {{ city }}
        </li>
        <li v-if="selectedMetroBreakdown.cities.length > 5">
          ... and {{ selectedMetroBreakdown.cities.length - 5 }} more cities
        </li>
      </ul>
    </div>
  `
};

// Database schema example
const DatabaseSchema = `
-- Campaign targeting table
CREATE TABLE campaign_targets (
  id SERIAL PRIMARY KEY,
  campaign_id INTEGER NOT NULL,
  target_type ENUM('metro', 'city', 'state', 'country') NOT NULL,
  target_key VARCHAR(100) NOT NULL, -- metro key, city name, state code, or country code
  country_code VARCHAR(2) NOT NULL,
  state_code VARCHAR(10),
  display_name VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_campaign_id (campaign_id),
  INDEX idx_target_type (target_type),
  INDEX idx_location (country_code, state_code)
);

-- Pre-computed metro city mapping for fast lookups
CREATE TABLE metro_city_mapping (
  metro_key VARCHAR(100) NOT NULL,
  city_name VARCHAR(100) NOT NULL,
  state_code VARCHAR(10) NOT NULL,
  country_code VARCHAR(2) NOT NULL,
  
  PRIMARY KEY (metro_key, city_name, state_code, country_code),
  INDEX idx_city_lookup (city_name, state_code, country_code)
);
`;

module.exports = {
  AdTargetingSystem,
  AdCampaignExample,
  FrontendExample,
  DatabaseSchema
};