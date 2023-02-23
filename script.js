var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('Passwords Match!');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function submit(){
  alert("Thank you for signing up with us! You will be recieving a verification email soon.");
}

function signIn(){
  alert("User not found. Click 'Reset Password' or Create a new account");
}