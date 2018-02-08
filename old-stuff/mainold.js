function menu(x) {
  x.classList.toggle('change')
}


// Sign Up Now!
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var btn = document.getElementById('loginButton');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
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

// MODAL
function regModal() {
  document.querySelector('.login').innerHTML="";
  document.querySelector('.modal-header').innerHTML="Create account";

  let email = document.createElement("INPUT");
  email.type = "email";
  login.appendChild(email);
  email.placeholder = "email";
  email.className = "modal-content";

  let usrName = document.createElement("INPUT");
  usrName.type = "text";
  login.appendChild(usrName);
  usrName.placeholder = "username";
  usrName.className = "modal-content";

  let password = document.createElement("INPUT");
  password.type = "password";
  login.appendChild(password);
  password.placeholder = "password";
  password.className = "modal-content";

  let button = document.createElement("BUTTON");
  button.type = "submit";
  login.appendChild(button);
  button.innerHTML ="Create account";
  button.className = "button";
}
