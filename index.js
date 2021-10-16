// Membership page
const form = document.querySelector("#form");
const fullName = document.querySelector("#name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confPassword = document.querySelector("#password2");

const requiredArry = [fullName, username, email, password, confPassword];

// required field input
function requiredInputs(requiredArry) {
  requiredArry.forEach((input) => {
    if (input.value.trim() === "") {
      displayError(input, `${smallName(input)} is required field.`);
    } else {
      displaySuccess(input);
    }
  });
}

function smallName(a) {
  return a.previousElementSibling.innerHTML;
}

// Display error if field is empty
function displayError(input, message) {
  const formCrtl = input.parentElement;
  formCrtl.className = "form-crtl error";
  const small = formCrtl.querySelector("small");
  small.innerText = message;
}

// Display success if field is filled out
function displaySuccess(input) {
  const formCrtl = input.parentElement;
  formCrtl.className = "form-crtl success";
}

// validate Name field
// const regEx = /^[a-zA-Z].*[\s\.]*$/g;
function nameValidation(input) {
  const regEx = /^[a-zA-Z\s\.]{0,50}$/g;
  if (regEx.test(input.value.trim())) {
    displaySuccess(input);
  } else {
    displayError(input, `${smallName(input)} is in wrong format.`);
  }
}

// Validation of Email
function emailValidation(input) {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"`~]+(\.[^<>()[\]\\.,;:\s@"`~]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if (!regEx.test(input.value.trim())) {
    displayError(
      input,
      `${smallName(input)} must be valid, e.g. test@test.com.`
    );
  } else {
    displaySuccess(input);
  }
}

// Password validation
function validPassword(input) {
  const regEx =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;
  if (!regEx.test(input.value)) {
    displayError(
      input,
      `${smallName(input)} must be (8-20) - 1U, 1L, 1 Digit & 1(!#$@^%&?).`
    );
  }
}

function validUsername(input) {
  const regEx = /^[\w\d\.]{6,10}$/g;
  if (!regEx.test(input.value.trim())) {
    displayError(
      input,
      `${smallName(
        input
      )} accepts U and L case, Digit, (. _) and 6-10 characters.`
    );
  }
}

// Password Confirmation validation
function confPassValidation(passwordInput, confPassInput) {
  if (confPassInput.value !== passwordInput.value) {
    displayError(confPassInput, `${smallName(confPassInput)} does not match.`);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  nameValidation(fullName);
  requiredInputs(requiredArry);
  emailValidation(email);
  validPassword(password);
  confPassValidation(password, confPassword);
  validUsername(username);

  // Name field
  // if (fullName.value.trim() === "") {
  //   displayError(fullName, "Name is empty.");
  // } else
  // if (!nameValidation(fullName)) {
  //   displayError(fullName, "Name is not proper.");
  // } else {
  //   displaySuccess(fullName);
  // }
  // // Username field
  // if (username.value === "") {
  //   displayError(username, "Username is empty");
  // } else {
  //   displaySuccess(username);
  // }
  // // Email field
  // if (email.value === "") {
  //   displayError(email, "Email is empty");
  // } else {
  //   displaySuccess(email);
  // }
  // // Password field
  // if (password.value === "") {
  //   displayError(password, "Password is empty");
  // } else {
  //   displaySuccess(password);
  // }
  // // confirm password field
  // if (confPassword.value === "") {
  //   displayError(confPassword, "Confirm password is empty");
  // } else {
  //   displaySuccess(confPassword);
  // }
});
