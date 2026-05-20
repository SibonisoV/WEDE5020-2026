function validateForm() {
    // Clear previous errors and styling
    clearErrors(); 

    // Get input values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Flag to track if the form is valid
    let isValid = true;

    // --- Name Validation ---
    if (nameInput.value.trim() === "") {
        displayError('nameError', 'Name is required.');
        markInvalid(nameInput);
        isValid = false;
    } 
    // You could add other checks, e.g., minimum length:
    // else if (nameInput.value.trim().length < 2) {
    //     displayError('nameError', 'Name must be at least 2 characters.');
    //     markInvalid(nameInput);
    //     isValid = false;
    // }

    // --- Email Validation ---
    if (emailInput.value.trim() === "") {
        displayError('emailError', 'Email is required.');
        markInvalid(emailInput);
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        // Simple regex check for a basic email format
        displayError('emailError', 'Please enter a valid email address.');
        markInvalid(emailInput);
        isValid = false;
    }

    // If the form is valid, show a success message (instead of submitting)
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully! (No actual server submission in this example)';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('contactForm').reset(); // Clear the form fields
    }

    // Returning 'true' allows the form to submit; 'false' prevents submission.
    // We return 'false' to keep the user on the page and show the success message/errors.
    return false;
}

/** Helper functions **/

// Function to display an error message
function displayError(id, message) {
    document.getElementById(id).textContent = message;
}

// Function to add the 'invalid' CSS class
function markInvalid(inputElement) {
    inputElement.classList.add('invalid');
}

// Function to clear all errors and invalid styling
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(el => el.textContent = '');

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('invalid'));

    document.getElementById('successMessage').style.display = 'none';
}

// Simple email validation using a regular expression
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}