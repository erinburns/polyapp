var submit = document.getElementById('submit');

function signin(event) {    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    } 

submit.addEventListener('click', signin);