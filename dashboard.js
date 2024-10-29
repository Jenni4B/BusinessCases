let building = {
    floors: [
        {
            locations: 1,
            room: "Bedroom 1",
            sensors: {

                alarmType: ["smoke", "heat", "fire"],
                icons: [
                    "fire.png",
                    "heat.png",
                    "smoke.png"
                ],

                status: ["on", "off", "deactivated", "unresponsive"]
            }
        }
    ],
};

function loadSensors() {

    let contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear existing 

    building.forEach(user => { // A 'for each' loop 
        const card = document.createElement('div'); // Create a div card for each user
        card.classList.add('user-card'); // Add class for each user card

        card.innerHTML = `
            <h3>${building.floors}</h3>
        `;

        contentContainer.appendChild(card); // Append the user card to the container
    });

    // loadInfo.textContent = "Hide Launchpad Students"; // Could be floor buttons
    // loadInfo.style.backgroundColor = '#843024'; // Change button background color
    // profilesVisible = true; // Update visibility state
}

// Greets the User
let welcomeUser = document.getElementById('welcomeUser')
welcomeUser.textContent = `Hey ${accountInfo.name}!`

function logOut() {
    // Clear login state
    localStorage.removeItem("isLoggedIn");

    // Redirect to the login page
    window.location.href = "index.html";
}

// Select all buttons with the class "logoutBtn" and add the event listener
document.querySelectorAll(".logoutBtn").forEach(button => {
    button.addEventListener("click", logOut);
});
