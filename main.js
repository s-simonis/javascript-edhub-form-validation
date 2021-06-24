let passwordField = "";
let passwordWarning = "";

let usernameField = "";
let usernameWarning = "";

window.onload = function exampleFunction() {
         passwordField = document.getElementById('passwordField');
         passwordWarning = document.getElementById('warningPassword');
         passwordField.addEventListener('keyup', checkLength);

         usernameField = document.getElementById('usernameField');
         usernameWarning = document.getElementById('warningUsername');
         usernameField.addEventListener('keyup', checkCharacters);

}

function checkLength(e) {
    if (e.target.value.length < 6) {
        passwordWarning.style.visibility = 'visible';
    }
    if (e.target.value.length >= 6) {
        passwordWarning.style.visibility = 'hidden';
    }
}

function checkCharacters(e) {
    if (e.target.value.includes("@")) {
        usernameWarning.style.visibility = 'visible';
    }
    else {
        usernameWarning.style.visibility = 'hidden';
    }
}
