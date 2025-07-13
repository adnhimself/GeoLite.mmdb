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
    this.usCityToMetroMap = this.buildCityToMetroMap(US_METRO_AREAS, 'state_code');
    this.canadianCityToMetroMap = this.buildCityToMetroMap(CANADIAN_METRO_AREAS, 'province_code');
  }

  /**
   * Build a reverse lookup map from city names to metro areas
   */
  buildCityToMetroMap(metroAreas, locationField) {
    const cityToMetroMap = {};
    
    Object.entries(metroAreas).forEach(([metroKey, metro]) => {
      metro.cities.forEach(city => {
        const key = `${city}|${metro[locationField]}`;
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
    const locationField = country === 'US' ? 'state_code' : 'province_code';
    
    return Object.entries(metroAreas)
      .map(([key, metro]) => ({
        value: key,
        label: `${metro.display_name} (${metro.population.toLocaleString()})`,
        country: country,
        location_code: metro[locationField],
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
    const locationField = country === 'US' ? 'state_code' : 'province_code';
    
    if (!metro) {
      console.warn(`Metro area ${metroKey} not found`);
      return [];
    }
    
    return metro.cities.map(city => ({
      city: city,
      location_code: metro[locationField],
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
      const userLocationCode = geoData.subdivisions?.[0]?.iso_code; // state/province code
      
      if (!userCity || !userCountry || !userLocationCode) {
        return { matched: false, reason: 'Incomplete location data' };
      }
      
      // Check each campaign target
      for (const target of campaignTargets) {
        const match = this.checkTargetMatch(userCity, userLocationCode, userCountry, target);
        if (match.matched) {
          return {
            matched: true,
            target: target,
            userLocation: {
              city: userCity,
              location_code: userLocationCode,
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
          location_code: userLocationCode,
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
  checkTargetMatch(userCity, userLocationCode, userCountry, target) {
    switch (target.type) {
      case 'metro':
        return this.matchMetroTarget(userCity, userLocationCode, userCountry, target);
      
      case 'city':
        return this.matchCityTarget(userCity, userLocationCode, userCountry, target);
      
      case 'state':
      case 'province':
        return this.matchLocationTarget(userLocationCode, userCountry, target);
      
      case 'country':
        return this.matchCountryTarget(userCountry, target);
      
      default:
        return { matched: false, reason: 'Unknown target type' };
    }
  }

  /**
   * Match against metro area targeting
   */
  matchMetroTarget(userCity, userLocationCode, userCountry, target) {
    const cityKey = `${userCity}|${userLocationCode}`;
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
  matchCityTarget(userCity, userLocationCode, userCountry, target) {
    if (target.city === userCity && 
        target.location_code === userLocationCode && 
        target.country === userCountry) {
      return { 
        matched: true, 
        reason: `Direct city match: ${userCity}, ${userLocationCode}` 
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
  matchLocationTarget(userLocationCode, userCountry, target) {
    if (target.location_code === userLocationCode && target.country === userCountry) {
      return { 
        matched: true, 
        reason: `Location match: ${userLocationCode}` 
      };
    }
    
    return { 
      matched: false, 
      reason: 'Location does not match target' 
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
    const locationField = country === 'US' ? 'state_code' : 'province_code';
    
    if (!metro) {
      return null;
    }
    
    return {
      metroKey: metroKey,
      name: metro.name,
      displayName: metro.display_name,
      primaryCity: metro.primary_city,
      locationCode: metro[locationField],
      country: country,
      population: metro.population,
      rank: metro.rank,
      cities: metro.cities,
      cityCount: metro.cities.length
    };
  }

  /**
   * Get metro areas by state/province code
   */
  getMetroAreasByLocation(locationCode, country = 'US') {
    const metroAreas = country === 'US' ? this.usMetroAreas : this.canadianMetroAreas;
    const locationField = country === 'US' ? 'state_code' : 'province_code';
    
    return Object.entries(metroAreas)
      .filter(([key, metro]) => metro[locationField] === locationCode)
      .sort((a, b) => a[1].rank - b[1].rank)
      .map(([key, metro]) => ({ key, ...metro }));
  }

  /**
   * Generate cities.js additions for metro areas
   */
  generateCitiesJSAdditions(country = 'US') {
    const metroAreas = country === 'US' ? this.usMetroAreas : this.canadianMetroAreas;
    const locationField = country === 'US' ? 'state_code' : 'province_code';
    const additions = {};
    
    Object.entries(metroAreas).forEach(([key, metro]) => {
      const locationCode = metro[locationField];
      if (!additions[locationCode]) {
        additions[locationCode] = [];
      }
      additions[locationCode].push(metro.name);
    });
    
    return additions;
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
   * Example: Create a campaign targeting multiple metro areas in New York
   */
  createNewYorkStateCampaign() {
    const nyMetros = this.targeting.getMetroAreasByLocation('NY', 'US');
    
    const campaign = {
      name: "New York State Metro Campaign",
      targets: nyMetros.map(metro => ({
        type: 'metro',
        metro_key: metro.key,
        country: 'US',
        display_name: metro.display_name
      }))
    };
    
    console.log('NY State Metro Campaign includes:', nyMetros.map(m => m.display_name));
    
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

  /**
   * Example: Generate additions for cities.js file
   */
  generateCitiesFileAdditions() {
    const usAdditions = this.targeting.generateCitiesJSAdditions('US');
    const canadianAdditions = this.targeting.generateCitiesJSAdditions('CA');
    
    console.log('US Metro additions for cities.js:');
    console.log(JSON.stringify(usAdditions, null, 2));
    
    console.log('\nCanadian Metro additions for cities.js:');
    console.log(JSON.stringify(canadianAdditions, null, 2));
    
    return { us: usAdditions, canada: canadianAdditions };
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
      <p><strong>Location:</strong> {{ selectedMetroBreakdown.locationCode }}</p>
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
  target_type ENUM('metro', 'city', 'state', 'province', 'country') NOT NULL,
  target_key VARCHAR(100) NOT NULL, -- metro key, city name, location code, or country code
  country_code VARCHAR(2) NOT NULL,
  location_code VARCHAR(10), -- state code (US) or province code (CA)
  display_name VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_campaign_id (campaign_id),
  INDEX idx_target_type (target_type),
  INDEX idx_location (country_code, location_code)
);

-- Pre-computed metro city mapping for fast lookups
CREATE TABLE metro_city_mapping (
  metro_key VARCHAR(100) NOT NULL,
  city_name VARCHAR(100) NOT NULL,
  location_code VARCHAR(10) NOT NULL, -- state/province code
  country_code VARCHAR(2) NOT NULL,
  
  PRIMARY KEY (metro_key, city_name, location_code, country_code),
  INDEX idx_city_lookup (city_name, location_code, country_code)
);

-- Example: Pre-populate metro city mapping
INSERT INTO metro_city_mapping VALUES
('buffalo-metro', 'Buffalo', 'NY', 'US'),
('buffalo-metro', 'Amherst', 'NY', 'US'),
('buffalo-metro', 'Cheektowaga', 'NY', 'US'),
('buffalo-metro', 'Clarence', 'NY', 'US'),
('buffalo-metro', 'Depew', 'NY', 'US'),
('buffalo-metro', 'Kenmore', 'NY', 'US'),
('buffalo-metro', 'Lackawanna', 'NY', 'US'),
('buffalo-metro', 'Lancaster', 'NY', 'US'),
('buffalo-metro', 'Tonawanda', 'NY', 'US'),
('buffalo-metro', 'West Seneca', 'NY', 'US'),
('buffalo-metro', 'Williamsville', 'NY', 'US'),
('buffalo-metro', 'Niagara Falls', 'NY', 'US'),
('buffalo-metro', 'Lockport', 'NY', 'US'),
('buffalo-metro', 'North Tonawanda', 'NY', 'US');
`;

// Integration with your cities.js format
const CitiesJSIntegration = `
// Your existing cities.js format
const CITIES_BY_STATE = {
  "AL": ["Birmingham", "Montgomery", "Huntsville", ...],
  "NY": ["New York", "Buffalo", "Rochester", "Yonkers", ...]
};

// Add metro areas to the arrays
const metroAdditions = {
  "NY": ["New York City Metro Area", "Buffalo Metro Area"],
  "CA": ["Los Angeles Metro Area", "San Francisco Metro Area"],
  "TX": ["Houston Metro Area", "Dallas Metro Area"]
};

// Merge them
Object.keys(metroAdditions).forEach(state => {
  if (CITIES_BY_STATE[state]) {
    CITIES_BY_STATE[state] = [...CITIES_BY_STATE[state], ...metroAdditions[state]];
  }
});
`;

module.exports = {
  AdTargetingSystem,
  AdCampaignExample,
  FrontendExample,
  DatabaseSchema,
  CitiesJSIntegration
};