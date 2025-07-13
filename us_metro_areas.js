/**
 * Top 50 US Metro Areas Mapping
 * Uses state codes (NY, CA, etc.) to match cities.js format
 * Metro area names designed to be added to cities.js arrays
 */

const US_METRO_AREAS = {
  "new-york-metro": {
    name: "New York City Metro Area",
    display_name: "New York Metro",
    state_code: "NY",
    primary_city: "New York",
    cities: [
      "New York",
      "Brooklyn", 
      "Queens",
      "Bronx",
      "Staten Island",
      "Yonkers",
      "Syracuse",
      "Albany",
      "Buffalo",
      "Rochester",
      "New Rochelle",
      "Mount Vernon",
      "Schenectady",
      "Utica",
      "White Plains"
    ],
    population: 8336817,
    rank: 1
  },

  "los-angeles-metro": {
    name: "Los Angeles Metro Area",
    display_name: "Los Angeles Metro",
    state_code: "CA",
    primary_city: "Los Angeles",
    cities: [
      "Los Angeles",
      "Long Beach",
      "Glendale",
      "Santa Clarita",
      "Burbank",
      "Pasadena",
      "Torrance",
      "Inglewood",
      "Santa Monica",
      "West Hollywood",
      "Beverly Hills",
      "Compton",
      "Downey",
      "Norwalk",
      "Pomona"
    ],
    population: 3898747,
    rank: 2
  },

  "chicago-metro": {
    name: "Chicago Metro Area",
    display_name: "Chicago Metro",
    state_code: "IL",
    primary_city: "Chicago",
    cities: [
      "Chicago",
      "Aurora",
      "Joliet",
      "Naperville",
      "Rockford",
      "Elgin",
      "Peoria",
      "Waukegan",
      "Cicero",
      "Champaign",
      "Bloomington",
      "Arlington Heights",
      "Schaumburg",
      "Bolingbrook",
      "Palatine"
    ],
    population: 2746388,
    rank: 3
  },

  "houston-metro": {
    name: "Houston Metro Area",
    display_name: "Houston Metro",
    state_code: "TX",
    primary_city: "Houston",
    cities: [
      "Houston",
      "Sugar Land",
      "Baytown",
      "Pasadena",
      "Pearland",
      "League City",
      "Missouri City",
      "Conroe",
      "Texas City",
      "Friendswood",
      "Katy",
      "Galveston",
      "Huntsville",
      "Rosenberg",
      "Angleton"
    ],
    population: 2304580,
    rank: 4
  },

  "phoenix-metro": {
    name: "Phoenix Metro Area",
    display_name: "Phoenix Metro",
    state_code: "AZ",
    primary_city: "Phoenix",
    cities: [
      "Phoenix",
      "Mesa",
      "Chandler",
      "Scottsdale",
      "Glendale",
      "Gilbert",
      "Tempe",
      "Peoria",
      "Surprise",
      "Goodyear",
      "Avondale",
      "Tucson",
      "Flagstaff",
      "Yuma",
      "Buckeye"
    ],
    population: 1608139,
    rank: 5
  },

  "philadelphia-metro": {
    name: "Philadelphia Metro Area",
    display_name: "Philadelphia Metro",
    state_code: "PA",
    primary_city: "Philadelphia",
    cities: [
      "Philadelphia",
      "Pittsburgh",
      "Allentown",
      "Erie",
      "Reading",
      "Scranton",
      "Bethlehem",
      "Lancaster",
      "Harrisburg",
      "Altoona",
      "York",
      "Wilkes-Barre",
      "Chester",
      "Norristown",
      "Upper Darby"
    ],
    population: 1584064,
    rank: 6
  },

  "san-antonio-metro": {
    name: "San Antonio Metro Area",
    display_name: "San Antonio Metro",
    state_code: "TX",
    primary_city: "San Antonio",
    cities: [
      "San Antonio",
      "New Braunfels",
      "Schertz",
      "Cibolo",
      "Seguin",
      "Universal City",
      "Converse",
      "Selma",
      "Live Oak",
      "Boerne",
      "Kerrville",
      "Fredericksburg",
      "Castroville",
      "Floresville",
      "Pleasanton"
    ],
    population: 1547253,
    rank: 7
  },

  "san-diego-metro": {
    name: "San Diego Metro Area",
    display_name: "San Diego Metro",
    state_code: "CA",
    primary_city: "San Diego",
    cities: [
      "San Diego",
      "Chula Vista",
      "Oceanside",
      "Escondido",
      "Carlsbad",
      "El Cajon",
      "Vista",
      "San Marcos",
      "Encinitas",
      "National City",
      "La Mesa",
      "Santee",
      "Poway",
      "Coronado",
      "Imperial Beach"
    ],
    population: 1386932,
    rank: 8
  },

  "dallas-metro": {
    name: "Dallas Metro Area",
    display_name: "Dallas Metro",
    state_code: "TX",
    primary_city: "Dallas",
    cities: [
      "Dallas",
      "Fort Worth",
      "Arlington",
      "Plano",
      "Garland",
      "Irving",
      "Grand Prairie",
      "Mesquite",
      "McKinney",
      "Carrollton",
      "Frisco",
      "Denton",
      "Richardson",
      "Lewisville",
      "Allen"
    ],
    population: 1304379,
    rank: 9
  },

  "san-jose-metro": {
    name: "San Jose Metro Area",
    display_name: "San Jose Metro",
    state_code: "CA",
    primary_city: "San Jose",
    cities: [
      "San Jose",
      "San Francisco",
      "Oakland",
      "Fremont",
      "Santa Clara",
      "Sunnyvale",
      "Hayward",
      "Concord",
      "Salinas",
      "Vallejo",
      "Berkeley",
      "Richmond",
      "Antioch",
      "Daly City",
      "San Mateo"
    ],
    population: 1013240,
    rank: 10
  },

  "austin-metro": {
    name: "Austin Metro Area",
    display_name: "Austin Metro",
    state_code: "TX",
    primary_city: "Austin",
    cities: [
      "Austin",
      "Round Rock",
      "Cedar Park",
      "Georgetown",
      "Pflugerville",
      "Leander",
      "San Marcos",
      "Kyle",
      "Buda",
      "Hutto",
      "Lockhart",
      "Dripping Springs",
      "Bastrop",
      "Elgin",
      "Taylor"
    ],
    population: 978908,
    rank: 11
  },

  "jacksonville-metro": {
    name: "Jacksonville Metro Area",
    display_name: "Jacksonville Metro",
    state_code: "FL",
    primary_city: "Jacksonville",
    cities: [
      "Jacksonville",
      "Miami",
      "Tampa",
      "Orlando",
      "St. Petersburg",
      "Hialeah",
      "Tallahassee",
      "Fort Lauderdale",
      "Port St. Lucie",
      "Cape Coral",
      "Pembroke Pines",
      "Hollywood",
      "Miramar",
      "Gainesville",
      "Coral Springs"
    ],
    population: 949611,
    rank: 12
  },

  "fort-worth-metro": {
    name: "Fort Worth Metro Area",
    display_name: "Fort Worth Metro",
    state_code: "TX",
    primary_city: "Fort Worth",
    cities: [
      "Fort Worth",
      "Arlington",
      "Grand Prairie",
      "Carrollton",
      "Denton",
      "Lewisville",
      "Flower Mound",
      "Euless",
      "Bedford",
      "Grapevine",
      "Hurst",
      "Keller",
      "Southlake",
      "Colleyville",
      "North Richland Hills"
    ],
    population: 918915,
    rank: 13
  },

  "columbus-metro": {
    name: "Columbus Metro Area",
    display_name: "Columbus Metro",
    state_code: "OH",
    primary_city: "Columbus",
    cities: [
      "Columbus",
      "Cleveland",
      "Cincinnati",
      "Toledo",
      "Akron",
      "Dayton",
      "Youngstown",
      "Canton",
      "Lorain",
      "Hamilton",
      "Springfield",
      "Kettering",
      "Elyria",
      "Lakewood",
      "Cuyahoga Falls"
    ],
    population: 905748,
    rank: 14
  },

  "charlotte-metro": {
    name: "Charlotte Metro Area",
    display_name: "Charlotte Metro",
    state_code: "NC",
    primary_city: "Charlotte",
    cities: [
      "Charlotte",
      "Raleigh",
      "Greensboro",
      "Durham",
      "Winston-Salem",
      "Fayetteville",
      "Cary",
      "Wilmington",
      "High Point",
      "Greenville",
      "Asheville",
      "Concord",
      "Gastonia",
      "Jacksonville",
      "Chapel Hill"
    ],
    population: 874579,
    rank: 15
  },

  "indianapolis-metro": {
    name: "Indianapolis Metro Area",
    display_name: "Indianapolis Metro",
    state_code: "IN",
    primary_city: "Indianapolis",
    cities: [
      "Indianapolis",
      "Fort Wayne",
      "Evansville",
      "South Bend",
      "Carmel",
      "Fishers",
      "Bloomington",
      "Hammond",
      "Gary",
      "Muncie",
      "Lafayette",
      "Terre Haute",
      "Kokomo",
      "Anderson",
      "Noblesville"
    ],
    population: 887642,
    rank: 16
  },

  "san-francisco-metro": {
    name: "San Francisco Metro Area",
    display_name: "San Francisco Metro",
    state_code: "CA",
    primary_city: "San Francisco",
    cities: [
      "San Francisco",
      "Oakland",
      "Fremont",
      "Santa Clara",
      "Sunnyvale",
      "Hayward",
      "Concord",
      "Salinas",
      "Vallejo",
      "Berkeley",
      "Richmond",
      "Antioch",
      "Daly City",
      "San Mateo",
      "Redwood City"
    ],
    population: 881549,
    rank: 17
  },

  "seattle-metro": {
    name: "Seattle Metro Area",
    display_name: "Seattle Metro",
    state_code: "WA",
    primary_city: "Seattle",
    cities: [
      "Seattle",
      "Spokane",
      "Tacoma",
      "Vancouver",
      "Bellevue",
      "Kent",
      "Everett",
      "Renton",
      "Yakima",
      "Federal Way",
      "Spokane Valley",
      "Bellingham",
      "Kennewick",
      "Auburn",
      "Pasco"
    ],
    population: 749015,
    rank: 18
  },

  "denver-metro": {
    name: "Denver Metro Area",
    display_name: "Denver Metro",
    state_code: "CO",
    primary_city: "Denver",
    cities: [
      "Denver",
      "Colorado Springs",
      "Aurora",
      "Fort Collins",
      "Lakewood",
      "Thornton",
      "Arvada",
      "Westminster",
      "Pueblo",
      "Centennial",
      "Boulder",
      "Greeley",
      "Longmont",
      "Loveland",
      "Grand Junction"
    ],
    population: 715522,
    rank: 19
  },

  "washington-metro": {
    name: "Washington DC Metro Area",
    display_name: "Washington Metro",
    state_code: "DC",
    primary_city: "Washington",
    cities: [
      "Washington"
    ],
    population: 705749,
    rank: 20
  },

  "boston-metro": {
    name: "Boston Metro Area",
    display_name: "Boston Metro",
    state_code: "MA",
    primary_city: "Boston",
    cities: [
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Bedford",
      "Brockton",
      "Quincy",
      "Lynn",
      "Fall River",
      "Newton",
      "Lawrence",
      "Somerville",
      "Framingham",
      "Haverhill"
    ],
    population: 695506,
    rank: 21
  },

  "el-paso-metro": {
    name: "El Paso Metro Area",
    display_name: "El Paso Metro",
    state_code: "TX",
    primary_city: "El Paso",
    cities: [
      "El Paso",
      "Laredo",
      "Brownsville",
      "Lubbock",
      "Amarillo",
      "Beaumont",
      "Waco",
      "Carrollton",
      "Abilene",
      "Odessa",
      "Midland",
      "Longview",
      "Bryan",
      "College Station",
      "Texarkana"
    ],
    population: 695044,
    rank: 22
  },

  "detroit-metro": {
    name: "Detroit Metro Area",
    display_name: "Detroit Metro",
    state_code: "MI",
    primary_city: "Detroit",
    cities: [
      "Detroit",
      "Grand Rapids",
      "Warren",
      "Sterling Heights",
      "Lansing",
      "Ann Arbor",
      "Flint",
      "Dearborn",
      "Livonia",
      "Westland",
      "Troy",
      "Farmington Hills",
      "Kalamazoo",
      "Wyoming",
      "Southfield"
    ],
    population: 670031,
    rank: 23
  },

  "nashville-metro": {
    name: "Nashville Metro Area",
    display_name: "Nashville Metro",
    state_code: "TN",
    primary_city: "Nashville",
    cities: [
      "Nashville",
      "Memphis",
      "Knoxville",
      "Chattanooga",
      "Clarksville",
      "Murfreesboro",
      "Franklin",
      "Johnson City",
      "Bartlett",
      "Hendersonville",
      "Kingsport",
      "Collierville",
      "Smyrna",
      "Brentwood",
      "Cleveland"
    ],
    population: 689447,
    rank: 24
  },

  "portland-metro": {
    name: "Portland Metro Area",
    display_name: "Portland Metro",
    state_code: "OR",
    primary_city: "Portland",
    cities: [
      "Portland",
      "Eugene",
      "Salem",
      "Gresham",
      "Hillsboro",
      "Bend",
      "Beaverton",
      "Medford",
      "Springfield",
      "Corvallis",
      "Albany",
      "Tigard",
      "Lake Oswego",
      "Keizer",
      "Grants Pass"
    ],
    population: 652503,
    rank: 25
  },

  "oklahoma-city-metro": {
    name: "Oklahoma City Metro Area",
    display_name: "Oklahoma City Metro",
    state_code: "OK",
    primary_city: "Oklahoma City",
    cities: [
      "Oklahoma City",
      "Tulsa",
      "Norman",
      "Broken Arrow",
      "Lawton",
      "Edmond",
      "Moore",
      "Midwest City",
      "Enid",
      "Stillwater",
      "Muskogee",
      "Bartlesville",
      "Owasso",
      "Shawnee",
      "Ponca City"
    ],
    population: 695355,
    rank: 26
  },

  "las-vegas-metro": {
    name: "Las Vegas Metro Area",
    display_name: "Las Vegas Metro",
    state_code: "NV",
    primary_city: "Las Vegas",
    cities: [
      "Las Vegas",
      "Henderson",
      "Reno",
      "North Las Vegas",
      "Sparks",
      "Carson City",
      "Fernley",
      "Mesquite",
      "Boulder City",
      "Elko",
      "West Wendover",
      "Winnemucca",
      "Ely",
      "Yerington",
      "Fallon"
    ],
    population: 641903,
    rank: 27
  },

  "louisville-metro": {
    name: "Louisville Metro Area",
    display_name: "Louisville Metro",
    state_code: "KY",
    primary_city: "Louisville",
    cities: [
      "Louisville",
      "Lexington",
      "Bowling Green",
      "Owensboro",
      "Covington",
      "Hopkinsville",
      "Richmond",
      "Florence",
      "Georgetown",
      "Henderson",
      "Elizabethtown",
      "Nicholasville",
      "Jeffersontown",
      "Frankfort",
      "Paducah"
    ],
    population: 633045,
    rank: 28
  },

  "baltimore-metro": {
    name: "Baltimore Metro Area",
    display_name: "Baltimore Metro",
    state_code: "MD",
    primary_city: "Baltimore",
    cities: [
      "Baltimore",
      "Frederick",
      "Rockville",
      "Gaithersburg",
      "Bowie",
      "Hagerstown",
      "Annapolis",
      "College Park",
      "Salisbury",
      "Greenbelt",
      "Laurel",
      "Cumberland",
      "Hyattsville",
      "Takoma Park",
      "Westminster"
    ],
    population: 585708,
    rank: 29
  },

  "milwaukee-metro": {
    name: "Milwaukee Metro Area",
    display_name: "Milwaukee Metro",
    state_code: "WI",
    primary_city: "Milwaukee",
    cities: [
      "Milwaukee",
      "Madison",
      "Green Bay",
      "Kenosha",
      "Racine",
      "Appleton",
      "Waukesha",
      "Eau Claire",
      "Oshkosh",
      "Janesville",
      "West Allis",
      "La Crosse",
      "Sheboygan",
      "Wauwatosa",
      "Fond du Lac"
    ],
    population: 577222,
    rank: 30
  },

  "albuquerque-metro": {
    name: "Albuquerque Metro Area",
    display_name: "Albuquerque Metro",
    state_code: "NM",
    primary_city: "Albuquerque",
    cities: [
      "Albuquerque",
      "Las Cruces",
      "Rio Rancho",
      "Santa Fe",
      "Roswell",
      "Farmington",
      "Clovis",
      "Hobbs",
      "Alamogordo",
      "Carlsbad",
      "Gallup",
      "Deming",
      "Las Vegas",
      "Chaparral",
      "Sunland Park"
    ],
    population: 564559,
    rank: 31
  },

  "tucson-metro": {
    name: "Tucson Metro Area",
    display_name: "Tucson Metro",
    state_code: "AZ",
    primary_city: "Tucson",
    cities: [
      "Tucson",
      "Mesa",
      "Chandler",
      "Scottsdale",
      "Glendale",
      "Gilbert",
      "Tempe",
      "Peoria",
      "Surprise",
      "Goodyear",
      "Avondale",
      "Flagstaff",
      "Yuma",
      "Buckeye",
      "Casa Grande"
    ],
    population: 548073,
    rank: 32
  },

  "fresno-metro": {
    name: "Fresno Metro Area",
    display_name: "Fresno Metro",
    state_code: "CA",
    primary_city: "Fresno",
    cities: [
      "Fresno",
      "Sacramento",
      "Stockton",
      "Modesto",
      "Salinas",
      "Vallejo",
      "Visalia",
      "Bakersfield",
      "Clovis",
      "Merced",
      "Turlock",
      "Manteca",
      "Vacaville",
      "Redding",
      "Chico"
    ],
    population: 542107,
    rank: 33
  },

  "sacramento-metro": {
    name: "Sacramento Metro Area",
    display_name: "Sacramento Metro",
    state_code: "CA",
    primary_city: "Sacramento",
    cities: [
      "Sacramento",
      "Stockton",
      "Modesto",
      "Salinas",
      "Vallejo",
      "Visalia",
      "Bakersfield",
      "Clovis",
      "Merced",
      "Turlock",
      "Manteca",
      "Vacaville",
      "Redding",
      "Chico",
      "Davis"
    ],
    population: 524943,
    rank: 34
  },

  "long-beach-metro": {
    name: "Long Beach Metro Area",
    display_name: "Long Beach Metro",
    state_code: "CA",
    primary_city: "Long Beach",
    cities: [
      "Long Beach",
      "Glendale",
      "Santa Clarita",
      "Burbank",
      "Pasadena",
      "Torrance",
      "Inglewood",
      "Santa Monica",
      "West Hollywood",
      "Beverly Hills",
      "Compton",
      "Downey",
      "Norwalk",
      "Pomona",
      "Whittier"
    ],
    population: 466742,
    rank: 35
  },

  "kansas-city-metro": {
    name: "Kansas City Metro Area",
    display_name: "Kansas City Metro",
    state_code: "MO",
    primary_city: "Kansas City",
    cities: [
      "Kansas City",
      "St. Louis",
      "Springfield",
      "Independence",
      "Columbia",
      "Lee's Summit",
      "O'Fallon",
      "St. Joseph",
      "St. Charles",
      "St. Peters",
      "Blue Springs",
      "Florissant",
      "Joplin",
      "Chesterfield",
      "Jefferson City"
    ],
    population: 508090,
    rank: 36
  },

  "mesa-metro": {
    name: "Mesa Metro Area",
    display_name: "Mesa Metro",
    state_code: "AZ",
    primary_city: "Mesa",
    cities: [
      "Mesa",
      "Chandler",
      "Scottsdale",
      "Glendale",
      "Gilbert",
      "Tempe",
      "Peoria",
      "Surprise",
      "Goodyear",
      "Avondale",
      "Flagstaff",
      "Yuma",
      "Buckeye",
      "Casa Grande",
      "Apache Junction"
    ],
    population: 504258,
    rank: 37
  },

  "virginia-beach-metro": {
    name: "Virginia Beach Metro Area",
    display_name: "Virginia Beach Metro",
    state_code: "VA",
    primary_city: "Virginia Beach",
    cities: [
      "Virginia Beach",
      "Norfolk",
      "Chesapeake",
      "Richmond",
      "Newport News",
      "Alexandria",
      "Hampton",
      "Portsmouth",
      "Suffolk",
      "Roanoke",
      "Lynchburg",
      "Danville",
      "Leesburg",
      "Blacksburg",
      "Charlottesville"
    ],
    population: 459470,
    rank: 38
  },

  "atlanta-metro": {
    name: "Atlanta Metro Area",
    display_name: "Atlanta Metro",
    state_code: "GA",
    primary_city: "Atlanta",
    cities: [
      "Atlanta",
      "Columbus",
      "Augusta",
      "Savannah",
      "Athens",
      "Sandy Springs",
      "Roswell",
      "Macon",
      "Johns Creek",
      "Albany",
      "Warner Robins",
      "Alpharetta",
      "Marietta",
      "Valdosta",
      "Smyrna"
    ],
    population: 498715,
    rank: 39
  },

  "colorado-springs-metro": {
    name: "Colorado Springs Metro Area",
    display_name: "Colorado Springs Metro",
    state_code: "CO",
    primary_city: "Colorado Springs",
    cities: [
      "Colorado Springs",
      "Aurora",
      "Fort Collins",
      "Lakewood",
      "Thornton",
      "Arvada",
      "Westminster",
      "Pueblo",
      "Centennial",
      "Boulder",
      "Greeley",
      "Longmont",
      "Loveland",
      "Grand Junction",
      "Broomfield"
    ],
    population: 478221,
    rank: 40
  },

  "omaha-metro": {
    name: "Omaha Metro Area",
    display_name: "Omaha Metro",
    state_code: "NE",
    primary_city: "Omaha",
    cities: [
      "Omaha",
      "Lincoln",
      "Bellevue",
      "Grand Island",
      "Kearney",
      "Fremont",
      "Hastings",
      "North Platte",
      "Norfolk",
      "Columbus",
      "Papillion",
      "La Vista",
      "Scottsbluff",
      "Beatrice",
      "South Sioux City"
    ],
    population: 486051,
    rank: 41
  },

  "raleigh-metro": {
    name: "Raleigh Metro Area",
    display_name: "Raleigh Metro",
    state_code: "NC",
    primary_city: "Raleigh",
    cities: [
      "Raleigh",
      "Greensboro",
      "Durham",
      "Winston-Salem",
      "Fayetteville",
      "Cary",
      "Wilmington",
      "High Point",
      "Greenville",
      "Asheville",
      "Concord",
      "Gastonia",
      "Jacksonville",
      "Chapel Hill",
      "Rocky Mount"
    ],
    population: 474069,
    rank: 42
  },

  "miami-metro": {
    name: "Miami Metro Area",
    display_name: "Miami Metro",
    state_code: "FL",
    primary_city: "Miami",
    cities: [
      "Miami",
      "Tampa",
      "Orlando",
      "St. Petersburg",
      "Hialeah",
      "Tallahassee",
      "Fort Lauderdale",
      "Port St. Lucie",
      "Cape Coral",
      "Pembroke Pines",
      "Hollywood",
      "Miramar",
      "Gainesville",
      "Coral Springs",
      "Miami Gardens"
    ],
    population: 467963,
    rank: 43
  },

  "minneapolis-metro": {
    name: "Minneapolis Metro Area",
    display_name: "Minneapolis Metro",
    state_code: "MN",
    primary_city: "Minneapolis",
    cities: [
      "Minneapolis",
      "St. Paul",
      "Rochester",
      "Bloomington",
      "Duluth",
      "Brooklyn Park",
      "Plymouth",
      "St. Cloud",
      "Eagan",
      "Woodbury",
      "Maple Grove",
      "Eden Prairie",
      "Coon Rapids",
      "Burnsville",
      "Blaine"
    ],
    population: 429954,
    rank: 44
  },

  "tulsa-metro": {
    name: "Tulsa Metro Area",
    display_name: "Tulsa Metro",
    state_code: "OK",
    primary_city: "Tulsa",
    cities: [
      "Tulsa",
      "Norman",
      "Broken Arrow",
      "Lawton",
      "Edmond",
      "Moore",
      "Midwest City",
      "Enid",
      "Stillwater",
      "Muskogee",
      "Bartlesville",
      "Owasso",
      "Shawnee",
      "Ponca City",
      "Ardmore"
    ],
    population: 413066,
    rank: 45
  },

  "cleveland-metro": {
    name: "Cleveland Metro Area",
    display_name: "Cleveland Metro",
    state_code: "OH",
    primary_city: "Cleveland",
    cities: [
      "Cleveland",
      "Cincinnati",
      "Toledo",
      "Akron",
      "Dayton",
      "Youngstown",
      "Canton",
      "Lorain",
      "Hamilton",
      "Springfield",
      "Kettering",
      "Elyria",
      "Lakewood",
      "Cuyahoga Falls",
      "Parma"
    ],
    population: 383793,
    rank: 46
  },

  "wichita-metro": {
    name: "Wichita Metro Area",
    display_name: "Wichita Metro",
    state_code: "KS",
    primary_city: "Wichita",
    cities: [
      "Wichita",
      "Overland Park",
      "Kansas City",
      "Olathe",
      "Topeka",
      "Lawrence",
      "Shawnee",
      "Manhattan",
      "Lenexa",
      "Salina",
      "Hutchinson",
      "Leavenworth",
      "Leawood",
      "Dodge City",
      "Garden City"
    ],
    population: 397532,
    rank: 47
  },

  "arlington-metro": {
    name: "Arlington Metro Area",
    display_name: "Arlington Metro",
    state_code: "TX",
    primary_city: "Arlington",
    cities: [
      "Arlington",
      "Grand Prairie",
      "Carrollton",
      "Denton",
      "Lewisville",
      "Flower Mound",
      "Euless",
      "Bedford",
      "Grapevine",
      "Hurst",
      "Keller",
      "Southlake",
      "Colleyville",
      "North Richland Hills",
      "Mansfield"
    ],
    population: 398854,
    rank: 48
  },

  "new-orleans-metro": {
    name: "New Orleans Metro Area",
    display_name: "New Orleans Metro",
    state_code: "LA",
    primary_city: "New Orleans",
    cities: [
      "New Orleans",
      "Baton Rouge",
      "Shreveport",
      "Lafayette",
      "Lake Charles",
      "Kenner",
      "Bossier City",
      "Monroe",
      "Alexandria",
      "Houma",
      "Marrero",
      "Bayou Cane",
      "Metairie",
      "Chalmette",
      "Estelle"
    ],
    population: 390144,
    rank: 49
  },

  "tampa-metro": {
    name: "Tampa Metro Area",
    display_name: "Tampa Metro",
    state_code: "FL",
    primary_city: "Tampa",
    cities: [
      "Tampa",
      "Orlando",
      "St. Petersburg",
      "Hialeah",
      "Tallahassee",
      "Fort Lauderdale",
      "Port St. Lucie",
      "Cape Coral",
      "Pembroke Pines",
      "Hollywood",
      "Miramar",
      "Gainesville",
      "Coral Springs",
      "Miami Gardens",
      "Clearwater"
    ],
    population: 384959,
    rank: 50
  },

  "buffalo-metro": {
    name: "Buffalo Metro Area",
    display_name: "Buffalo Metro",
    state_code: "NY",
    primary_city: "Buffalo",
    cities: [
      "Buffalo",
      "Amherst",
      "Cheektowaga",
      "Clarence",
      "Depew",
      "East Amherst",
      "Kenmore",
      "Lackawanna",
      "Lancaster",
      "Tonawanda",
      "West Seneca",
      "Williamsville",
      "Niagara Falls",
      "Lockport",
      "North Tonawanda"
    ],
    population: 278349,
    rank: 51
  }
};

// Helper functions to work with state codes
function getMetroAreasByState(stateCode) {
  return Object.entries(US_METRO_AREAS)
    .filter(([key, metro]) => metro.state_code === stateCode)
    .sort((a, b) => a[1].rank - b[1].rank)
    .map(([key, metro]) => ({ key, ...metro }));
}

function findMetroAreaByCity(cityName, stateCode) {
  for (const [key, metro] of Object.entries(US_METRO_AREAS)) {
    if (metro.state_code === stateCode && metro.cities.includes(cityName)) {
      return { key, ...metro };
    }
  }
  return null;
}

// Function to generate cities.js additions
function generateCitiesJSAdditions() {
  const stateMetroAdditions = {};
  
  Object.entries(US_METRO_AREAS).forEach(([key, metro]) => {
    const stateCode = metro.state_code;
    if (!stateMetroAdditions[stateCode]) {
      stateMetroAdditions[stateCode] = [];
    }
    stateMetroAdditions[stateCode].push(metro.name);
  });
  
  return stateMetroAdditions;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    US_METRO_AREAS,
    getMetroAreasByState,
    findMetroAreaByCity,
    generateCitiesJSAdditions
  };
}

// Also create a browser-friendly global
if (typeof window !== 'undefined') {
  window.US_METRO_AREAS = US_METRO_AREAS;
  window.getMetroAreasByState = getMetroAreasByState;
  window.findMetroAreaByCity = findMetroAreaByCity;
  window.generateCitiesJSAdditions = generateCitiesJSAdditions;
}