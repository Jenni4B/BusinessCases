let building = {
    floors: [
        {
            room: "Bedroom 1",
            sensors: {
                alarmType: ["smoke", "heat", "fire"],
                icons: [
                    "images/smoke.png",
                    "images/heat.png",
                    "images/fire.png"
                ],
            }
        },
        {
            room: "Bedroom 1",
            sensors: {
                alarmType: ["smoke", "heat", "fire"],
                icons: [
                    "images/smoke.png",
                    "images/heat.png",
                    "images/fire.png"
                ],
            }
        }
    ]
};
function loadSensors() {
    let contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear existing content

    building.floors.forEach(floor => {
        const card = document.createElement('div'); // Create a div for each card
        card.classList.add('sensor-card'); // Add class to the card for styling

        // Populate the card with information from the building object
        card.innerHTML = `
            <h2> Building </h2>
            <h3>${floor.room}</h3>
            <h4>Sensor Types</h4>
            <ul>
                ${floor.sensors.alarmType.map((type, index) => `
                    <li>
                        <img src="${floor.sensors.icons[index]}" alt="${type} icon" style="width:20px;height:20px;">
                        ${type}
                    </li>
                `).join('')}
            </ul>
        `;

        contentContainer.appendChild(card); // Append the card to the container
    });
}


document.addEventListener("DOMContentLoaded", () => {
    // Check if the user is logged in; redirect to index if not
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    // Display a welcome message
    let welcomeUser = document.getElementById("welcomeUser");
    if (welcomeUser) {
        welcomeUser.textContent = `Hey ${accountInfo.name}!`;
    }

    // Load sensors data
    loadSensors();

    // Attach logout function
    document.querySelectorAll(".logoutBtn").forEach(button => {
        button.addEventListener("click", logOut);
    });
});
