let pass = document.querySelector("#password");
let confirmPass = document.querySelector("#password_validation");
let submitButton = document.querySelector("button");
let check = document.querySelector(".check-validation");

pass.addEventListener("input", (e) => {
  let passValue = pass.value;

  if (!/[A-Z]/.test(passValue)) {
    pass.setCustomValidity("❌ Must contain at least 1 uppercase letter.");

    pass.reportValidity();
  } else if (!/\d/.test(passValue)) {
    password.setCustomValidity("❌ Must contain at least 1 number.");

    pass.reportValidity();
  } else if (passValue.length < 6) {
    password.setCustomValidity("❌ Must be at least 6 characters.");

    pass.reportValidity();
  } else {
    password.setCustomValidity("");
  }
});
confirmPass.addEventListener("input", (e) => {
  if (pass.value != confirmPass.value) {
    confirmPass.setCustomValidity("Passwords do not match.");
    confirmPass.reportValidity();
  } else {
    confirmPass.setCustomValidity("");

    submitButton.removeAttribute("disabled");
  }
});
