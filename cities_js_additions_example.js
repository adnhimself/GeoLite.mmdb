/**
 * Example of Metro Area additions for cities.js file
 * These metro area names would be added to your existing cities arrays
 */

// US Metro Area additions by state code
const US_METRO_ADDITIONS = {
  "AL": [
    // No major metro areas in this selection
  ],
  "AK": [
    // No major metro areas in this selection
  ],
  "AZ": [
    "Phoenix Metro Area",
    "Tucson Metro Area",
    "Mesa Metro Area"
  ],
  "AR": [
    // No major metro areas in this selection
  ],
  "CA": [
    "Los Angeles Metro Area",
    "San Diego Metro Area",
    "San Jose Metro Area",
    "San Francisco Metro Area",
    "Fresno Metro Area",
    "Sacramento Metro Area",
    "Long Beach Metro Area"
  ],
  "CO": [
    "Denver Metro Area",
    "Colorado Springs Metro Area"
  ],
  "CT": [
    // No major metro areas in this selection
  ],
  "DC": [
    "Washington DC Metro Area"
  ],
  "FL": [
    "Jacksonville Metro Area",
    "Miami Metro Area",
    "Tampa Metro Area"
  ],
  "GA": [
    "Atlanta Metro Area"
  ],
  "IL": [
    "Chicago Metro Area"
  ],
  "IN": [
    "Indianapolis Metro Area"
  ],
  "KS": [
    "Wichita Metro Area"
  ],
  "KY": [
    "Louisville Metro Area"
  ],
  "LA": [
    "New Orleans Metro Area"
  ],
  "MA": [
    "Boston Metro Area"
  ],
  "MD": [
    "Baltimore Metro Area"
  ],
  "MI": [
    "Detroit Metro Area"
  ],
  "MN": [
    "Minneapolis Metro Area"
  ],
  "MO": [
    "Kansas City Metro Area"
  ],
  "NC": [
    "Charlotte Metro Area",
    "Raleigh Metro Area"
  ],
  "NE": [
    "Omaha Metro Area"
  ],
  "NV": [
    "Las Vegas Metro Area"
  ],
  "NM": [
    "Albuquerque Metro Area"
  ],
  "NY": [
    "New York City Metro Area",
    "Buffalo Metro Area"
  ],
  "OH": [
    "Columbus Metro Area",
    "Cleveland Metro Area"
  ],
  "OK": [
    "Oklahoma City Metro Area",
    "Tulsa Metro Area"
  ],
  "OR": [
    "Portland Metro Area"
  ],
  "PA": [
    "Philadelphia Metro Area"
  ],
  "TN": [
    "Nashville Metro Area"
  ],
  "TX": [
    "Houston Metro Area",
    "San Antonio Metro Area",
    "Dallas Metro Area",
    "Austin Metro Area",
    "Fort Worth Metro Area",
    "El Paso Metro Area",
    "Arlington Metro Area"
  ],
  "VA": [
    "Virginia Beach Metro Area"
  ],
  "WA": [
    "Seattle Metro Area"
  ],
  "WI": [
    "Milwaukee Metro Area"
  ]
};

// Canadian Metro Area additions by province code
const CANADIAN_METRO_ADDITIONS = {
  "AB": [
    "Calgary Metro Area",
    "Edmonton Metro Area",
    "Red Deer Metro Area",
    "Lethbridge Metro Area",
    "Medicine Hat Metro Area",
    "Grande Prairie Metro Area",
    "Wood Buffalo Metro Area"
  ],
  "BC": [
    "Vancouver Metro Area",
    "Victoria Metro Area",
    "Kelowna Metro Area",
    "Abbotsford Metro Area",
    "Prince George Metro Area"
  ],
  "MB": [
    "Winnipeg Metro Area"
  ],
  "NB": [
    "Moncton Metro Area",
    "Saint John Metro Area",
    "Fredericton Metro Area"
  ],
  "NS": [
    "Halifax Metro Area"
  ],
  "ON": [
    "Toronto Metro Area",
    "Ottawa Metro Area",
    "Hamilton Metro Area",
    "Kitchener Metro Area",
    "London Metro Area",
    "Oshawa Metro Area",
    "Windsor Metro Area",
    "St. Catharines Metro Area",
    "Barrie Metro Area",
    "Kingston Metro Area",
    "Thunder Bay Metro Area",
    "Sudbury Metro Area",
    "Peterborough Metro Area",
    "Brantford Metro Area",
    "Guelph Metro Area"
  ],
  "PE": [
    "Charlottetown Metro Area"
  ],
  "QC": [
    "Montreal Metro Area",
    "Quebec City Metro Area",
    "Sherbrooke Metro Area",
    "Saguenay Metro Area",
    "Trois-Rivières Metro Area"
  ],
  "SK": [
    "Saskatoon Metro Area",
    "Regina Metro Area"
  ]
};

// How to merge with your existing cities.js
const INTEGRATION_EXAMPLE = {
  before: {
    "NY": [
      "New York",
      "Brooklyn", 
      "Queens",
      "Bronx",
      "Staten Island",
      "Buffalo",
      "Rochester",
      "Yonkers",
      "Syracuse",
      "Albany"
    ]
  },
  after: {
    "NY": [
      "New York",
      "Brooklyn", 
      "Queens",
      "Bronx",
      "Staten Island",
      "Buffalo",
      "Rochester",
      "Yonkers",
      "Syracuse",
      "Albany",
      // Metro areas added:
      "New York City Metro Area",
      "Buffalo Metro Area"
    ]
  }
};

// Integration code example
const integrationCode = `
// Your existing cities.js file
const CITIES_BY_STATE = {
  "AL": ["Birmingham", "Montgomery", "Huntsville", ...],
  "NY": ["New York", "Buffalo", "Rochester", ...],
  // ... other states
};

// Import metro additions
const { US_METRO_ADDITIONS } = require('./cities_js_additions_example.js');

// Merge metro areas into existing cities
Object.keys(US_METRO_ADDITIONS).forEach(stateCode => {
  if (CITIES_BY_STATE[stateCode] && US_METRO_ADDITIONS[stateCode].length > 0) {
    CITIES_BY_STATE[stateCode] = [
      ...CITIES_BY_STATE[stateCode],
      ...US_METRO_ADDITIONS[stateCode]
    ];
  }
});

// Now when advertisers select targeting:
// - "Buffalo" = targets Buffalo city only
// - "Buffalo Metro Area" = targets entire metro (Buffalo + Amherst + Cheektowaga + etc.)
`;

// For your adtech system implementation
const ADTECH_IMPLEMENTATION = `
// In your targeting system:
function processGeoTargeting(ipAddress, selectedTargets) {
  const mmdbData = maxmindReader.get(ipAddress);
  const userCity = mmdbData.city.names.en;
  const userState = mmdbData.subdivisions[0].iso_code;
  
  for (const target of selectedTargets) {
    if (target.endsWith(' Metro Area')) {
      // Metro area targeting - check if user city is in the metro
      const metroKey = getMetroKeyFromName(target);
      const metroCities = getMetroCities(metroKey);
      
      if (metroCities.includes(userCity)) {
        return { matched: true, reason: 'Metro area match' };
      }
    } else {
      // Direct city targeting
      if (target === userCity) {
        return { matched: true, reason: 'Direct city match' };
      }
    }
  }
  
  return { matched: false };
}
`;

module.exports = {
  US_METRO_ADDITIONS,
  CANADIAN_METRO_ADDITIONS,
  INTEGRATION_EXAMPLE,
  integrationCode,
  ADTECH_IMPLEMENTATION
};