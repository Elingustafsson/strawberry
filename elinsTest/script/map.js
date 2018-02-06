//Create the variables that will be used within the map configuration options.
//The latitude and longitude of the center of the map.
let gameMapCenter;
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
//The degree to which the map is zoomed in. This can range from 0 (least zoomed) to 21 and above (most zoomed).
gameMapZoom = 16;
let playerMarker = null;
//The max and min zoom levels that are allowed.
let gameMapZoomMax = 21;
let gameMapZoomMin = 6;
//These options configure the setup of the map.
let gameMapOptions = {
  center: gameMapCenter,
  zoom: gameMapZoom,
  //The type of map. In addition to ROADMAP, the other 'premade' map styles are SATELLITE, TERRAIN and HYBRID.
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  maxZoom: gameMapZoomMax,
  minZoom: gameMapZoomMin,
  //Turn off the map controls as we will be adding our own later.
  panControl: false,
  mapTypeControl: false,
  styles: [{
      elementType: 'geometry',
      stylers: [{
        color: '#242f3e'
      }]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#242f3e'
      }]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#746855'
      }]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{
        "visibility": "off"
      }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{
        "visibility": "off"
      }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{
        color: '#263c3f'
      }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{
        "visibility": "off"
      }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
        color: '#38414e'
      }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#212a37'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{
        color: '#746855'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#1f2835'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{
        "visibility": "off"
      }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{
        color: '#2f3948'
      }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{
        "visibility": "off"
      }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#515c6d'
      }]
    },
  ]
};
//Create the variable for the main map itself.
let gameMap;
//When the page loads, the line below calls the function below called 'loadgameMap' to load up the map.
google.maps.event.addDomListener(window, 'load', loadGameMap);
//THE MAIN FUNCTION THAT IS CALLED WHEN THE WEB PAGE LOADS --------------------------------------------------------------------------------
function loadGameMap() {
  // Sets current location as center of the map
  navigator.geolocation.getCurrentPosition(function(position) {
    gameMapCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    gameMap.setCenter(gameMapCenter)
  })

  //The empty map variable ('gameMap') was created above. The line below creates the map, assigning it to this variable. The line below also loads the map into the div with the id 'game-map' (see code within the 'body' tags below), and applies the 'gameMapOptions' (above) to configure this map.
  gameMap = new google.maps.Map(document.getElementById("game-map"), gameMapOptions);
  setPlayerMarker(gameMapCenter);
  //Calls the function below to load up all the map markers.
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

function loadMapMarkers() {
  //Setting the position of map marker.
  //Creating the map marker.
  let markerPosition1 = new google.maps.LatLng(59.312943, 18.109854);
  marker1 = new google.maps.Marker({
    //uses the position set above.
    position: markerPosition1,
    //adds the marker to the map.
    map: gameMap,
    title: 'Första, yaaaay!',
    icon: 'pins/orange_MarkerC.png'
  });
  let markerPosition2 = new google.maps.LatLng(59.313670, 18.114184);
  //Creating the map marker.
  marker2 = new google.maps.Marker({
    //uses the position set above.
    position: markerPosition2,
    //adds the marker to the map.
    map: gameMap,
    title: 'Andra, yaaaay!',
    icon: 'pins/orange_MarkerC.png'
  });
  let markerPosition3 = new google.maps.LatLng(59.313670, 18.118675);
  //Creating the map marker.
  marker3 = new google.maps.Marker({
    //uses the position set above.
    position: markerPosition3,
    //adds the marker to the map.
    map: gameMap,
    title: 'Tredje, yaaaay!',
    icon: 'pins/orange_MarkerC.png'
  });
  marker1.addListener('click', function() {
    return arrayMarker[0];
  });
  marker2.addListener('click', function() {
    window.location.href = arrayMarker[1];
  });
  marker3.setAnimation(google.maps.Animation.BOUNCE);
}

test1 = () => {
  console.log('hej')
}

var arrayMarker = [test1(), 'www.aftonbladet.se', 'www.facebook.com']

function setPlayerMarker(gameMapCenter) {
  id = navigator.geolocation.watchPosition(setLocation, error, options);
  playerMarker = new google.maps.Marker({
    position: gameMapCenter,
    map: gameMap,
    icon: 'pins/pink_MarkerA.png'
  });
  loadMapMarkers();
}

function setLocation(pos) {
  let presetDistance = 100;
  playerPos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
  questPos = marker3.getPosition();
  playerMarker.setPosition(playerPos);
  dist = google.maps.geometry.spherical.computeDistanceBetween(playerPos, questPos);
  console.log(dist);
  if (dist <= presetDistance) {
    marker3.addListener('click', function() {
      infowindow.open(gameMap, marker3);
    });
  } else if (dist > presetDistance) {
    google.maps.event.clearInstanceListeners(marker3);
  }


}

var testString = '<div id="content">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h1 id="firstHeading" class="firstHeading">Strawberry</h1>' +
  '<div id="bodyContent">' +
  '<p>Test <b>Lite text här</b>.' +
  '</div>' +
  '</div>';

var infowindow = new google.maps.InfoWindow({
  content: testString
});
