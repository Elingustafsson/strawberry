var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
let marker, p;
let markers = [];
var locations = [
  [59.313670, 18.118675],
  [59.312560, 18.105562],
  [59.310822, 18.114690],
  [59.312943, 18.109854],
  [59.313680, 18.114184],
  [59.311496, 18.118675],
  [59.309242, 18.109821],
  [59.309242, 18.104818],
  [59.310603, 18.104818],
  [59.313910, 18.123958],
  [59.314142, 18.128604],
  [59.314138, 18.132489],
  [59.312397, 18.128854],
  [59.312596, 18.132403],
  [59.311934, 18.123680],
  [59.310214, 18.119443],
  [59.308769, 18.104712],
  [59.310663, 18.109411],
  [59.314359, 18.107662],
  [59.314403, 18.109626],
  [59.314836, 18.113413],
  [59.315448, 19.118670],
  [59.315706, 18.122586]
];
  var beachmarker = null;


function startMap() {
  var myPos = navigator.geolocation.getCurrentPosition(initMap);
}
google.maps.event.addDomListener(window, 'load', startMap);

function initMap(myPos) {
  var MapCenter = new google.maps.LatLng(myPos.coords.latitude, myPos.coords.longitude);
  var MapZoom = 15;
  var MapZoomMax = 24;
  var MapZoomMin = 6;

  var mapOptions = {
    center: MapCenter,
    zoom: MapZoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    maxZoom: MapZoomMax,
    minZoom: MapZoomMin,
    panControl: false,
    mapTypeControl: false
  };
  myMap = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  runMap(MapCenter);
}

function calcDistance (fromLat, fromLng, toLat, toLng) {
      return google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(fromLat, fromLng), new google.maps.LatLng(toLat, toLng));
   }

function runGame(pos) {
  var crd = pos.coords;
  beachmarker.setPosition(new google.maps.LatLng(crd.latitude, crd.longitude));
  console.log(crd);
  // loop through markers, see if distance < preset, if then do XYZ
  locations.forEach(function(element) {
    dist = calcDistance(crd.latitude, crd.longitude, element[0], element[1]);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(element[0], element[1]),
      map: myMap,
      icon: {
        url: 'https://png.icons8.com/color/33/ffffff/strawberry.png',
        scaledSize: new google.maps.Size(40, 40) // pixels
      }
    });
    if (dist <= 100) {
        marker.addListener('click', setModal);
    }

});




} //end of rungame

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

function runMap(MapCenter) {

  let presetDistance = 10;



  id = navigator.geolocation.watchPosition(runGame, error, options);

  //function autoUpdate() {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   var playerPos = new google.maps.LatLng(position.coords.latitude,
    //     position.coords.longitude);
    //     console.log(playerPos);
    //   if (beachmarker) {
    //     beachmarker.setPosition(playerPos);
    //
    //   } else {
         beachmarker = new google.maps.Marker({
           position: MapCenter,
           map: myMap,
           icon: {
        url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        scaledSize: new google.maps.Size(50, 50) // pixels
    }
         });





  for (var i = 0; i < lines.length; i++) {
    myMap.data.add({
      geometry: new google.maps.Data.Polygon([
        lines[i]
      ])
    })
  }





  function setModalOne() {
    setModal();
    document.querySelector('.questions');
  }

}
let lines = [
  line1 = [{
      lat: 59.315429,
      lng: 18.107863
    },
    {
      lat: 59.312078,
      lng: 18.102610
    }
  ], line2 = [{
      lat: 59.312078,
      lng: 18.102610
    },
    {
      lat: 59.311622,
      lng: 18.103188
    }
  ], line3 = [{
      lat: 59.311622,
      lng: 18.103188
    },
    {
      lat: 59.309638,
      lng: 18.101770
    }
  ], line4 = [{
      lat: 59.309638,
      lng: 18.101770
    },
    {
      lat: 59.309316,
      lng: 18.103450
    }
  ], line5 = [{
      lat: 59.309316,
      lng: 18.103450
    },
    {
      lat: 59.308351,
      lng: 18.102925
    }
  ], line6 = [{
      lat: 59.308351,
      lng: 18.102925
    },
    {
      lat: 59.307842,
      lng: 18.105552
    }
  ], line7 = [{
      lat: 59.307842,
      lng: 18.105552
    },
    {
      lat: 59.308271,
      lng: 18.105919
    }
  ], line8 = [{
      lat: 59.308271,
      lng: 18.105919
    },
    {
      lat: 59.309477,
      lng: 18.118264
    }
  ], line9 = [{
      lat: 59.309477,
      lng: 18.118264
    },
    {
      lat: 59.309879,
      lng: 18.120365
    }
  ], line10 = [{
      lat: 59.309879,
      lng: 18.120365
    },
    {
      lat: 59.310898,
      lng: 18.122414
    }
  ], line11 = [{
      lat: 59.310898,
      lng: 18.122414
    },
    {
      lat: 59.310979,
      lng: 18.124515
    }
  ], line12 = [{
      lat: 59.310979,
      lng: 18.124515
    },
    {
      lat: 59.311408,
      lng: 18.126091
    }
  ], line13 = [{
      lat: 59.311408,
      lng: 18.126091
    },
    {
      lat: 59.311817,
      lng: 18.131213
    }
  ], line14 = [{
      lat: 59.311817,
      lng: 18.131213
    },
    {
      lat: 59.312299,
      lng: 18.133918
    }
  ], line15 = [{
      lat: 59.312299,
      lng: 18.133918
    },
    {
      lat: 59.313358,
      lng: 18.136203
    }
  ], line16 = [{
      lat: 59.313358,
      lng: 18.136203
    },
    {
      lat: 59.314068,
      lng: 18.135809
    }
  ], line17 = [{
      lat: 59.314068,
      lng: 18.135809
    },
    {
      lat: 59.315462,
      lng: 18.131712
    }
  ], line18 = [{
      lat: 59.315462,
      lng: 18.131712
    },
    {
      lat: 59.315235,
      lng: 18.130635
    }
  ], line19 = [{
      lat: 59.315235,
      lng: 18.130635
    },
    {
      lat: 59.315945,
      lng: 18.130189
    }
  ], line20 = [{
      lat: 59.315945,
      lng: 18.130189
    },
    {
      lat: 59.315529,
      lng: 18.126932
    }
  ], line21 = [{
      lat: 59.315529,
      lng: 18.126932
    },
    {
      lat: 59.316267,
      lng: 18.125855
    }
  ], line21 = [{
      lat: 59.315529,
      lng: 18.126932
    },
    {
      lat: 59.316267,
      lng: 18.125855
    }
  ], line22 = [{
      lat: 59.316267,
      lng: 18.125855
    },
    {
      lat: 59.315940,
      lng: 18.125113
    }
  ], line23 = [{
      lat: 59.315940,
      lng: 18.125113
    },
    {
      lat: 59.316736,
      lng: 18.120681
    }
  ], line24 = [{
      lat: 59.316736,
      lng: 18.120681
    },
    {
      lat: 59.314819,
      lng: 18.108887
    }
  ], line25 = [{
      lat: 59.314819,
      lng: 18.108887
    },
    {
      lat: 59.315429,
      lng: 18.107863
    }
  ], line26 = [{
      lat: 59.313720,
      lng: 18.105166
    },
    {
      lat: 59.315565,
      lng: 18.127096
    }
  ], line27 = [{
      lat: 59.311622,
      lng: 18.103188
    },
    {
      lat: 59.313358,
      lng: 18.136203
    }
  ], line28 = [{
      lat: 59.309316,
      lng: 18.103450
    },
    {
      lat: 59.310898,
      lng: 18.122414
    }
  ], line29 = [{
      lat: 59.314819,
      lng: 18.108887
    },
    {
      lat: 59.308271,
      lng: 18.105919
    }
  ], line30 = [{
      lat: 59.316736,
      lng: 18.120681
    },
    {
      lat: 59.310898,
      lng: 18.122414
    }
  ], line31 = [{
      lat: 59.315565,
      lng: 18.127096
    },
    {
      lat: 59.311408,
      lng: 18.126091
    }
  ], line32 = [{
      lat: 59.315235,
      lng: 18.130635
    },
    {
      lat: 59.311817,
      lng: 18.131213
    }
  ], line33 = [{
      lat: 59.315992,
      lng: 18.116096
    },
    {
      lat: 59.309477,
      lng: 18.118264
    }
  ], line34 = [{
      lat: 59.315144,
      lng: 18.110915
    },
    {
      lat: 59.308852,
      lng: 18.111862
    }
  ]
]

function setModal() {

  var modal = document.getElementById('myModal');
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

var modal = document.getElementById('info-Modal');

var btn = document.getElementById("questionbutton");


var span = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//----Questions---//

let v = document.getElementById("quest").innerHTML = "Winter is coming är ett känt citat, vilken tv-serie kommer det från?";
let a = document.getElementById("answer1").innerHTML = "Black Mirror";
let b = document.getElementById("answer2").innerHTML = "Stranger Things";
let c = document.getElementById("answer3").innerHTML = "Game of Thrones";
let d = document.getElementById("answer4").innerHTML = "Breaking Bad";

let theParent = document.querySelector(".correction");
theParent.addEventListener("click", doSomething, false);

function doSomething(e) {
  let x = document.getElementById("answer3");
  if (e.target === x) {
    e.target.style.color = "green";
  } else {
    e.target.style.color = "red";
  }
  e.stopPropagation();
}

//----Questions end----//
