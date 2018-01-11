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
        lat: -34.397,
        lng: 150.644
      },
      zoom: 6
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

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
