const emailSubmit = document.getElementById("email-form-submit");
const emailInput = document.getElementById("email-input");
const errorMessage = document.querySelector(".error-message");
const signUpForm = document.querySelector(".sign-up-form");
const signUpImage = document.querySelector(".sign-up-image");
const successMessage = document.querySelector(".success-message-wrap");
const emailAddress = document.getElementById("email-address");
const dismissButton = document.getElementById("dismiss");

// user submitted email string
emailSubmit.addEventListener("submit", function (e) {
  const emailString = emailInput.value;
  e.preventDefault();

  //validate email string
  let goodEmail = stringValidator(emailString);

  //clear out input field if email good
  if ((goodEmail = true)) {
    emailInput.value = "";
  }
});

// validation method for email string
const stringValidator = function (emailString) {
  // regex for email addresses
  const acceptedEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailString.match(acceptedEmail)) {
    //email invalid set errors
    errorMessage.classList.remove("hide");
    emailInput.classList.add("error-input");
  } else {
    // email good, remove form, add success message
    errorMessage.classList.add("hide");
    signUpImage.classList.add("hide");
    signUpForm.classList.add("hide");
    successMessage.classList.remove("hide");
    emailAddress.innerText = `${emailString}`;
  }
};

// Dismiss success message with button
dismissButton.addEventListener("click", function (e) {
  e.preventDefault();
  signUpImage.classList.remove("hide");
  signUpForm.classList.remove("hide");
  successMessage.classList.add("hide");
});
