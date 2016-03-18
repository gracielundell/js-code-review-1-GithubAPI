(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function toCelcius (kelvinTemp) {
  return kelvinTemp - 273;
}

function toFahrenheit(kelvinTemp) {
  var kelvinToFahrenheit = (kelvinTemp - 273) * 1.8 + 32;
  return kelvinToFahrenheit;
}

exports.toCelcius = toCelcius;
exports.toFahrenheit = toFahrenheit;

},{}],2:[function(require,module,exports){

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

},{"./../js/temperature.js":1}]},{},[2]);
