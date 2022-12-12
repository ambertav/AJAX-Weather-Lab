const $city = $('#city');
const $temp = $('#temp');
const $feels = $('#feels');
const $humid = $('#humid');
const $wind = $('#wind');
const $weather = $('#weather');
const $input = $('input[type="text"]');

let weatherData;
let userInput;

$('form').on('submit', getData);


function getData (event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=061d8db30263afb9010c3b14a7b5d3e2&units=imperial"
    }).then (
        function (data) {
            weatherData = data;
            render();
            $input.val('');
        },  
        function (error) {
            alert(`Error ${error.responseJSON.cod}, ${error.responseJSON.message}`);
        }
    )
}


function render () {
    $city.text(weatherData.name);
    $temp.text(`${Math.round(weatherData.main.temp)}\xB0`);
    $feels.text(`${Math.round(weatherData.main.feels_like)}\xB0`);
    $humid.text(`${Math.round(weatherData.main.humidity)}%`);
    $wind.text(`${Math.round(weatherData.wind.speed)}mph`);
    $weather.text(weatherData.weather[0].main);
}

