// Elements
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const modal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");
const loginForm = document.getElementById("loginForm");
const error = document.getElementById("error");

const mainContent = document.getElementById("mainContent");
const dashboard = document.getElementById("dashboard");
const dataForm = document.getElementById("dataForm");

// Open modal
loginBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Login logic
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "jestoni@gmail.com" && password === "jestoni11") {
    modal.classList.add("hidden");
    mainContent.classList.add("hidden");
    dashboard.classList.remove("hidden");

    loginBtn.classList.add("hidden");
    logoutBtn.classList.remove("hidden");

    error.textContent = "";
  } else {
    error.textContent = "Invalid email or password";
  }
});

// Logout logic
logoutBtn.addEventListener("click", () => {
  dashboard.classList.add("hidden");
  mainContent.classList.remove("hidden");

  logoutBtn.classList.add("hidden");
  loginBtn.classList.remove("hidden");
});

// Dashboard form submission
dataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully 🎉");
  dataForm.reset();
});
