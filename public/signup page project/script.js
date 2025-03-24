// DOM elements
const modal = document.getElementById("signupModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const form = document.getElementById("signupForm");
const formErrors = document.getElementById("form-errors");
const confirmationMessage = document.getElementById("confirmationMessage");

// Open the modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Form validation and submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear previous errors
  formErrors.innerHTML = "";

  // Get form values
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const experience = form.experience.value.trim();
  const date = form.date.value;

  // Validate form inputs
  const errors = [];

  if (!name) errors.push("Full Name is required.");
  if (!email || !validateEmail(email))
    errors.push("A valid Email Address is required.");
  if (!phone || !validatePhone(phone))
    errors.push("A valid Phone Number is required.");
  if (!date) errors.push("Available Date is required.");

  if (errors.length > 0) {
    formErrors.innerHTML = `<ul><li>${errors.join("</li><li>")}</li></ul>`;
    return;
  }

  // Simulate a successful form submission
  form.reset();
  modal.style.display = "none";
  confirmationMessage.style.display = "block";

  // Hide confirmation message after 3 seconds
  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 3000);
});

// Email validation (basic)
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Phone validation (matches format: (123) 456-7890)
const validatePhone = (phone) => {
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return phoneRegex.test(phone);
};
