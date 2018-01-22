var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 59.31082,
      lng: 18.11587
    },

    zoom: 14

  });
  var origin = {
    lat: 59.31074,
    lng: 18.11595
  };
  var origin2 = {
    lat: 59.311,
    lng: 18.118
  };
  var origin3 = {
    lat: 59.31234,
    lng: 18.111
  };
  var origin4 = {
    lat: 59.31274,
    lng: 18.111
  };
  var origin5 = {
    lat: 59.31277,
    lng: 18.112
  };
  var origin6 = {
    lat: 59.31273,
    lng: 18.113
  };
  var origin7 = {
    lat: 59.31276,
    lng: 18.114
  };
  var origin8 = {
    lat: 59.31363,
    lng: 18.113
  };
  var origin9 = {
    lat: 59.31333,
    lng: 18.1132
  };
  var origin10 = {
    lat: 59.31393,
    lng: 18.1134
  };


  var marker = new google.maps.Marker({
    position: origin,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: origin2,
    map: map
  });
  var marker3 = new google.maps.Marker({
    position: origin3,
    map: map
  });
  var marker4 = new google.maps.Marker({
    position: origin4,
    map: map
  });
  var marker5 = new google.maps.Marker({
    position: origin5,
    map: map
  });
  var marker6 = new google.maps.Marker({
    position: origin6,
    map: map
  });
  var marker7 = new google.maps.Marker({
    position: origin7,
    map: map
  });
  var marker8 = new google.maps.Marker({
    position: origin8,
    map: map
  });
  var marker9 = new google.maps.Marker({
    position: origin9,
    map: map
  });
  var marker10 = new google.maps.Marker({
    position: origin10,
    map: map
  });


  marker.addListener('click', setModalOne);
  marker2.addListener('click', setModalTwo);
  marker3.addListener('click', setModalThree);
  marker4.addListener('click', setModalFour);
  marker5.addListener('click', setModalFive);
  marker6.addListener('click', setModalSix);
  marker7.addListener('click', setModalSeven);
  marker8.addListener('click', setModalEight);
  marker9.addListener('click', setModalNine);
  marker10.addListener('click', setModalTen);


  function setModal() {

    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the marker, open the modal
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  function setModalOne() {
    setModal();
    document.querySelector('.questions').innerHTML = "bajsbaadgfshfhfdhgfssbfjs";
  }

  function setModalTwo() {
    setModal();
    document.querySelector('.questions').innerHTML = "hejhejhejhejhjehje";
  }

  function setModalThree() {
    setModal();
    document.querySelector('.questions').innerHTML = "ibland suger detta";
  }

  function setModalFour() {
    setModal();
    document.querySelector('.questions').innerHTML = "Jag är hungrig";
  }

  function setModalFive() {
    setModal();
    document.querySelector('.questions').innerHTML = "Jag vill äta på pong";
  }

  function setModalSix() {
    setModal();
    document.querySelector('.questions').innerHTML = "Ingen kommer se detta";
  }

  function setModalSeven() {
    setModal();
    document.querySelector('.questions').innerHTML = "fint väder";
  }

  function setModalEight() {
    setModal();
    document.querySelector('.questions').innerHTML = "finns de chips?";
  }

  function setModalNine() {
    setModal();
    document.querySelector('.questions').innerHTML = "mat är gott";
  }

  function setModalTen() {
    setModal();
    document.querySelector('.questions').innerHTML = "vems idé var detta?";
  }



  //Paulina code start
  //lng lines
  var lng1 = [{
      lat: 59.316330,
      lng: 18.101649
    },
    {
      lat: 59.308446,
      lng: 18.101649
    }
  ];

  var lng2 = [{
      lat: 59.316330,
      lng: 18.105903
    },
    {
      lat: 59.308446,
      lng: 18.105903
    }
  ];

  var lng3 = [{
      lat: 59.316330,
      lng: 18.110110
    },
    {
      lat: 59.308446,
      lng: 18.110110
    }
  ];

  var lng4 = [{
      lat: 59.316330,
      lng: 18.113499
    },
    {
      lat: 59.308446,
      lng: 18.113499
    }
  ];

  var lng5 = [{
      lat: 59.316330,
      lng: 18.116396
    },
    {
      lat: 59.308446,
      lng: 18.116396
    }
  ];

  var lng6 = [{
      lat: 59.316330,
      lng: 18.119410
    },
    {
      lat: 59.308446,
      lng: 18.119410
    }
  ];

  //lat lines
  var lat1 = [{
      lat: 59.316330,
      lng: 18.101649
    },
    {
      lat: 59.316330,
      lng: 18.119410
    }
  ];

  var lat2 = [{
      lat: 59.314819,
      lng: 18.101649
    },
    {
      lat: 59.314819,
      lng: 18.119410
    }
  ];

  var lat3 = [{
      lat: 59.313011,
      lng: 18.101649
    },
    {
      lat: 59.313011,
      lng: 18.119410
    }
  ];

  var lat4 = [{
      lat: 59.3113702,
      lng: 18.101649
    },
    {
      lat: 59.3113702,
      lng: 18.119410
    }
  ];

  var lat5 = [{
      lat: 59.309650,
      lng: 18.101649
    },
    {
      lat: 59.309650,
      lng: 18.119410
    }
  ];

  var lat6 = [{
      lat: 59.308446,
      lng: 18.101649
    },
    {
      lat: 59.308446,
      lng: 18.119410
    }
  ];

  map.data.add({
    geometry: new google.maps.Data.Polygon([lng1,
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
      lat6
    ])
  })
  //Paulian code end








  // //
  // // //-------------Viktors kod börjar-----------//
  // // function initMap() {
  // //   let origin = {
  // //     lat: 59.31074,
  // //     lng: 18.11595
  // //   };
  // //   let map = new google.maps.Map(document.getElementById('map'), {
  // //     zoom: 15,
  // //     center: origin
  // //   });
  //
  //   // Gör fler
  //   // let marker = new google.maps.Marker({
  //   //   position: origin,
  //   //   map: map
  //   // });
  // }
  // function initMap() {
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   });

  var beachmarker = null;

  function autoUpdate() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var newPoint = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);



      if (beachmarker) {
        // Marker exists, Move it
        beachmarker.setPosition(newPoint);
      } else {
        // No marker,create it
        beachmarker = new google.maps.Marker({
          position: newPoint,
          map: map,
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });
      }

      // Center the map on the new position
      map.setCenter(newPoint);
    });
  }
  setInterval(autoUpdate, 1000);

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