function validateLogin(event) {
    event.preventDefault(); 

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let message = document.getElementById("loginMessage");


    if (email === "" || password === "") {
        message.textContent = "Please fill all the fields!";
        message.style.color = "red";
        return;
    }

    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Enter a valid email address!";
        message.style.color = "red";
        return;
    }

    
    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";

       
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        message.textContent = "Incorrect email or password!";
        message.style.color = "red";
    }
}
