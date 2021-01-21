let cityInput = $("#user-search").val();
console.log(cityInput);
let currentKey = "1bf6cb587a3e66e892bb2c1caf691089";
let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + currentKey + "&units=imperial"

function currentWeather(city){
  $.ajax({
    url: currentUrl,
    method: "GET"
  }).then(function(response) {
      console.log(response);
      console.log(currentUrl);
  });
}
currentWeather();



function uvData(lat, lon){
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
      console.log(queryURL);
  });
}

function fiveDayForecast(city) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
      console.log(queryURL);
  });
}


//   add button with event listener
    // function that takes a user input
    // click button to take in user input 
    // out put current weather info based of of user input
    