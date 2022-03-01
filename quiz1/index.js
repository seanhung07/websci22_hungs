async function getData() {
  place = document.getElementById("search-input").value;
  // console.log(place)
  const weather = await getWeather(place);
}
async function getWeather(place) {
  const res = await axios.post(`http://127.0.0.1:3000/temperature?zip=${place}`)
  console.log(res.data);
  const data = res.data
  display(data);
}
async function getWind(){
  const res = await axios.get(`http://127.0.0.1:3000/wind`)
  console.log(res.data.speed)
  const data  = res.data.speed
  display2(data);
}
function display2(data){
   document.getElementById("city").innerHTML = "RPI wind speed is " + data;
}

function display(data) {
  // const name = data.name.toUpperCase();
  const temp = data[0];
  const cel = (((temp - 32) * 5) / 9) | 0;
  const unix = data.dt * 1000;
  const date = new Date(unix);
  const humanDate = date.toLocaleString("en-US").slice(0, -12);
  var iconurl = "http://openweathermap.org/img/w/" + data[2] + ".png";
  console.log(iconurl);
  const des = `Today's weather is ${data[1]}`
  // document.getElementById("city").innerHTML = "LOCATION: " + name;
  document.getElementById("temp").innerHTML =
    parseInt(temp) + " °F  <br>" + cel + " °C";
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