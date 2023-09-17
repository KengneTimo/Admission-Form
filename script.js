// Student Admission Form Validation
const admissionForm = document.getElementById('admissionForm');
admissionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Perform validation here
    // Example: Check if fields are not empty
    const firstName = document.getElementById('firstName').value;
    // Repeat similar checks for other fields

    if (!firstName) {
        alert('First Name is required');
        return;
    }

    // If all validations pass, you can submit the form
    alert('Form submitted successfully');
    this.reset(); // Clear the form after submission
});

// Login Form Validation
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Perform validation here
    // Example: Check if username and password are not empty
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Username and Password are required');
        return;
    }

    // If all validations pass, you can handle login logic here
    alert('Login successful');
    this.reset(); // Clear the form after login
});