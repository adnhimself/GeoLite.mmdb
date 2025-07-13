/**
 * Canadian Metro Areas Mapping (Census Metropolitan Areas)
 * Uses province codes (ON, QC, BC, etc.) to match cities.js format
 * Metro area names designed to be added to cities.js arrays
 */

const CANADIAN_METRO_AREAS = {
  "toronto-metro": {
    name: "Toronto Metro Area",
    display_name: "Toronto Metro",
    province_code: "ON",
    primary_city: "Toronto",
    cities: [
      "Toronto",
      "Mississauga",
      "Brampton",
      "Hamilton",
      "London",
      "Markham",
      "Vaughan",
      "Kitchener",
      "Windsor",
      "Richmond Hill",
      "Oakville",
      "Burlington",
      "Oshawa",
      "Barrie",
      "St. Catharines"
    ],
    population: 6202225,
    rank: 1
  },

  "montreal-metro": {
    name: "Montreal Metro Area",
    display_name: "Montreal Metro",
    province_code: "QC",
    primary_city: "Montreal",
    cities: [
      "Montreal",
      "Quebec City",
      "Laval",
      "Gatineau",
      "Longueuil",
      "Sherbrooke",
      "Saguenay",
      "Levis",
      "Trois-Rivières",
      "Terrebonne",
      "Saint-Jean-sur-Richelieu",
      "Repentigny",
      "Brossard",
      "Drummondville",
      "Saint-Jérôme"
    ],
    population: 4291732,
    rank: 2
  },

  "vancouver-metro": {
    name: "Vancouver Metro Area",
    display_name: "Vancouver Metro",
    province_code: "BC",
    primary_city: "Vancouver",
    cities: [
      "Vancouver",
      "Surrey",
      "Burnaby",
      "Richmond",
      "Abbotsford",
      "Coquitlam",
      "Langley",
      "Saanich",
      "Delta",
      "Kelowna",
      "North Vancouver",
      "Kamloops",
      "Nanaimo",
      "Victoria",
      "Chilliwack"
    ],
    population: 2642825,
    rank: 3
  },

  "calgary-metro": {
    name: "Calgary Metro Area",
    display_name: "Calgary Metro",
    province_code: "AB",
    primary_city: "Calgary",
    cities: [
      "Calgary",
      "Edmonton",
      "Red Deer",
      "Lethbridge",
      "St. Albert",
      "Medicine Hat",
      "Grande Prairie",
      "Airdrie",
      "Spruce Grove",
      "Leduc",
      "Lloydminster",
      "Camrose",
      "Fort Saskatchewan",
      "Brooks",
      "Cold Lake"
    ],
    population: 1514723,
    rank: 4
  },

  "edmonton-metro": {
    name: "Edmonton Metro Area",
    display_name: "Edmonton Metro",
    province_code: "AB",
    primary_city: "Edmonton",
    cities: [
      "Edmonton",
      "Calgary",
      "Red Deer",
      "Lethbridge",
      "St. Albert",
      "Medicine Hat",
      "Grande Prairie",
      "Airdrie",
      "Spruce Grove",
      "Leduc",
      "Lloydminster",
      "Camrose",
      "Fort Saskatchewan",
      "Brooks",
      "Cold Lake"
    ],
    population: 1418118,
    rank: 5
  },

  "ottawa-metro": {
    name: "Ottawa Metro Area",
    display_name: "Ottawa Metro",
    province_code: "ON",
    primary_city: "Ottawa",
    cities: [
      "Ottawa",
      "Mississauga",
      "Brampton",
      "Hamilton",
      "London",
      "Markham",
      "Vaughan",
      "Kitchener",
      "Windsor",
      "Richmond Hill",
      "Oakville",
      "Burlington",
      "Oshawa",
      "Barrie",
      "St. Catharines"
    ],
    population: 1488307,
    rank: 6
  },

  "winnipeg-metro": {
    name: "Winnipeg Metro Area",
    display_name: "Winnipeg Metro",
    province_code: "MB",
    primary_city: "Winnipeg",
    cities: [
      "Winnipeg",
      "Brandon",
      "Steinbach",
      "Thompson",
      "Portage la Prairie",
      "Winkler",
      "Selkirk",
      "Morden",
      "Dauphin",
      "The Pas",
      "Flin Flon",
      "Swan River",
      "Virden",
      "Neepawa",
      "Gimli"
    ],
    population: 834678,
    rank: 7
  },

  "quebec-city-metro": {
    name: "Quebec City Metro Area",
    display_name: "Quebec City Metro",
    province_code: "QC",
    primary_city: "Quebec City",
    cities: [
      "Quebec City",
      "Laval",
      "Gatineau",
      "Longueuil",
      "Sherbrooke",
      "Saguenay",
      "Levis",
      "Trois-Rivières",
      "Terrebonne",
      "Saint-Jean-sur-Richelieu",
      "Repentigny",
      "Brossard",
      "Drummondville",
      "Saint-Jérôme",
      "Granby"
    ],
    population: 839311,
    rank: 8
  },

  "hamilton-metro": {
    name: "Hamilton Metro Area",
    display_name: "Hamilton Metro",
    province_code: "ON",
    primary_city: "Hamilton",
    cities: [
      "Hamilton",
      "Toronto",
      "Mississauga",
      "Brampton",
      "London",
      "Markham",
      "Vaughan",
      "Kitchener",
      "Windsor",
      "Richmond Hill",
      "Oakville",
      "Burlington",
      "Oshawa",
      "Barrie",
      "St. Catharines"
    ],
    population: 767000,
    rank: 9
  },

  "kitchener-metro": {
    name: "Kitchener Metro Area",
    display_name: "Kitchener Metro",
    province_code: "ON",
    primary_city: "Kitchener",
    cities: [
      "Kitchener",
      "Waterloo",
      "Cambridge",
      "Guelph",
      "Brantford",
      "Stratford",
      "Woodstock",
      "Ingersoll",
      "Paris",
      "Tillsonburg",
      "Simcoe",
      "Delhi",
      "Mount Forest",
      "Listowel",
      "Elmira"
    ],
    population: 575847,
    rank: 10
  },

  "london-metro": {
    name: "London Metro Area",
    display_name: "London Metro",
    province_code: "ON",
    primary_city: "London",
    cities: [
      "London",
      "Toronto",
      "Mississauga",
      "Brampton",
      "Hamilton",
      "Markham",
      "Vaughan",
      "Kitchener",
      "Windsor",
      "Richmond Hill",
      "Oakville",
      "Burlington",
      "Oshawa",
      "Barrie",
      "St. Catharines"
    ],
    population: 543551,
    rank: 11
  },

  "halifax-metro": {
    name: "Halifax Metro Area",
    display_name: "Halifax Metro",
    province_code: "NS",
    primary_city: "Halifax",
    cities: [
      "Halifax",
      "Dartmouth",
      "Sydney",
      "Truro",
      "New Glasgow",
      "Glace Bay",
      "Bridgewater",
      "Yarmouth",
      "Kentville",
      "Amherst",
      "Antigonish",
      "Wolfville",
      "Lunenburg",
      "Digby",
      "Middleton"
    ],
    population: 465703,
    rank: 12
  },

  "oshawa-metro": {
    name: "Oshawa Metro Area",
    display_name: "Oshawa Metro",
    province_code: "ON",
    primary_city: "Oshawa",
    cities: [
      "Oshawa",
      "Whitby",
      "Ajax",
      "Pickering",
      "Clarington",
      "Scugog",
      "Uxbridge",
      "Brock",
      "Georgina",
      "Newmarket",
      "Aurora",
      "Richmond Hill",
      "Markham",
      "Vaughan",
      "King"
    ],
    population: 415311,
    rank: 13
  },

  "victoria-metro": {
    name: "Victoria Metro Area",
    display_name: "Victoria Metro",
    province_code: "BC",
    primary_city: "Victoria",
    cities: [
      "Victoria",
      "Saanich",
      "Esquimalt",
      "View Royal",
      "Oak Bay",
      "Sidney",
      "Central Saanich",
      "North Saanich",
      "Colwood",
      "Langford",
      "Highlands",
      "Metchosin",
      "Sooke",
      "Salt Spring Island",
      "Pender Island"
    ],
    population: 397237,
    rank: 14
  },

  "windsor-metro": {
    name: "Windsor Metro Area",
    display_name: "Windsor Metro",
    province_code: "ON",
    primary_city: "Windsor",
    cities: [
      "Windsor",
      "Chatham",
      "Sarnia",
      "Leamington",
      "Amherstburg",
      "Tecumseh",
      "LaSalle",
      "Essex",
      "Kingsville",
      "Lakeshore",
      "Wallaceburg",
      "Tilbury",
      "Ridgetown",
      "Blenheim",
      "Dresden"
    ],
    population: 344747,
    rank: 15
  },

  "saskatoon-metro": {
    name: "Saskatoon Metro Area",
    display_name: "Saskatoon Metro",
    province_code: "SK",
    primary_city: "Saskatoon",
    cities: [
      "Saskatoon",
      "Regina",
      "Prince Albert",
      "Moose Jaw",
      "Swift Current",
      "Yorkton",
      "North Battleford",
      "Estevan",
      "Weyburn",
      "Lloydminster",
      "Martensville",
      "Warman",
      "Humboldt",
      "Kindersley",
      "Melfort"
    ],
    population: 317480,
    rank: 16
  },

  "regina-metro": {
    name: "Regina Metro Area",
    display_name: "Regina Metro",
    province_code: "SK",
    primary_city: "Regina",
    cities: [
      "Regina",
      "Saskatoon",
      "Prince Albert",
      "Moose Jaw",
      "Swift Current",
      "Yorkton",
      "North Battleford",
      "Estevan",
      "Weyburn",
      "Lloydminster",
      "Martensville",
      "Warman",
      "Humboldt",
      "Kindersley",
      "Melfort"
    ],
    population: 249217,
    rank: 17
  },

  "sherbrooke-metro": {
    name: "Sherbrooke Metro Area",
    display_name: "Sherbrooke Metro",
    province_code: "QC",
    primary_city: "Sherbrooke",
    cities: [
      "Sherbrooke",
      "Magog",
      "Coaticook",
      "Windsor",
      "Lennoxville",
      "Fleurimont",
      "Rock Forest",
      "Deauville",
      "Ascot Corner",
      "Compton",
      "Waterville",
      "North Hatley",
      "Danville",
      "Asbestos",
      "Richmond"
    ],
    population: 227398,
    rank: 18
  },

  "st-catharines-metro": {
    name: "St. Catharines Metro Area",
    display_name: "St. Catharines Metro",
    province_code: "ON",
    primary_city: "St. Catharines",
    cities: [
      "St. Catharines",
      "Niagara Falls",
      "Welland",
      "Thorold",
      "Port Colborne",
      "Niagara-on-the-Lake",
      "Fort Erie",
      "Pelham",
      "Lincoln",
      "Grimsby",
      "West Lincoln",
      "Wainfleet",
      "Beamsville",
      "Vineland",
      "Jordan"
    ],
    population: 406074,
    rank: 19
  },

  "barrie-metro": {
    name: "Barrie Metro Area",
    display_name: "Barrie Metro",
    province_code: "ON",
    primary_city: "Barrie",
    cities: [
      "Barrie",
      "Orillia",
      "Midland",
      "Collingwood",
      "Alliston",
      "Wasaga Beach",
      "Penetanguishene",
      "Bradford",
      "Innisfil",
      "Essa",
      "Springwater",
      "Clearview",
      "Oro-Medonte",
      "Severn",
      "Ramara"
    ],
    population: 212667,
    rank: 20
  },

  "kelowna-metro": {
    name: "Kelowna Metro Area",
    display_name: "Kelowna Metro",
    province_code: "BC",
    primary_city: "Kelowna",
    cities: [
      "Kelowna",
      "Kamloops",
      "Penticton",
      "Vernon",
      "Salmon Arm",
      "Cranbrook",
      "Nelson",
      "Trail",
      "Castlegar",
      "Grand Forks",
      "Revelstoke",
      "Invermere",
      "Golden",
      "Fernie",
      "Creston"
    ],
    population: 222162,
    rank: 21
  },

  "abbotsford-metro": {
    name: "Abbotsford Metro Area",
    display_name: "Abbotsford Metro",
    province_code: "BC",
    primary_city: "Abbotsford",
    cities: [
      "Abbotsford",
      "Mission",
      "Chilliwack",
      "Maple Ridge",
      "Pitt Meadows",
      "Langley",
      "Surrey",
      "White Rock",
      "Delta",
      "Richmond",
      "Burnaby",
      "New Westminster",
      "Coquitlam",
      "Port Coquitlam",
      "Anmore"
    ],
    population: 195726,
    rank: 22
  },

  "kingston-metro": {
    name: "Kingston Metro Area",
    display_name: "Kingston Metro",
    province_code: "ON",
    primary_city: "Kingston",
    cities: [
      "Kingston",
      "Belleville",
      "Cornwall",
      "Brockville",
      "Pembroke",
      "Petawawa",
      "Smiths Falls",
      "Ganoque",
      "Napanee",
      "Picton",
      "Trenton",
      "Brighton",
      "Cobourg",
      "Port Hope",
      "Lindsay"
    ],
    population: 172546,
    rank: 23
  },

  "saguenay-metro": {
    name: "Saguenay Metro Area",
    display_name: "Saguenay Metro",
    province_code: "QC",
    primary_city: "Saguenay",
    cities: [
      "Saguenay",
      "Chicoutimi",
      "Jonquière",
      "La Baie",
      "Alma",
      "Dolbeau-Mistassini",
      "Roberval",
      "Saint-Félicien",
      "Chibougamau",
      "Chapais",
      "Lebel-sur-Quévillon",
      "Matagami",
      "Normandin",
      "Hébertville",
      "Métabetchouan-Lac-à-la-Croix"
    ],
    population: 165636,
    rank: 24
  },

  "trois-rivieres-metro": {
    name: "Trois-Rivières Metro Area",
    display_name: "Trois-Rivières Metro",
    province_code: "QC",
    primary_city: "Trois-Rivières",
    cities: [
      "Trois-Rivières",
      "Shawinigan",
      "Cap-de-la-Madeleine",
      "Bécancour",
      "Nicolet",
      "Louiseville",
      "La Tuque",
      "Grand-Mère",
      "Sainte-Marthe-du-Cap",
      "Pointe-du-Lac",
      "Sainte-Anne-de-la-Pérade",
      "Yamachiche",
      "Maskinongé",
      "Saint-Étienne-des-Grès",
      "Sainte-Geneviève-de-Batiscan"
    ],
    population: 161489,
    rank: 25
  },

  "moncton-metro": {
    name: "Moncton Metro Area",
    display_name: "Moncton Metro",
    province_code: "NB",
    primary_city: "Moncton",
    cities: [
      "Moncton",
      "Saint John",
      "Fredericton",
      "Dieppe",
      "Riverview",
      "Bathurst",
      "Campbellton",
      "Edmundston",
      "Miramichi",
      "Dalhousie",
      "Sussex",
      "Woodstock",
      "Sackville",
      "Shediac",
      "Richibucto"
    ],
    population: 157717,
    rank: 26
  },

  "saint-john-metro": {
    name: "Saint John Metro Area",
    display_name: "Saint John Metro",
    province_code: "NB",
    primary_city: "Saint John",
    cities: [
      "Saint John",
      "Moncton",
      "Fredericton",
      "Dieppe",
      "Riverview",
      "Bathurst",
      "Campbellton",
      "Edmundston",
      "Miramichi",
      "Dalhousie",
      "Sussex",
      "Woodstock",
      "Sackville",
      "Shediac",
      "Richibucto"
    ],
    population: 130613,
    rank: 27
  },

  "thunder-bay-metro": {
    name: "Thunder Bay Metro Area",
    display_name: "Thunder Bay Metro",
    province_code: "ON",
    primary_city: "Thunder Bay",
    cities: [
      "Thunder Bay",
      "Kenora",
      "Dryden",
      "Fort Frances",
      "Atikokan",
      "Sioux Lookout",
      "Red Lake",
      "Geraldton",
      "Nipigon",
      "Marathon",
      "Wawa",
      "Hearst",
      "Kapuskasing",
      "Timmins",
      "Cochrane"
    ],
    population: 123258,
    rank: 28
  },

  "sudbury-metro": {
    name: "Sudbury Metro Area",
    display_name: "Sudbury Metro",
    province_code: "ON",
    primary_city: "Sudbury",
    cities: [
      "Sudbury",
      "Sault Ste. Marie",
      "North Bay",
      "Timmins",
      "Elliot Lake",
      "Espanola",
      "Kapuskasing",
      "Kirkland Lake",
      "New Liskeard",
      "Cobalt",
      "Iroquois Falls",
      "Smooth Rock Falls",
      "Cochrane",
      "Hearst",
      "Chapleau"
    ],
    population: 166004,
    rank: 29
  },

  "peterborough-metro": {
    name: "Peterborough Metro Area",
    display_name: "Peterborough Metro",
    province_code: "ON",
    primary_city: "Peterborough",
    cities: [
      "Peterborough",
      "Kawartha Lakes",
      "Lindsay",
      "Cobourg",
      "Port Hope",
      "Campbellford",
      "Brighton",
      "Trenton",
      "Belleville",
      "Picton",
      "Napanee",
      "Kingston",
      "Bancroft",
      "Haliburton",
      "Minden"
    ],
    population: 128624,
    rank: 30
  },

  "brantford-metro": {
    name: "Brantford Metro Area",
    display_name: "Brantford Metro",
    province_code: "ON",
    primary_city: "Brantford",
    cities: [
      "Brantford",
      "Paris",
      "Simcoe",
      "Delhi",
      "Tillsonburg",
      "Woodstock",
      "Ingersoll",
      "Stratford",
      "St. Thomas",
      "Aylmer",
      "Port Burwell",
      "Turkey Point",
      "Long Point",
      "Courtland",
      "Waterford"
    ],
    population: 144162,
    rank: 31
  },

  "guelph-metro": {
    name: "Guelph Metro Area",
    display_name: "Guelph Metro",
    province_code: "ON",
    primary_city: "Guelph",
    cities: [
      "Guelph",
      "Cambridge",
      "Waterloo",
      "Kitchener",
      "Fergus",
      "Elora",
      "Acton",
      "Georgetown",
      "Milton",
      "Oakville",
      "Burlington",
      "Dundas",
      "Ancaster",
      "Stoney Creek",
      "Grimsby"
    ],
    population: 151984,
    rank: 32
  },

  "charlottetown-metro": {
    name: "Charlottetown Metro Area",
    display_name: "Charlottetown Metro",
    province_code: "PE",
    primary_city: "Charlottetown",
    cities: [
      "Charlottetown",
      "Summerside",
      "Montague",
      "Souris",
      "Kensington",
      "Alberton",
      "Tignish",
      "Georgetown",
      "Stratford",
      "Cornwall",
      "Borden-Carleton",
      "O'Leary",
      "Cavendish",
      "Brackley",
      "Hunter River"
    ],
    population: 79411,
    rank: 33
  },

  "fredericton-metro": {
    name: "Fredericton Metro Area",
    display_name: "Fredericton Metro",
    province_code: "NB",
    primary_city: "Fredericton",
    cities: [
      "Fredericton",
      "Oromocto",
      "Nackawic",
      "Woodstock",
      "Hartland",
      "Florenceville-Bristol",
      "Grand Falls",
      "Plaster Rock",
      "Perth-Andover",
      "Sussex",
      "Hampton",
      "Quispamsis",
      "Rothesay",
      "Saint John",
      "Moncton"
    ],
    population: 108610,
    rank: 34
  },

  "red-deer-metro": {
    name: "Red Deer Metro Area",
    display_name: "Red Deer Metro",
    province_code: "AB",
    primary_city: "Red Deer",
    cities: [
      "Red Deer",
      "Lacombe",
      "Blackfalds",
      "Sylvan Lake",
      "Penhold",
      "Innisfail",
      "Olds",
      "Didsbury",
      "Sundre",
      "Carstairs",
      "Cremona",
      "Three Hills",
      "Trochu",
      "Stettler",
      "Castor"
    ],
    population: 106072,
    rank: 35
  },

  "lethbridge-metro": {
    name: "Lethbridge Metro Area",
    display_name: "Lethbridge Metro",
    province_code: "AB",
    primary_city: "Lethbridge",
    cities: [
      "Lethbridge",
      "Taber",
      "Coaldale",
      "Picture Butte",
      "Raymond",
      "Magrath",
      "Cardston",
      "Pincher Creek",
      "Claresholm",
      "Nanton",
      "High River",
      "Okotoks",
      "Turner Valley",
      "Black Diamond",
      "Cochrane"
    ],
    population: 117394,
    rank: 36
  },

  "medicine-hat-metro": {
    name: "Medicine Hat Metro Area",
    display_name: "Medicine Hat Metro",
    province_code: "AB",
    primary_city: "Medicine Hat",
    cities: [
      "Medicine Hat",
      "Redcliff",
      "Bow Island",
      "Foremost",
      "Bassano",
      "Brooks",
      "Kindersley",
      "Alsask",
      "Oyen",
      "Hanna",
      "Drumheller",
      "Three Hills",
      "Coronation",
      "Castor",
      "Consort"
    ],
    population: 76522,
    rank: 37
  },

  "grande-prairie-metro": {
    name: "Grande Prairie Metro Area",
    display_name: "Grande Prairie Metro",
    province_code: "AB",
    primary_city: "Grande Prairie",
    cities: [
      "Grande Prairie",
      "Peace River",
      "High Level",
      "Slave Lake",
      "Athabasca",
      "Westlock",
      "Barrhead",
      "Mayerthorpe",
      "Whitecourt",
      "Fox Creek",
      "Valleyview",
      "Fairview",
      "Manning",
      "Grimshaw",
      "Falher"
    ],
    population: 71868,
    rank: 38
  },

  "wood-buffalo-metro": {
    name: "Wood Buffalo Metro Area",
    display_name: "Wood Buffalo Metro",
    province_code: "AB",
    primary_city: "Fort McMurray",
    cities: [
      "Fort McMurray",
      "Fort McKay",
      "Fort Chipewyan",
      "Anzac",
      "Conklin",
      "Janvier",
      "Gregoire Lake Estates",
      "Saprae Creek Estates",
      "Draper",
      "Parsons Creek",
      "Prairie Creek",
      "Kinosis",
      "Mariana Lake",
      "Cristina Lake",
      "Poplar Point"
    ],
    population: 72917,
    rank: 39
  },

  "prince-george-metro": {
    name: "Prince George Metro Area",
    display_name: "Prince George Metro",
    province_code: "BC",
    primary_city: "Prince George",
    cities: [
      "Prince George",
      "Quesnel",
      "Williams Lake",
      "Vanderhoof",
      "Burns Lake",
      "Smithers",
      "Terrace",
      "Kitimat",
      "Prince Rupert",
      "Fort St. John",
      "Dawson Creek",
      "Tumbler Ridge",
      "Chetwynd",
      "Hudson's Hope",
      "Pouce Coupe"
    ],
    population: 86622,
    rank: 40
  }
};

// Helper function to get all metro areas sorted by population
function getMetroAreasByPopulation() {
  return Object.entries(CANADIAN_METRO_AREAS)
    .sort((a, b) => b[1].population - a[1].population)
    .map(([key, metro]) => ({ key, ...metro }));
}

// Helper function to get metro areas by province
function getMetroAreasByProvince(provinceCode) {
  return Object.entries(CANADIAN_METRO_AREAS)
    .filter(([key, metro]) => metro.province_code === provinceCode)
    .sort((a, b) => b[1].population - a[1].population)
    .map(([key, metro]) => ({ key, ...metro }));
}

// Helper function to find metro area by city
function findMetroAreaByCity(cityName, provinceCode) {
  for (const [key, metro] of Object.entries(CANADIAN_METRO_AREAS)) {
    if (metro.province_code === provinceCode && metro.cities.includes(cityName)) {
      return { key, ...metro };
    }
  }
  return null;
}

// Function to generate cities.js additions
function generateCitiesJSAdditions() {
  const provinceMetroAdditions = {};
  
  Object.entries(CANADIAN_METRO_AREAS).forEach(([key, metro]) => {
    const provinceCode = metro.province_code;
    if (!provinceMetroAdditions[provinceCode]) {
      provinceMetroAdditions[provinceCode] = [];
    }
    provinceMetroAdditions[provinceCode].push(metro.name);
  });
  
  return provinceMetroAdditions;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CANADIAN_METRO_AREAS,
    getMetroAreasByPopulation,
    getMetroAreasByProvince,
    findMetroAreaByCity,
    generateCitiesJSAdditions
  };
}

// Also create a browser-friendly global
if (typeof window !== 'undefined') {
  window.CANADIAN_METRO_AREAS = CANADIAN_METRO_AREAS;
  window.getMetroAreasByPopulation = getMetroAreasByPopulation;
  window.getMetroAreasByProvince = getMetroAreasByProvince;
  window.findMetroAreaByCity = findMetroAreaByCity;
  window.generateCitiesJSAdditions = generateCitiesJSAdditions;
}