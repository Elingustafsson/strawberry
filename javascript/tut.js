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


  //
  //   function myFunction() {
  //     setInterval(function(){
  //       var pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //   }, 3000);
  // }



// Get the modal
var modal = document.getElementById('info-Modal');

// Get the button that opens the modal
var btn = document.getElementById("questionbutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

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
