function menu(x) {
  x.classList.toggle('change')
}


// Sign Up Now!
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("loginButton")[0];
var btn2 = document.getElementsByClassName("loginButton")[1];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
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
