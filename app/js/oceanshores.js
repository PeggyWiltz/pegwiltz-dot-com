var osLat = "46.957537";
var osLng = "-124.166023";

function initMap() {
  var myLatLng = new google.maps.LatLng(osLat, osLng);

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: '425 Yorkmar, Ocean Shores'
  });
}

document.addEventListener('load', initMap());

$(document).ready(function() {
  var tempInK;

  getWeather(osLat, osLng);

  function getWeather(lat, lng) {

    var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + osLat + '&lon=' + osLng + "&APPID=" + "1503313f52a0a3425b0ab91c246e2728";

    console.log(weatherApiUrl);

    $.get(weatherApiUrl, function(result) {
      console.log(result);
      var icon = result.weather[0].icon;
      console.log(icon);

      $("#weather-icon").attr("src", "http://openweathermap.org/img/w/" + icon + ".png");
      tempInK = result.main.temp;
      var tempF = convertKToF(tempInK);
      setTemp(tempF);
      $(".description").html(result.weather[0].description);

    }, "jsonp");
  };

  function convertKToF(tempInKelvin) {
    console.log(tempInKelvin);
    var temp = (tempInKelvin * 9) / 5 - 459.67;
    return Math.floor(temp);
  };

  function setTemp(newTemp) {
    $("#temp").html(newTemp + "&#176;");
  }
});
