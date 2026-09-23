// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Get the input element
let numericInput = document.getElementsByClassName("number-only");

for (i = 0; i < numericInput.length; i++) {
  numericInput[i].addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
}

// Get all elements with class "char-only"
let charInputs = document.getElementsByClassName("only-letters");

for (let i = 0; i < charInputs.length; i++) {
  charInputs[i].addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
  });
}

function setupMobileValidation() {
  document.querySelectorAll(".number-only").forEach(function (input) {
    input.addEventListener("input", function () {
      let mobileInput = this.value.trim();
      const submitBtn = this.closest("form").querySelector(".btn-submit-1");
      const mobLabel = this.nextElementSibling; // Assuming label/message element is next sibling

      // Allow only digits
      this.value = this.value.replace(/\D/g, "");
      mobileInput = this.value;

      const remainingDigits = 10 - mobileInput.length;
      const firstInvalid = /^[0-5]/.test(mobileInput);

      // If first digit is invalid
      if (firstInvalid) {
        this.value = mobileInput.replace(/^[0-5]/, "");
        mobLabel.innerHTML = "First digit must be greater than 5.";
        mobLabel.style.display = "block";
        if (submitBtn) submitBtn.disabled = true;
        return;
      }

      // If first digit is valid, show remaining digit message
      if (mobileInput.length === 0) {
        mobLabel.innerHTML = "";
        mobLabel.style.display = "none";
      } else if (remainingDigits > 0) {
        mobLabel.innerHTML = `Please enter ${remainingDigits} more digit${
          remainingDigits > 1 ? "s" : ""
        }.`;
        mobLabel.style.display = "block";
      } else {
        mobLabel.innerHTML = "";
        mobLabel.style.display = "none";
      }

      // Enable or disable submit button
      if (submitBtn) {
        submitBtn.disabled = mobileInput.length !== 10;
      }
    });
  });
}

// Call the function to initialize the validation
setupMobileValidation();

const forms = document.querySelectorAll(".auto-update-form");

forms.forEach((form) => {
  const inputs = form.querySelectorAll("input[required], select[required]");
  const mobileInput = form.querySelector(".mobile-input");
  let typingTimer; // Timer for detecting typing
  let submitTimer; // Timer for delaying form submission

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      clearTimeout(typingTimer);
      boostrapValidation();
    });

    // input.addEventListener("change", handleValidation);
  });

  // function handleTyping() {
  //   clearTimeout(typingTimer);
  //   typingTimer = setTimeout(() => {
  //     boostrapValidation(); // Validate after 4 seconds of inactivity
  //   }, 4000);
  // }

  function boostrapValidation() {
    clearTimeout(submitTimer);

    // Add Bootstrap validation classes
    inputs.forEach((input) => {
      if (input.checkValidity()) {
        form.classList.add("was-validated");
        input.classList.add("is-valid"); // Add Bootstrap valid class
        input.classList.remove("is-invalid");
      } else {
        form.classList.remove("was-validated");
        input.classList.remove("is-valid");
        input.classList.add("is-invalid"); // Add Bootstrap invalid class
      }
    });

    // Check if all required fields are valid
    const allValid = Array.from(inputs).every((input) => {
      if (mobileInput.value.length !== 10) {
        return false;
      }

      if (input.tagName === "SELECT") {
        return input.value.trim() !== ""; // Validate select value
      }
      return input.checkValidity(); // Validate input field
    });

    if (allValid && mobileInput.value.length === 10) {
      // Show loader or perform any additional actions
      const loader = form.querySelector(".form-loader");
      if (loader) loader.style.display = "block";

      // Delay form submission by 4 seconds
      submitTimer = setTimeout(() => {
        form.submit();
      }, 3500);
    }

    // Mobile number validation for auto-submit
    if (mobileInput) {
      mobileInput.addEventListener("input", () => {
        if (mobileInput.value.length === 10 && allValid) {
          clearTimeout(submitTimer);

          // Show loader if available
          const loader = form.querySelector(".form-loader");
          if (loader) loader.style.display = "block";

          // Submit form immediately
          submitTimer = setTimeout(() => {
            form.submit();
          }, 1000); // Delay slightly for better UX
        }
      });
    }
  }
});

let btnSubmit = document.querySelectorAll(".btn-submit-1");

btnSubmit.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // e.preventDefault();
    let form = this.closest("form");
    let loaderSpinner = form.querySelector(".form-loader-div");
    let loaderTxt = form.querySelector(".form-txt");

    if (form.checkValidity()) {
      loaderSpinner.style.display = "block";
      loaderTxt.style.display = "none";
    }
  });
});
