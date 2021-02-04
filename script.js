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
    console.log(response);
    $('.current-city-name').html(cityInput);
    $('.current-temp').html('Temperature: ' + response.main.temp);
    $('.current-humidity').html("<h3>" + 'Humidity: ' + response.main.humidity);
    $('.current-wind').html('Wind: ' + response.wind.speed + 'mph');

    console.log('temperature is: ', response.main.temp);
    console.log('entered city is: ', cityInput);
    console.log('humidity is: ', response.main.humidity);
    console.log('wind speed is: ', response.wind.speed);
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
      let forecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + currentKey;

      $.ajax({
        url: forecastUrl,
        method: "GET"
      }).then(function (response) {
        console.log('Here is 5 Day forecast: ', response);
        
        
        for(i = 1; i < 6; i++) {
          let card = $('<div>').attr('class', 'card');
          let cardContent = $('<p>').attr('class', 'card-content');
          let content = $('<p>').attr('class', 'content  mb-4');

          
          let dateParagraph = $('<p>').attr('class', 'date');
          let date = $(dateParagraph).html(moment().format("MMM Do YY")); 
          
          

          let forecastIcon = $('<img>').attr('src', 'https://openweathermap.org/img/w/' + response.daily[i].weather[0].icon + '.png');
          let maxTemp = ('MaxTemp: ' + ((response.daily[i].temp.max -273.15) * 1.80 + 32).toFixed(0) + '\u00b0 F');
          let minTemp = ('MinTemp: ' + ((response.daily[i].temp.min -273.15) * 1.80 + 32).toFixed(0) + '\u00b0 F'); 
          let dailyHumidity = ('Humidity; ' + response.daily[i].humidity);

          $('.daily-forecast').append(card);
          card.append(cardContent);
          cardContent.append(content);
          
          content.append(date);
          content.append(forecastIcon, "<br>"); 
          content.append(maxTemp + "<br>"); 
          content.append(minTemp + "<br>"); 
          content.append(dailyHumidity);
        }
        
        
        // local storage 
        
        
        function getValue() {
          return localStorage.getItem('previously-searched');
            
        } // Gets the value of 'nameOfItem' and returns it
        console.log(getValue()); //'value';

        function createItem() {
          localStorage.setItem('previously-searched', cityInput); 
        } 
        createItem() // Creates a item named 'nameOfItem' and stores a value of 'value'

        let saveToStorage = $('<p>').attr('class', 'storageParagraph');
        let newStorageButton = $('<button>').attr('class', 'here-it-goes button ml-2',) 
        let retrievedFromStorage = getValue();

        
        $('.local-storage-buttons').append(newStorageButton);
       $(newStorageButton).append(retrievedFromStorage);

       $(".here-it-goes").click(function (event) {
        event.preventDefault();
        console.log("I've been clicked!");




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

