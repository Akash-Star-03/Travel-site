
  // Get elements
const modal = document.getElementById('bookingModal');
const btn = document.getElementById('bookBtn');
const span = document.getElementsByClassName('close')[0];

// When the user clicks Book Now, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// If user clicks anywhere outside modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

