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

    //Paulina code start
    //lng lines
    var lng1 = [
      {lat: 59.316330, lng: 18.101649},
      {lat: 59.308446, lng: 18.101649}
    ];

    var lng2 = [
      {lat: 59.316330, lng: 18.105903},
      {lat: 59.308446, lng: 18.105903}
    ];

    var lng3 = [
      {lat: 59.316330, lng: 18.110110},
      {lat: 59.308446, lng: 18.110110}
    ];

    var lng4 = [
      {lat: 59.316330, lng: 18.113499},
      {lat: 59.308446, lng: 18.113499}
    ];

    var lng5 = [
      {lat: 59.316330, lng: 18.116396},
      {lat: 59.308446, lng: 18.116396}
    ];

    var lng6 = [
      {lat: 59.316330, lng: 18.119410},
      {lat: 59.308446, lng: 18.119410}
    ];

    //lat lines
    var lat1 = [
      {lat: 59.316330, lng: 18.101649},
      {lat: 59.316330, lng: 18.119410}
    ];

    var lat2 = [
      {lat: 59.314819, lng: 18.101649},
      {lat: 59.314819, lng: 18.119410}
    ];

    var lat3 = [
      {lat: 59.313011, lng: 18.101649},
      {lat: 59.313011, lng: 18.119410}
    ];

    var lat4 = [
      {lat: 59.3113702, lng: 18.101649},
      {lat: 59.3113702, lng: 18.119410}
    ];

    var lat5 = [
      {lat: 59.309650, lng: 18.101649},
      {lat: 59.309650, lng: 18.119410}
    ];

    var lat6 = [
      {lat: 59.308446, lng: 18.101649},
      {lat: 59.308446, lng: 18.119410}
    ];

    map.data.add({geometry: new google.maps.Data.Polygon([lng1,
                                                          lng2,
                                                          lng3,
                                                          lng4,
                                                          lng5,
                                                          lng6,
                                                          lat1,
                                                          lat2,
                                                          lat3,
                                                          lat4,
                                                          lat5,
                                                          lat6])})
    //Paulian code end

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
