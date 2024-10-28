// Account information
let accountInfo = {
    name: "Jennifer",
    username: "Jenni4B",
    password: "12345!",
    twoStep: "67890@"
};

// Login validation function
function logInValidation(inputUsername, inputPassword, inputTwoStep) {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.style.display = 'none'; // Hide error message by default
    errorMessageDiv.innerText = ''; // Clear previous error message

    // Validate username
    if (inputUsername !== accountInfo.username) {
        errorMessageDiv.innerText = "Username or Password is wrong."; // Set error message
        errorMessageDiv.style.display = 'block'; // Show error message
        return false; // Username is incorrect
    }

    // Validate password
    if (inputPassword !== accountInfo.password) {
        errorMessageDiv.innerText = "Username or Password is wrong."; // Set error message
        errorMessageDiv.style.display = 'block'; // Show error message
        return false; // Password is incorrect
    }

    // Validate two-step code
    if (inputTwoStep !== accountInfo.twoStep) {
        errorMessageDiv.innerText = "Invalid two-step code."; // Set error message
        errorMessageDiv.style.display = 'block'; // Show error message
        return false; // Two-step code is incorrect
    }

    console.log("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard
    return true; // User is authenticated
}

// Connect the login button to the validation function
document.getElementById('loginBtn').addEventListener('click', function() {
    // Get user input from the form fields
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const inputTwoStep = document.getElementById('twoStep').value; // Get two-step input

    // Call the validation function
    logInValidation(inputUsername, inputPassword, inputTwoStep);
});

// Placeholder function for account creation
function createAccount() {
    // Implement account creation logic here
}

// Display welcome message on dashboard
if (document.getElementById('welcomeUser')) {
    let welcomeUser = document.getElementById('welcomeUser');
    welcomeUser.textContent = `Hello ${accountInfo.name}!`;
}
