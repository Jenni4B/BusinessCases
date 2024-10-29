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

    // Check if errorMessageDiv exists to avoid errors
    if (errorMessageDiv) {
        errorMessageDiv.style.display = 'none';
        errorMessageDiv.innerText = '';
    }

    if (inputUsername !== accountInfo.username || inputPassword !== accountInfo.password) {
        if (errorMessageDiv) {
            errorMessageDiv.innerText = "Username or Password is wrong.";
            errorMessageDiv.style.display = 'block';
        }
        return false;
    }

    if (inputTwoStep !== accountInfo.twoStep) {
        if (errorMessageDiv) {
            errorMessageDiv.innerText = "Invalid two-step code.";
            errorMessageDiv.style.display = 'block';
        }
        return false;
    }

    console.log("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
    return true;
}

// Login validation function
document.addEventListener('DOMContentLoaded', () => {
    // Set up the login validation
    document.getElementById('loginBtn').addEventListener('click', function() {
        const inputUsername = document.getElementById('username').value;
        const inputPassword = document.getElementById('password').value;
        const inputTwoStep = document.getElementById('twoStep').value;

        logInValidation(inputUsername, inputPassword, inputTwoStep);
    });

    // Greet the user if logged in
    // const welcomeUser = document.getElementById('welcomeUser');
    // if (welcomeUser) {
    //     welcomeUser.textContent = `Hey ${accountInfo.name}!`;
    // }

    // Attach logout function to buttons with the class "logoutBtn"
    document.querySelectorAll(".logoutBtn").forEach(button => {
        button.addEventListener("click", logOut);
    });

    // Redirect to the home page if already logged in
    if (localStorage.getItem("isLoggedIn") === "true") {
        window.location.href = "dashboard.html";
    }
});


// Logout function
function logOut() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}


// Placeholder function for account creation
// function createAccount() {}
    // Implement account creation logic here

