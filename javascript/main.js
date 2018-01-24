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
    lat: 59.312943,
    lng: 18.109854
  };
  var origin2 = {
    lat: 59.313670,
    lng: 18.114184
  };
  var origin3 = {
    lat: 59.313670,
    lng: 18.118675
  };
  var origin4 = {
    lat: 59.312560,
    lng: 18.105562
  };
  var origin5 = {
    lat: 59.310822,
    lng: 18.114690
  };
  var origin6 = {
    lat: 59.311496,
    lng: 18.118675
  };
  var origin7 = {
    lat: 59.309242,
    lng: 18.109821
  };
  var origin8 = {
    lat: 59.309242,
    lng: 18.114184
  };
  var origin9 = {
    lat: 59.310603,
    lng: 18.104818
  };
  var origin10 = {
    lat: 59.313910,
    lng: 18.123958
  };
  var origin11 = {
    lat: 59.314142,
    lng: 18.128604
  };
  var origin12 = {
    lat: 59.314138,
    lng: 18.132489
  };
  var origin13 = {
    lat: 59.312397,
    lng: 18.128854
  };
  var origin14 = {
    lat: 59.312596,
    lng: 18.132403
  };
  var origin15 = {
    lat: 59.311934,
    lng: 18.123680
  };
  var origin16 = {
    lat: 59.310214,
    lng: 18.119443
  };
  var origin17 = {
    lat: 59.308769,
    lng: 18.104712
  };
  var origin18 = {
    lat: 59.310663,
    lng: 18.109411
  };
  var origin19 = {
    lat: 59.314359,
    lng: 18.107662
  };
  var origin20 = {
    lat: 59.314403,
    lng: 18.109626
  };
  var origin21 = {
    lat: 59.314836,
    lng: 18.113413
  };
  var origin22 = {
    lat: 59.315448,
    lng: 18.118670
  };
  var origin23 = {
    lat: 59.315706,
    lng: 18.122586
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
  var marker11 = new google.maps.Marker({
    position: origin11,
    map: map
  });
  var marker12 = new google.maps.Marker({
    position: origin12,
    map: map
  });
  var marker13 = new google.maps.Marker({
    position: origin13,
    map: map
  });
  var marker14 = new google.maps.Marker({
    position: origin14,
    map: map
  });
  var marker15 = new google.maps.Marker({
    position: origin15,
    map: map
  });
  var marker16 = new google.maps.Marker({
    position: origin16,
    map: map
  });
  var marker17 = new google.maps.Marker({
    position: origin17,
    map: map
  });
  var marker18 = new google.maps.Marker({
    position: origin18,
    map: map
  });
  var marker19 = new google.maps.Marker({
    position: origin19,
    map: map
  });
  var marker20 = new google.maps.Marker({
    position: origin20,
    map: map
  });
  var marker21 = new google.maps.Marker({
    position: origin21,
    map: map
  });
  var marker22 = new google.maps.Marker({
    position: origin22,
    map: map
  });
  var marker23 = new google.maps.Marker({
    position: origin23,
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
  marker11.addListener('click', setModalEleven);
  marker12.addListener('click', setModalTwelve);
  marker13.addListener('click', setModalThirteen);
  marker14.addListener('click', setModalFourteen);
  marker15.addListener('click', setModalFifteen);
  marker16.addListener('click', setModalSixteen);
  marker17.addListener('click', setModalSeventeen);
  marker18.addListener('click', setModalEightteen);
  marker19.addListener('click', setModalNineteen);
  marker20.addListener('click', setModalTwenty);
  marker21.addListener('click', setModalTwentyOne);
  marker22.addListener('click', setModalTwentyTwo);
  marker22.addListener('click', setModalTwentyThree);


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

  function setModalEleven() {
    setModal();
    document.querySelector('.questions').innerHTML = "Elins första";
  }

  function setModalTwelve() {
    setModal();
    document.querySelector('.questions').innerHTML = "Elins andra";
  }

  function setModalThirteen() {
    setModal();
    document.querySelector('.questions').innerHTML = "Elins tredje";
  }

  function setModalFourteen() {
    setModal();
    document.querySelector('.questions').innerHTML = "vnsklnvl";
  }

  function setModalFifteen() {
    setModal();
    document.querySelector('.questions').innerHTML = "avmanpgitjg";
  }

  function setModalSixteen() {
    setModal();
    document.querySelector('.questions').innerHTML = "vmaklbailg";
  }

  function setModalSeventeen() {
    setModal();
    document.querySelector('.questions').innerHTML = "ktrpohjndgl";
  }

  function setModalEightteen() {
    setModal();
    document.querySelector('.questions').innerHTML = "mbklmlteniho";
  }

  function setModalNineteen() {
    setModal();
    document.querySelector('.questions').innerHTML = "akfogjaoj";
  }

  function setModalTwenty() {
    setModal();
    document.querySelector('.questions').innerHTML = "jihsnblnhis";
  }

  function setModalTwentyOne() {
    setModal();
    document.querySelector('.questions').innerHTML = "kvlsnbito";
  }

  function setModalTwentyTwo() {
    setModal();
    document.querySelector('.questions').innerHTML = "mvnalblgja";
  }

  function setModalTwentyThree() {
    setModal();
    document.querySelector('.questions').innerHTML = "bndkjhlx";
  }



  //Paulina code start
  //outline
  var line1 = [{
      lat: 59.315429,
      lng: 18.107863
    },
    {
      lat: 59.312078,
      lng: 18.102610
    }
  ];

  var line2 = [{
      lat: 59.312078,
      lng: 18.102610
    },
    {
      lat: 59.311622,
      lng: 18.103188
    }
  ];

  var line3 = [{
      lat: 59.311622,
      lng: 18.103188
    },
    {
      lat: 59.309638,
      lng: 18.101770
    }
  ];

  var line4 = [{
      lat: 59.309638,
      lng: 18.101770
    },
    {
      lat: 59.309316,
      lng: 18.103450
    }
  ];

  var line5 = [{
      lat: 59.309316,
      lng: 18.103450
    },
    {
      lat: 59.308351,
      lng: 18.102925
    }
  ];

  var line6 = [{
      lat: 59.308351,
      lng: 18.102925
    },
    {
      lat: 59.307842,
      lng: 18.105552
    }
  ];

  var line7 = [{
      lat: 59.307842,
      lng: 18.105552
    },
    {
      lat: 59.308271,
      lng: 18.105919
    }
  ];

  var line8 = [{
      lat: 59.308271,
      lng: 18.105919
    },
    {
      lat: 59.309477,
      lng: 18.118264
    }
  ];

  var line9 = [{
      lat: 59.309477,
      lng: 18.118264
    },
    {
      lat: 59.309879,
      lng: 18.120365
    }
  ];

  var line10 = [{
      lat: 59.309879,
      lng: 18.120365
    },
    {
      lat: 59.310898,
      lng: 18.122414
    }
  ];

  var line11 = [{
      lat: 59.310898,
      lng: 18.122414
    },
    {
      lat: 59.310979,
      lng: 18.124515
    }
  ];

  var line12 = [{
      lat: 59.310979,
      lng: 18.124515
    },
    {
      lat: 59.311408,
      lng: 18.126091
    }
  ];

  var line13 = [{
      lat: 59.311408,
      lng: 18.126091
    },
    {
      lat: 59.311817,
      lng: 18.131213
    }
  ];

  var line14 = [{
      lat: 59.311817,
      lng: 18.131213
    },
    {
      lat: 59.312299,
      lng: 18.133918
    }
  ];

  var line15 = [{
      lat: 59.312299,
      lng: 18.133918
    },
    {
      lat: 59.313358,
      lng: 18.136203
    }
  ];

  var line16 = [{
      lat: 59.313358,
      lng: 18.136203
    },
    {
      lat: 59.314068,
      lng: 18.135809
    }
  ];

  var line17 = [{
      lat: 59.314068,
      lng: 18.135809
    },
    {
      lat: 59.315462,
      lng: 18.131712
    }
  ];

  var line18 = [{
      lat: 59.315462,
      lng: 18.131712
    },
    {
      lat: 59.315235,
      lng: 18.130635
    }
  ];

  var line19 = [{
      lat: 59.315235,
      lng: 18.130635
    },
    {
      lat: 59.315945,
      lng: 18.130189
    }
  ];

  var line20 = [{
      lat: 59.315945,
      lng: 18.130189
    },
    {
      lat: 59.315529,
      lng: 18.126932
    }
  ];

  var line21 = [{
      lat: 59.315529,
      lng: 18.126932
    },
    {
      lat: 59.316267,
      lng: 18.125855
    }
  ];

  var line22 = [{
      lat: 59.316267,
      lng: 18.125855
    },
    {
      lat: 59.315940,
      lng: 18.125113
    }
  ];

  var line23 = [{
      lat: 59.315940,
      lng: 18.125113
    },
    {
      lat: 59.316736,
      lng: 18.120681
    }
  ];

  var line24 = [{
      lat: 59.316736,
      lng: 18.120681
    },
    {
      lat: 59.314819,
      lng: 18.108887
    }
  ];

  var line25 = [{
      lat: 59.314819,
      lng: 18.108887
    },
    {
      lat: 59.315429,
      lng: 18.107863
    }
  ];

  //grid
  var line26 = [{
      lat: 59.313720,
      lng: 18.105166
    },
    {
      lat: 59.315565,
      lng: 18.127096
    }
  ];

  var line27 = [{
      lat: 59.311622,
      lng: 18.103188
    },
    {
      lat: 59.313358,
      lng: 18.136203
    }
  ];

  var line28 = [{
      lat: 59.309316,
      lng: 18.103450
    },
    {
      lat: 59.310898,
      lng: 18.122414
    }
  ];

  var line29 = [{
      lat: 59.314819,
      lng: 18.108887
    },
    {
      lat: 59.308271,
      lng: 18.105919
    }
  ];

  var line30 = [{
      lat: 59.316736,
      lng: 18.120681
    },
    {
      lat: 59.310898,
      lng: 18.122414
    }
  ];

  var line31 = [{
      lat: 59.315565,
      lng: 18.127096
    },
    {
      lat: 59.311408,
      lng: 18.126091
    }
  ];

  var line32 = [{
      lat: 59.315235,
      lng: 18.130635
    },
    {
      lat: 59.311817,
      lng: 18.131213
    }
  ];

  var line33 = [{
      lat: 59.315992,
      lng: 18.116096
    },
    {
      lat: 59.309477,
      lng: 18.118264
    }
  ];

  var line34 = [{
      lat: 59.315144,
      lng: 18.110915
    },
    {
      lat: 59.308852,
      lng: 18.111862
    }
  ];
  map.data.add({
    geometry: new google.maps.Data.Polygon([line1,
      line2,
      line3,
      line4,
      line5,
      line6,
      line7,
      line8,
      line9,
      line10,
      line11,
      line12,
      line13,
      line14,
      line15,
      line16,
      line17,
      line18,
      line19,
      line20,
      line21,
      line22,
      line23,
      line24,
      line25,
      line26,
      line27,
      line28,
      line29,
      line30,
      line31,
      line32,
      line33,
      line34
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
