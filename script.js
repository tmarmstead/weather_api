let cityInput = $("#user-search").val();
let currentKey = "1bf6cb587a3e66e892bb2c1caf691089";
let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + currentKey + "&units=imperial";

function currentWeather(cityInput){
  $.ajax({
    url: currentUrl,
    method: "GET"
  }).then(function(response) {
  
    }
      console.log($(response.main.temp));
      console.log(currentUrl);
  });
  $("#clicked-button").on("click", (function() {
    let cityInput = $("#user-search").val();
    console.log(cityInput);
    currentWeather();
    let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + currentKey + "&units=imperial"
    console.log(currentUrl);
    console.log($(response.main.temp));
   
    
   
  }))
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
    