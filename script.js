let cityInput = $("#user-search").val();
let currentKey = "eeee2e82be645c72cba0460f87b4f2c8";
let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + currentKey + "&units=imperial";

// function currentWeather(){
//   $.ajax({
//     url: currentUrl,
//     method : "GET"
//   }).then(function(response) {
//       console.log(response);
//       console.log(currentUrl);
//       console.log(cityInput);
  

$("button").click(function(event){
  event.preventDefault();

  let cityInput = $("#user-search").val();

  let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + currentKey + "&units=imperial";

  $.ajax({
    url: currentUrl,
    method : "GET"
  }).then(function(response) {
      console.log('temperature is: ', response.main.temp);
      console.log('entered city is: ', cityInput);
      console.log('humidity is: ', response.main.humidity);
      console.log('wind speed is: ', response.main.wind[speed]);
      console.log(response);
});
});



// function uvData(lat, lon){
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//       console.log(response);
//       console.log(queryURL);
//   });
// }
// uvData();

// function fiveDayForecast(city) {
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//         console.log(response);
//         console.log(queryURL);
//     });
//   }
// fiveDayForecast();
//   add button with event listener
    // function that takes a user input
    // click button to take in user input 
    // out put current weather info based of of user input
 
