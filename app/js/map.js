  function initMap() {
    var myLatLng = new google.maps.LatLng(46.957537, -124.166023);

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
  // google.maps.event.addDomListener(window, 'load', initMap);

document.addEventListener('load', initMap());

// function initialize() {
//   var mapCanvas = document.getElementById('map');
//   var mapOptions = {
//     center: new google.maps.LatLng(46.957537, -124.166023),
//     zoom: 8,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   var map = new google.maps.Map(mapCanvas, mapOptions);
// }
