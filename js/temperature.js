function toCelcius (kelvinTemp) {
  return kelvinTemp - 273;
}

function toFahrenheit(kelvinTemp) {
  var kelvinToFahrenheit = (kelvinTemp - 273) * 1.8 + 32;
  return kelvinToFahrenheit;
}

exports.toCelcius = toCelcius;
exports.toFahrenheit = toFahrenheit;
