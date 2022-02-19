let zipcodeInput = document.querySelector('#zipcode');
let countryInput = document.querySelector('#country');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector("#password");
let passwordCheckInput = document.querySelector("#passwordCheck");

let validateCountry = (country) => {
  let pattern = /[a-zA-Z]{2,}/;
  if (pattern.exec(countryInput.value)){
    countryInput.style.backgroundColor="rgb(46, 204, 113)";
  } else {
    countryInput.style.backgroundColor="rgb(255, 76, 48)";

  }
}
let validateEmail = (email) => {
  let pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (pattern.exec(emailInput.value)){
    emailInput.style.backgroundColor="rgb(46, 204, 113)";
  } else {
    emailInput.style.backgroundColor="rgb(255, 76, 48)";
  }
}
let validateZipcode = (zipcode) => {
  let pattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (pattern.exec(zipcodeInput.value)){
    zipcodeInput.style.backgroundColor="rgb(46, 204, 113)";
  } else {
    zipcodeInput.style.backgroundColor="rgb(255, 76, 48)";
  }
}

let validatePassword = (password) => {
  let pattern = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
  if (pattern.exec(passwordInput.value)){
    passwordInput.style.backgroundColor="rgb(46, 204, 113)";
  } else {
    passwordInput.style.backgroundColor="rgb(255, 76, 48)";
  }
}
let validatePasswordCheck = (passwordCheck) => {
  if (passwordCheckInput.value === passwordInput.value){
    passwordCheckInput.style.backgroundColor="rgb(46, 204, 113)";
  } else {
    passwordCheckInput.style.backgroundColor="rgb(255, 76, 48)";
  }
}