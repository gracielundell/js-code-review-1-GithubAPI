var toCelcius = require('./../js/temperature.js').toCelcius;
var toFahrenheit = require('./../js/temperature.js').toFahrenheit;

var apiKey = "19e5e8222f081c8bd019804334478683";

$(document).ready(function() {
  $("#showCelcius").hide();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      // console.log(response);
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%. ");
      $('.showCelcius').text("The temperature in " + city + " is " + toCelcius(parseInt(response.main.temp)) + "C. ");
      $('.showFahrenheit').text("The temperature in " + city + " is " + toFahrenheit(parseInt(response.main.temp)) + "F. ");
      $('.showFahrenheit').hide();

    });
    $("#showFah").click(function(){
      $('.showFahrenheit').show();
      $('#showFah').hide();
      $("#showCelcius").show();
      $(".showCelcius").hide();
      $("#showFah").click(function(){
        $('.showFahrenheit').show();
        $('.showCelcius').hide();
        $("#showFah").hide();
        $("#showCelcius").show();

      });

    });
  });


});
