document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const address = document.getElementById("address").value;
            const password = document.getElementById("password").value;

            if (!name || !email || !phone || !address || !password) {
                alert("All fields are required!");
                return;
            }

            const user = { name, email, phone, address, password };
            localStorage.setItem(email, JSON.stringify(user));
            alert("Signup successful! You can now login.");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
    
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
    
            const storedUser = localStorage.getItem(email);
    
            if (!storedUser) {
                alert("User not found. Please sign up first.");
                return;
            }
    
            const user = JSON.parse(storedUser);
            if (user.password !== password) {
                alert("Incorrect password!");
                return;
            }
    
            // Store the logged-in user's email
            localStorage.setItem("loggedInUser", email);
    
            alert("Login successful! Redirecting to homepage.");
            window.location.href = "index.html";
        });
    }
    
});
