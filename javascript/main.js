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
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 59.31082,
        lng: 18.11587
      },
      zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;


    let marker = new google.maps.Marker({
      position: {
        lat: 59.31074,
        lng: 18.11595
      },
      map: map
    });

    marker.addListener('click', function() {

      let modal = document.getElementById('myModal');

      let span = document.getElementsByClassName("close")[0];

      modal.style.display = "block";

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    });


    let loopFunction = function () {

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: image
        });

        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });

        // setInterval(function() {
        //   var pos = {
        //     lat: position.coords.latitude,
        //     lng: position.coords.longitude
        //   };
        // }, 3000);

    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }



let doLoop = true
let intervalFunction = function () {
  if (doLoop) {
    loopFunction();
  }
  return window.setTimeout(intervalFunction, 1000)
}
intervalFunction()
}











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
