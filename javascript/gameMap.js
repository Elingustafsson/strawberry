const api_url = "https://strawberrygameapp.herokuapp.com/api";
const team2 = params.get('team');
console.log(team2);

var pointMarker = new Array()
var pointMarkerImage = new Array()
var quizzes = new Array()

let gameMapCenter
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}
gameMapZoom = 16
let playerMarker = null
//The max and min zoom levels that are allowed.
let gameMapZoomMax = 21
let gameMapZoomMin = 6
//These options configure the setup of the map.
let gameMapOptions = {
  center: gameMapCenter,
  zoom: gameMapZoom,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  maxZoom: gameMapZoomMax,
  minZoom: gameMapZoomMin,
  panControl: false,
  mapTypeControl: false,
  styles: [{
      elementType: 'geometry',
      stylers: [{
        color: '#ebe3cd'
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
    {
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    },
  ]
}
let gameMap
//When the page loads, the line below calls the function below called 'loadgameMap' to load up the map.
google.maps.event.addDomListener(window, 'load', loadGameMap)
//THE MAIN FUNCTION THAT IS CALLED WHEN THE WEB PAGE LOADS
function loadGameMap() {
  // Sets current location as center of the map
  navigator.geolocation.getCurrentPosition(function(position) {
    gameMapCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    gameMap.setCenter(gameMapCenter)
  })

  gameMap = new google.maps.Map(document.getElementById("game-map"), gameMapOptions)
  setPlayerMarker(gameMapCenter)
  //Calls the function below to load up all the map markers.
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message)
}

function loadMapMarkers() {
  //create array to store a set of location
  var collection = new Array()
  //a set of locations stored in array
  collection[0] = new google.maps.LatLng(59.312943, 18.109854)
  collection[1] = new google.maps.LatLng(59.313670, 18.114184)
  collection[2] = new google.maps.LatLng(59.313670, 18.118675)
  collection[3] = new google.maps.LatLng(59.312560, 18.105562)
  collection[4] = new google.maps.LatLng(59.310822, 18.114690)
  collection[5] = new google.maps.LatLng(59.311496, 18.118675)
  collection[6] = new google.maps.LatLng(59.309242, 18.109821)

  var pointMarkerImage = new Array() //store image of marker in array

  //create number of markers based on collection.length
  for (var i = 0; i < collection.length; i++) {
    pointMarkerImage[i] = new google.maps.MarkerImage('../pins/orange_MarkerC.png')
    pointMarker[i] = new google.maps.Marker({
      position: collection[i],
      map: gameMap,
      icon: pointMarkerImage[i],
      animation: google.maps.Animation.BOUNCE,
      title: "Quest nr. " + i,
      my_id: i
    })
  }
}

function setPlayerMarker(gameMapCenter) {
  $(".modal").on("hidden.bs.modal", function() {
    $(".btn-primary").removeClass("btn-danger");
    $(".btn-primary").removeClass("btn-success");
  });
  id = navigator.geolocation.watchPosition(setLocation, error, options)
  playerMarker = new google.maps.Marker({
    position: gameMapCenter,
    map: gameMap,
    icon: '../pins/pink_MarkerA.png'
  })
  loadMapMarkers()
}

function setLocation(pos) { // watchPosition callback
  fetch(api_url + '/strawberrydb/')
    .then(response => {
      response.json().then(json => {
        for (var j = 0; j < json.strawberrydb.length; j++) {
          quizzes[j] = json.strawberrydb[j];
        }
        //console.log(json);
      });
    })
    .catch(error => {
      console.log(error);
    });
  var markerslist = new Array();
  fetch(api_url + '/strawberrydb/markers')
    .then(response => {
      response.json().then(json => {
        for (var j = 0; j < json.Markers.length; j++) {
          markerslist[j] = json.Markers[j];
        }
        console.log(markerslist);
      });
    })
    .catch(error => {
      console.log(error);
    });


// Ger laget poäng
  let presetDistance = 100 //Meter
  playerPos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
  playerMarker.setPosition(playerPos)
  for (var i = 0; i < pointMarker.length; i++) {
    //console.log(element.getPosition())
    questPos = pointMarker[i].getPosition()
    dist = google.maps.geometry.spherical.computeDistanceBetween(playerPos, questPos)
    console.log(dist)
    if (dist <= presetDistance)
      google.maps.event.addListener(pointMarker[i], 'click', function(e) {
        //console.log(this.my_id)
        var t = this.my_id
        $("#markerModal").modal();
        // console.log(quizzes);
        document.getElementById('question').innerHTML = quizzes[t].question;
        document.getElementById('btn1').innerHTML = quizzes[t].answer1;
        document.getElementById('btn2').innerHTML = quizzes[t].answer2;
        document.getElementById('btn3').innerHTML = quizzes[t].answer3;
        document.getElementById('btn4').innerHTML = quizzes[t].answer4;
        bindAnswerButtons(t);
      })
  }
}

function bindAnswerButtons(quizId) {
  $('#btn1, #btn2, #btn3, #btn4').click(function() {
    console.log($(this).html() + quizzes[quizId].correctAnswer);
    if ($(this).html() == quizzes[quizId].correctAnswer) {
      document.getElementById(this.id).classList.add("btn-success");
      // Fetchar lagtabellen från db, assignar datan in i en lista kallad teamArray så vi kan använda json objektet
      console.log('hej');


      //PUT med fetch för att lägga till poäng

     fetch(api_url + '/teamscore/' + team2, {
      	method: 'get'
      }).then(function(response) {

      }).catch(function(err) {
      	// Error :(
      });

var teamArray = new Array();
  fetch(api_url + '/strawberrydb/teamscore')
    .then(response => {
      response.json().then(json => {
        for (var n = 0; n < json.teamscore.length; n++) {
          teamArray[n] = json.teamscore[n];
        }
        console.log(teamArray);
      });
    })
    .catch(error => {
      console.log(error);
    });

  //Lägg den i "IF rätt svar" funktionen

      $('#btn1, #btn2, #btn3, #btn4').off('click');

    } else {
      console.log('wrong');
      $('#btn1, #btn2, #btn3, #btn4').off('click');
    }
  });
}

//TA BORT
// var markerslist = new Array();
// fetch('http://localhost:3000/api/u8157462_strawberrydb/markers')
//   .then(response => {
//     response.json().then(json => {
//       for (var j = 0; j < json.Markers.length; j++) {
//         markerslist[j] = json.Markers[j];
//       }
//       console.log(markerslist);
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });
