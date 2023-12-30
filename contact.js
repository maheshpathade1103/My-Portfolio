// Basic form validation
const form = document.querySelector(".contact-form form");
form.addEventListener("submit", (event) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Additional validation (e.g., email format) can be added here

    // Submit the form using AJAX if desired (for more advanced functionality)
});
