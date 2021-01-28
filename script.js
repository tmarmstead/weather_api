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



// Current Weather Functionality
$("button").click(function (event) {
  event.preventDefault();

  let cityInput = $("#user-search").val();

  let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + currentKey + "&units=imperial";

  $.ajax({
    url: currentUrl,
    method: "GET"
  }).then(function (response) {
    $('.current-city-name').html(cityInput);
    $('.current-temp').html('Temperature: ' + response.main.temp);
    $('.current-humidity').html("<h3>" + 'Humidity: ' + response.main.humidity);
    $('.current-wind').html('Wind: (fix this to display wind, not temp) ' + response.main.temp + 'mph');

    console.log('temperature is: ', response.main.temp);
    console.log('entered city is: ', cityInput);
    console.log('humidity is: ', response.main.humidity);
    console.log('wind speed is: ', response.main, response.main.wind);
    console.log(response);


    // UV functionality
    let lat = response.coord.lat;
    let lon = response.coord.lon;

    let uvUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + currentKey;

    $.ajax({
      url: uvUrl,
      method: "GET"
    }).then(function (response) {
      console.log('Here is UV: ', response.value);

      $('.current-uv').html('UV index: ' + response.value);

      console.log(lat, lon);


      // // 5 Day Forecast Functionality
      
      let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + currentKey + "&units=imperial";

      $.ajax({
        url: forecastUrl,
        method: "GET"
      }).then(function (response) {
        console.log('Here is 5 Day forecast: ', response, response.list);
        
          
        
        // for(i = 5; i <= 40; i + 8) {
        
        //  let fiveForecast = response.list
        //  console.log(fiveForecast[i]);
        // }
        


      });
    });
  });
});





// $("button").click(function(event){
//   event.preventDefault();

//   let cityInput = $("#user-search").val();


//   let currentUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + currentKey + "&units=imperial";

//   $.ajax({
//     url: currentUrl,
//     method : "GET"
//   }).then(function(response) {
//     console.log('Here is 5 Day forecast');
// });
// });





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

