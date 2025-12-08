// signup.js

function validateSignup(event) {
    event.preventDefault();

    let name = document.getElementById("signupName").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

    let message = document.getElementById("signupMessage");

    // Basic validation
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        message.textContent = "Please fill all the fields!";
        message.style.color = "red";
        return;
    }

    // Email pattern check
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Enter a valid email address!";
        message.style.color = "red";
        return;
    }

    // Password length check
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters!";
        message.style.color = "red";
        return;
    }

    // Confirm password check
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    // Store user in localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    message.textContent = "Signup successful!";
    message.style.color = "green";

    // Redirect to login page (optional)
    // setTimeout(() => { window.location.href = "login.html"; }, 1000);
}
