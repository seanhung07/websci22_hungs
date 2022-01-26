function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central Arfrican Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauro",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre & Miquelon",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "New York City",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "Austin",
  "San Jose",
  "Fort Worth",
  "Jacksonville",
  "Columbus",
  "Charlotte",
  "Indianapolis",
  "San Francisco",
  "Seattle",
  "Denver",
  "Washington",
  "Boston",
  "El Paso",
  "Nashville",
  "Oklahoma City",
  "Las Vegas",
  "Detroit",
  "Portland",
  "Memphis",
  "Louisville",
  "Milwaukee",
  "Baltimore",
  "Albuquerque",
  "Tucson",
  "Mesa",
  "Fresno",
  "Sacramento",
  "Atlanta",
  "Kansas City",
  "Colorado Springs",
  "Raleigh",
  "Omaha",
  "Miami",
  "Long Beach",
  "Virginia Beach",
  "Oakland",
  "Minneapolis",
  "Tampa",
  "Tulsa",
  "Arlington",
  "Wichita",
  "Bakersfield",
  "Aurora",
  "New Orleans",
  "Cleveland",
  "Anaheim",
  "Henderson",
  "Honolulu",
  "Riverside",
  "Santa Ana",
  "Corpus Christi",
  "Lexington",
  "San Juan",
  "Stockton",
  "St. Paul",
  "Cincinnati",
  "Greensboro",
  "Pittsburgh",
  "Irvine",
  "St. Louis",
  "Lincoln",
  "Orlando",
  "Durham",
  "Plano",
  "Anchorage",
  "Newark",
  "Chula Vista",
  "Fort Wayne",
  "Chandler",
  "Toledo",
  "St. Petersburg",
  "Reno",
  "Laredo",
  "Scottsdale",
  "North Las Vegas",
  "Lubbock",
  "Madison",
  "Gilbert",
  "Jersey City",
  "Glendale",
  "Buffalo",
  "Winston-Salem",
  "Chesapeake",
  "Fremont",
  "Norfolk",
  "Irving",
  "Garland",
  "Paradise",
  "Arlington",
  "Richmond",
  "Hialeah",
  "Boise",
  "Spokane",
  "Frisco",
  "Moreno Valley",
  "Tacoma",
  "Fontana",
  "Modesto",
  "Baton Rouge",
  "Port St. Lucie",
  "San Bernardino",
  "McKinney",
  "Fayetteville",
  "Santa Clarita",
  "Des Moines",
  "Oxnard",
  "Birmingham",
  "Spring Valley",
  "Huntsville",
  "Rochester",
  "Cape Coral",
  "Tempe",
  "Grand Rapids",
  "Yonkers",
  "Overland Park",
  "Salt Lake City",
  "Amarillo",
  "Augusta",
  "Columbus",
  "Tallahassee",
  "Montgomery",
  "Huntington Beach",
  "Akron",
  "Little Rock",
  "Glendale",
  "Grand Prairie",
  "Aurora",
  "Sunrise Manor",
  "Ontario",
  "Sioux Falls",
  "Knoxville",
  "Vancouver",
  "Mobile",
  "Worcester",
  "Chattanooga",
  "Brownsville",
  "Peoria",
  "Fort Lauderdale",
  "Shreveport",
  "Newport News",
  "Providence",
  "Elk Grove",
  "Rancho Cucamonga",
  "Salem",
  "Pembroke Pines",
  "Santa Rosa",
  "Eugene",
  "Oceanside",
  "Cary",
  "Fort Collins",
  "Corona",
  "Enterprise",
  "Garden Grove",
  "Springfield",
  "Clarksville",
  "Bayamon",
  "Lakewood",
  "Alexandria",
  "Hayward",
  "Murfreesboro",
  "Killeen",
  "Hollywood",
  "Lancaster",
  "Salinas",
  "Jackson",
  "Midland",
  "Macon County",
  "Kansas City",
  "Palmdale",
  "Sunnyvale",
  "Springfield",
  "Escondido",
  "Pomona",
  "Bellevue",
  "Surprise",
  "Naperville",
  "Pasadena",
  "Denton",
  "Roseville",
  "Joliet",
  "Thornton",
  "McAllen",
  "Paterson",
  "Rockford",
  "Carrollton",
  "Bridgeport",
  "Miramar",
  "Round Rock",
  "Metairie",
  "Olathe",
  "Waco",
];
autocomplete(document.getElementById("search-input"), countries);

function getData() {
  place = document.getElementById("search-input").value;
  getWeather(place);
}
async function getWeather(place) {
  apiKey = "db4171e3e4d490375715d4949cb14003";
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    place +
    "&units=imperial&appid=" +
    this.apiKey
  );
  var data = await res.json();
  display(data);
}
async function getLocationWeather(lat, lon) {
  apiKey = "db4171e3e4d490375715d4949cb14003";
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&appid=" +
    this.apiKey
  );
  var data = await res.json();
  display(data);
}

function display(data) {
  const name = data.name.toUpperCase();
  const temp = data.main.temp;
  const cel = (((temp - 32) * 5) / 9) | 0;
  const unix = data.dt * 1000;
  const date = new Date(unix);
  const humanDate = date.toLocaleString("en-US").slice(0, -12);
  var iconcode = data.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  const des = data.weather[0].description.toUpperCase();
  document.getElementById("city").innerHTML = "LOCATION: " + name;
  document.getElementById("temp").innerHTML =
    parseInt(temp) + " °F  <br>" + cel + " °C";
  document.getElementById("date").innerHTML = "DATE: " + humanDate;
  document.getElementById("description").innerHTML = des;
  document.getElementById("wicon").src = iconurl;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Turn On the location permission!!!");
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  getLocationWeather(lat, lon);
}
getLocation();
document.getElementById("search-input")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      getData()
    }
  });