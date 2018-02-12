//Create the variables that will be used within the map configuration options.
//The latitude and longitude of the center of the map.
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
//Create the variable for the main map itself.
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
  //FETCH CODE START

 //const fetch = require("node-fetch");

   //FETCH CODE END
  //a set of locations stored in array
  collection[0] = new google.maps.LatLng(59.312943, 18.109854)
  collection[1] = new google.maps.LatLng(59.313670, 18.114184)
  collection[2] = new google.maps.LatLng(59.313670, 18.118675)
  collection[3] = new google.maps.LatLng(59.312560, 18.105562)
  collection[4] = new google.maps.LatLng(59.310822, 18.114690)
  collection[5] = new google.maps.LatLng(59.311496, 18.118675)
  collection[6] = new google.maps.LatLng(59.309242, 18.109821)
  /*
  quizzes[0] = {
    question: "Frågan lyder: FRÅGAN LYDER: Vem blir året sjordgubbsodlare?",
    answer1: "Olle från Byxekrok",
    answer2: "Pelle från Öland",
    answer3: "Johan från Stockholm",
    answer4: "Pekka från Årjäng",
    correctAnswer: 3
  }
  quizzes[1] = {
    question: "XFrågan lyder: FRÅGAN LYDER: Vem blir året sjordgubbsodlare?",
    answer1: "Olle från Byxekrok",
    answer2: "Pelle från Öland",
    answer3: "Johan från Stockholm",
    answer4: "Pekka från Årjäng",
    correctAnswer: 3
  }
  quizzes[2] = {
    question: "ZFrågan lyder: FRÅGAN LYDER: Vem blir året sjordgubbsodlare?",
    answer1: "Olle från Byxekrok",
    answer2: "Pelle från Öland",
    answer3: "Johan från Stockholm",
    answer4: "Pekka från Årjäng",
    correctAnswer: 3
  }
  quizzes[3] = {
    question: "ZFrågan lyder: FRÅGAN LYDER: Vem blir året sjordgubbsodlare?",
    answer1: "Olle från Byxekrok",
    answer2: "Pelle från Öland",
    answer3: "Johan från Stockholm",
    answer4: "Pekka från Årjäng",
    correctAnswer: 3
  }
  quizzes[4] = {
    question: "ZFrågan lyder: FRÅGAN LYDER: Vem blir året sjordgubbsodlare?",
    answer1: "Olle från Byxekrok",
    answer2: "Pelle från Öland",
    answer3: "Johan från Stockholm",
    answer4: "Pekka från Årjäng",
    correctAnswer: 3
  }
  quizzes[5] = {
    question: "ZFrågan lyder: FRÅGAN LYDER: Vem blir året sjordgubbsodlare?",
    answer1: "Olle från Byxekrok",
    answer2: "Pelle från Öland",
    answer3: "Johan från Stockholm",
    answer4: "Pekka från Årjäng",
    correctAnswer: 3
  }
  quizzes[6] = {
    question: "ZFrågan lyder: FRÅGAN LYDER: Vem blir året sjordgubbsodlare?",
    answer1: "Olle från Byxekrok",
    answer2: "Pelle från Öland",
    answer3: "Johan från Stockholm",
    answer4: "Pekka från Årjäng",
    correctAnswer: 3
  }
  */
  /*
  for(var j=0; j < json.questions.length; j++) {
    quizzes[j] = json.questions[j];

  } */
    // console.log(quizzes);

  var pointMarkerImage = new Array() //store image of marker in array
  //var pointMarker = new Array()//store marker in array

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
  id = navigator.geolocation.watchPosition(setLocation, error, options)
  playerMarker = new google.maps.Marker({
    position: gameMapCenter,
    map: gameMap,
    icon: '../pins/pink_MarkerA.png'
  })
  loadMapMarkers()
}

function setLocation(pos) { // watchPosition callback

  const url = "http://localhost:3000/api/questions/";

  fetch(url)
    .then(response => {
      response.json().then(json => {
        for(var j=0; j < json.questions.length; j++) {
          quizzes[j] = json.questions[j];


        }
        //console.log(json);
      });
    })
    .catch(error => {
      console.log(error);
    });
  let presetDistance = 1000000 //Meter
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
        var i = this.my_id
        $("#markerModal").modal();
        console.log(quizzes[i]);

        if (i == 0) {
          document.getElementById('question').innerHTML = quizzes[0].question;
          document.getElementById('btn1').innerHTML = quizzes[0].answer1;
          document.getElementById('btn2').innerHTML = quizzes[0].answer2;
          document.getElementById('btn3').innerHTML = quizzes[0].answer3;
          document.getElementById('btn4').innerHTML = quizzes[0].answer4;
        }
        else if (i == 1) {
          document.getElementById('question').innerHTML = quizzes[1].question;
          document.getElementById('btn1').innerHTML = quizzes[1].answer1;
          document.getElementById('btn2').innerHTML = quizzes[1].answer2;
          document.getElementById('btn3').innerHTML = quizzes[1].answer3;
          document.getElementById('btn4').innerHTML = quizzes[1].answer4;

        }
        else if (i == 2) {
          document.getElementById('question').innerHTML = quizzes[2].question;
          document.getElementById('btn1').innerHTML = quizzes[2].answer1;
          document.getElementById('btn2').innerHTML = quizzes[2].answer2;
          document.getElementById('btn3').innerHTML = quizzes[2].answer3;
          document.getElementById('btn4').innerHTML = quizzes[2].answer4;

        }
        else if (i == 3) {
          document.getElementById('question').innerHTML = quizzes[3].question;
          document.getElementById('btn1').innerHTML = quizzes[3].answer1;
          document.getElementById('btn2').innerHTML = quizzes[3].answer2;
          document.getElementById('btn3').innerHTML = quizzes[3].answer3;
          document.getElementById('btn4').innerHTML = quizzes[3].answer4;

        }
        else if (i == 4) {
          document.getElementById('question').innerHTML = quizzes[4].question;
          document.getElementById('btn1').innerHTML = quizzes[4].answer1;
          document.getElementById('btn2').innerHTML = quizzes[4].answer2;
          document.getElementById('btn3').innerHTML = quizzes[4].answer3;
          document.getElementById('btn4').innerHTML = quizzes[4].answer4;

        }
        else if (i == 5) {
          document.getElementById('question').innerHTML = quizzes[5].question;
          document.getElementById('btn1').innerHTML = quizzes[5].answer1;
          document.getElementById('btn2').innerHTML = quizzes[5].answer2;
          document.getElementById('btn3').innerHTML = quizzes[5].answer3;
          document.getElementById('btn4').innerHTML = quizzes[5].answer4;

        }
        else if (i == 6) {
          document.getElementById('question').innerHTML = quizzes[6].question;
          document.getElementById('btn1').innerHTML = quizzes[6].answer1;
          document.getElementById('btn2').innerHTML = quizzes[6].answer2;
          document.getElementById('btn3').innerHTML = quizzes[6].answer3;
          document.getElementById('btn4').innerHTML = quizzes[6].answer4;

        }
        else if (i == 7) {
          document.getElementById('question').innerHTML = quizzes[7].question;
          document.getElementById('btn1').innerHTML = quizzes[7].answer1;
          document.getElementById('btn2').innerHTML = quizzes[7].answer2;
          document.getElementById('btn3').innerHTML = quizzes[7].answer3;
          document.getElementById('btn4').innerHTML = quizzes[7].answer4;

        }




      })
  }
}
