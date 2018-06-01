// Home page
var create = document.querySelector('.create-account');
var signIn = document.querySelector('.sign-in');
var log = document.querySelector('.log');

create.addEventListener('click', function(event) {
  signIn.style.display = 'block';
  signUp.style.display = '';
})

var logIn = document.querySelector('.login-account');
var signUp = document.querySelector('.sign-up');
var log = document.querySelector('.log');

logIn.addEventListener('click', function(event) {
  signUp.style.display = 'block';
  signIn.style.display = '';
})

var userField = document.querySelector('.username-field');
var pwField = document.querySelector('.pw-field');

userField.addEventListener('focus', function() {
  userField.style.border = '1px solid #000';
  if (userField.value === 'Choose a username') {
    userField.value = '';
  }
  /*    if (isNaN(dateField.value) === true) {
      result.innerHTML = 'Tu dois entrer un nombre !';
    } else if (dateField.value > year) {
      result.innerHTML = 'Tu n\'es pas encore né !';
    } else {
      result.innerHTML = 'Tu es né en ' + dateField.value + ' et tu as ' + difference + ' ans.';
    }*/
})
userField.addEventListener('blur', function() {
  userField.style.border = '';
  if (userField.value === '') {
    userField.value = 'Choose a username';
  }
})

pwField.addEventListener('focus', function() {
  pwField.style.border = '1px solid #000';
  if (pwField.value === 'Choose a password') {
    pwField.value = '';
  }
})

pwField.addEventListener('blur', function() {
  pwField.style.border = '';
  if (pwField.value === '') {
    pwField.value = 'Choose a password';
  }
})
