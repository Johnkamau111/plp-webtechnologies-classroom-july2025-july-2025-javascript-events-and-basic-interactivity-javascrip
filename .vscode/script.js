// ===============================
// Part 1: Event Handling
// ===============================
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  message.style.display = message.style.display === "none" ? "block" : "none";
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// Light/Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

// ===============================
// Part 3: Form Validation
// ===============================
const form = document.getElementById("signupForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting

  // Inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("formSuccess");

  let valid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success
  if (valid) {
    successMessage.textContent = "🎉 Form submitted successfully!";
    form.reset();
  }
});
