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

document.addEventListener('load', initMap());
