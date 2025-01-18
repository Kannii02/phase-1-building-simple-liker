// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    handleLike(heart);
  });
});

function handleLike(heart) {
  mimicServerCall()
    .then(() => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
    })
    .catch(error => {
      displayError(error);
    });
}

function displayError(error) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  modalMessage.innerText = error;
  modal.classList.remove("hidden"); // Show error modal

  setTimeout(() => {
    modal.classList.add("hidden"); // Hide after 3 seconds
  }, 3000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
