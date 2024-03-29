// /js/main.js

// Wait for the DOM content to be fully loaded before initializing the app
document.addEventListener('DOMContentLoaded', initApp);

// Function to initialize the app
function initApp() {
  // Get references to the password input and password toggle button
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.getElementById('passwordToggle');

  // Add click event listener to the password toggle button
  passwordToggle.addEventListener('click', () => {
    // Toggle between password and text types for the password input
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'; // Show password
      passwordToggle.innerHTML = getSVGUnlocked(); // Change toggle icon to unlocked
    } else {
      passwordInput.type = 'password'; // Hide password
      passwordToggle.innerHTML = getSVGLocked(); // Change toggle icon to locked
    }
  });
}

// Function to get SVG markup for a locked icon
function getSVGLocked() {
  return `
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="#05F1FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  `;
}

// Function to get SVG markup for an unlocked icon
function getSVGUnlocked() {
  return `
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="#05F1FF" stroke-width="1" d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z" />
      <path stroke="#05F1FF" stroke-width="1" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  `;
}

function validateLoginForm() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // Basic validation for username (non-empty)
  if (usernameInput.value.trim() === '') {
    alert('Please enter your username.');
    return false;
  }

  // Additional validation for username (minimum length)
  if (usernameInput.value.trim().length < 5) {
    alert('Username must be at least 5 characters long.');
    return false;
  }

  // Basic validation for password (non-empty)
  if (passwordInput.value.trim() === '') {
    alert('Please enter your password.');
    return false;
  }

  // Additional validation for password (minimum length)
  if (passwordInput.value.trim().length < 8) {
    alert('Password must be at least 8 characters long.');
    return false;
  }

  // Additional validation logic can be added here

  return true; // Form is valid
}

function submitLoginForm(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Validate the form
  if (validateLoginForm()) {
    // If the form is valid, you can perform additional actions here
    // For example, sending the data to the server via AJAX or navigating to another page
    alert('Logged in successfully!'); // Replace this with your desired action
  }
}