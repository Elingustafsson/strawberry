//-------------Viktors kod börjar-----------//
function initMap() {
  let origin = {
    lat: 59.31074,
    lng: 18.11595
  };
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: origin
  });

  // Gör fler
  // let marker = new google.maps.Marker({
  //   position: origin,
  //   map: map
  // });
}

var map, infoWindow;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var beachmarker = null;

  function autoUpdate() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var newPoint = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);

      if (beachmarker) {
        // Marker exists, Move it
        marker.setPosition(newPoint);
      } else {
        // No marker,create it
        beachmarker = new google.maps.Marker({
          position: newPoint,
          map: map,
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });
      }

      // Center the map on the new position
      map.setCenter(newPoint);
    });


    setTimeout(autoUpdate, 1000);
  }

  autoUpdate();
}
//-------------Viktors kod avslutas-----------//


//
//   function myFunction() {
//     setInterval(function(){
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//   }, 3000);
// }










  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  //
  //   function myFunction() {
  //     setInterval(function(){
  //       var pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //   }, 3000);
  // }
