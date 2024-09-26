const destinations = [
    { name: "Delhi", description: "Explore India's capital, with iconic landmarks like India Gate and Red Fort." },
    { name: "Jaipur", description: "Known as the Pink City, Jaipur is famous for its grand forts and palaces." },
    { name: "Kolkata", description: "Discover the cultural capital of India, home to colonial architecture." },
    { name: "Mumbai", description: "The City of Dreams offers stunning marine drive views and Bollywood." },
    { name: "Goa", description: "Enjoy golden beaches, lively nightlife, and water sports in India's coastal paradise." },
    { name: "Agra", description: "Home to the magnificent Taj Mahal, a must-visit for its Mughal architecture." },
    { name: "Kerala", description: "Cruise through the serene backwaters and lush greenery in Kerala." },
    { name: "Udaipur", description: "The City of Lakes is known for its romantic palaces and serene lake views." },
    { name: "Manali", description: "A scenic hill station offering snow-capped mountains and adventure sports." },
];

document.addEventListener("DOMContentLoaded", () => {
    showLoginPage(); // Show login page on load
    document.getElementById("loginForm").addEventListener("submit", handleLogin);
});

function showMainPage() {
    hideAllPages();
    document.getElementById("mainPage").classList.remove("hidden");
    loadDestinations();
}

function showLoginPage() {
    hideAllPages();
    document.getElementById("loginPage").classList.remove("hidden");
}

function showAboutPage() {
    hideAllPages();
    document.getElementById("aboutPage").classList.remove("hidden");
}

function hideAllPages() {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("aboutPage").classList.add("hidden");
}

function loadDestinations() {
    const destinationContainer = document.getElementById("destinations");
    destinationContainer.innerHTML = ''; // Clear existing content
    destinations.forEach((destination, index) => {
        const div = document.createElement("div");
        div.className = "destination";
        div.innerHTML = `
            <input type="checkbox" id="destination${index}" value="${destination.name}">
            <label for="destination${index}">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
            </label>
        `;
        destinationContainer.appendChild(div);
    });
}

function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple authentication logic (replace with real logic as needed)
    if (username === "user" && password === "password") {
        alert("Login successful!"); // Notify successful login
        showMainPage(); // Show main page on successful login
    } else {
        alert("Invalid username or password");
    }
}

function bookGuide() {
    const selectedDestinations = [];
    destinations.forEach((destination, index) => {
        const checkbox = document.getElementById(`destination${index}`);
        if (checkbox.checked) {
            selectedDestinations.push(destination.name);
        }
    });

    if (selectedDestinations.length > 0) {
        alert(`Guide booked for: ${selectedDestinations.join(', ')}`); // Notify booked destinations
    } else {
        alert("Please select at least one destination to book a guide.");
    }
}
