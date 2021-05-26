let currentKey = "eeee2e82be645c72cba0460f87b4f2c8";
console.log(localStorage);
console.log(window.localStorage);
let currentCityInformation;

// Current Weather Functionality

function displayForecast() {

  $("button").click(function (event) {
    // event.preventDefault();

    let cityInput = $("#user-search").val();

    localStorageCity(cityInput);

    let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + currentKey + "&units=imperial";

    $.ajax({
      url: currentUrl,
      method: "GET"
    }).then(function (response) {
      console.log({ response });
      currentCityInformation = JSON.stringify(response.main);
      console.log({ currentCityInformation });
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

          $('.daily-forecast').empty();

          for (i = 1; i < 6; i++) {
            let card = $('<div>').addClass('column card');
            let cardContent = $('<p>').attr('class', 'card-content');
            let content = $('<p>').attr('class', 'content  mb-4');


            let dateParagraph = $('<p>').attr('class', 'date');
            let date = $(dateParagraph).html(moment().add(i, 'days').format('M/D/YYYY'));



            let forecastIcon = $('<img>').attr('src', 'https://openweathermap.org/img/w/' + response.daily[i].weather[0].icon + '.png');
            let maxTemp = ('MaxTemp: ' + ((response.daily[i].temp.max - 273.15) * 1.80 + 32).toFixed(0) + '\u00b0 F');
            let minTemp = ('MinTemp: ' + ((response.daily[i].temp.min - 273.15) * 1.80 + 32).toFixed(0) + '\u00b0 F');
            let dailyHumidity = ('Humidity; ' + response.daily[i].humidity);

            $('.daily-forecast').append(card);
            card.append(cardContent);
            cardContent.append(content);

            content.append(date);
            content.append(forecastIcon, "<br>");
            content.append(maxTemp + "<br>");
            content.append(minTemp + "<br>");
            content.append(dailyHumidity);
          } historyButtons(cityInput);
        });
      });
    });
  });
}

// local storage ;
function historyButtons(cityName) {
  let newStorageButton = $('<button>').attr('class', 'button ml-2 prev-searched').text(cityName);
  $('.local-storage-buttons').append(newStorageButton);

}

function localStorageCity(cityName) {
  let history = JSON.parse(window.localStorage.getItem('history')) || [];
  console.log(history);
  history.push(cityName);
  localStorage.setItem('history', JSON.stringify(history));
}

function generateHistory() {
  let history = JSON.parse(window.localStorage.getItem('history')) || [];
  for (let i = 0; i < history.length; i++) {
    historyButtons(history[i]);
  }
}

displayForecast();
generateHistory();
// historyButtons()


// local storage buttons div is parent to appended "previously searched" buttons

function previouslySearchedClickHandler(buttonText) {
  var buttonText = $(".prev-searched").text();
  console.log("Button Text console.log!!!!!!!", buttonText);
  $("local-storage-buttons").children[1].click(displayForecast(buttonText))
}

previouslySearchedClickHandler();







// function displayForecast(cityInput) {

//   let cityInput = $("#user-search").val();

//   localStorageCity(cityInput);

//   let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + currentKey + "&units=imperial";

//   $.ajax({
//     url: currentUrl,
//     method: "GET"
//   }).then(function (response) {
//     console.log({ response });
//     currentCityInformation = JSON.stringify(response.main);
//     console.log({ currentCityInformation });
//     $('.current-city-name').html(cityInput);
//     $('.current-temp').html('Temperature: ' + response.main.temp);
//     $('.current-humidity').html("<h3>" + 'Humidity: ' + response.main.humidity);
//     $('.current-wind').html('Wind: ' + response.wind.speed + 'mph');

//     console.log('temperature is: ', response.main.temp);
//     console.log('entered city is: ', cityInput);
//     console.log('humidity is: ', response.main.humidity);
//     console.log('wind speed is: ', response.wind.speed);
//     console.log(response);


//     // UV functionality
//     let lat = response.coord.lat;
//     let lon = response.coord.lon;

//     let uvUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + currentKey;

//     $.ajax({
//       url: uvUrl,
//       method: "GET"
//     }).then(function (response) {
//       console.log('Here is UV: ', response.value);

//       $('.current-uv').html('UV index: ' + response.value);

//       console.log(lat, lon);


//       // // 5 Day Forecast Functionality
//       let forecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + currentKey;

//       $.ajax({
//         url: forecastUrl,
//         method: "GET"
//       }).then(function (response) {
//         console.log('Here is 5 Day forecast: ', response);

//         $('.daily-forecast').empty();

//         for (i = 1; i < 6; i++) {
//           let card = $('<div>').addClass('column card');
//           let cardContent = $('<p>').attr('class', 'card-content');
//           let content = $('<p>').attr('class', 'content  mb-4');


//           let dateParagraph = $('<p>').attr('class', 'date');
//           let date = $(dateParagraph).html(moment().add(i, 'days').format('M/D/YYYY'));



//           let forecastIcon = $('<img>').attr('src', 'https://openweathermap.org/img/w/' + response.daily[i].weather[0].icon + '.png');
//           let maxTemp = ('MaxTemp: ' + ((response.daily[i].temp.max - 273.15) * 1.80 + 32).toFixed(0) + '\u00b0 F');
//           let minTemp = ('MinTemp: ' + ((response.daily[i].temp.min - 273.15) * 1.80 + 32).toFixed(0) + '\u00b0 F');
//           let dailyHumidity = ('Humidity; ' + response.daily[i].humidity);

//           $('.daily-forecast').append(card);
//           card.append(cardContent);
//           cardContent.append(content);

//           content.append(date);
//           content.append(forecastIcon, "<br>");
//           content.append(maxTemp + "<br>");
//           content.append(minTemp + "<br>");
//           content.append(dailyHumidity);
//         }
//       });
//     });
//   });
//   // local storage ;
//   function historyButtons(cityName) {
//     let newStorageButton = $('<button>').attr('class', 'button ml-2').text(cityName);
//     $('.local-storage-buttons').append(newStorageButton);

//   }

//   function localStorageCity(cityName) {
//     let history = JSON.parse(window.localStorage.getItem('history')) || [];
//     console.log(history);
//     history.push(cityName);
//     localStorage.setItem('history', JSON.stringify(history));
//   }

//   function generateHistory() {
//     let history = JSON.parse(window.localStorage.getItem('history')) || [];
//     for (let i = 0; i < history.length; i++) {
//       historyButtons(history[i]);
//     }
//   }
// }
// generateHistory();

// $("button").click(function (event) {
//   event.preventDefault();
//   let cityInput = $("#user-search").val();
//   displayForecast(cityInput);
// });