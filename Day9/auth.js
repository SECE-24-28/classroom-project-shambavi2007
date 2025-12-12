// Check URL parameters on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('signup') === 'true') {
        switchToSignup();
    }
});

function switchToSignup() {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupForm').classList.add('active');
    
    // Update URL without page reload
    const url = new URL(window.location);
    url.searchParams.set('signup', 'true');
    window.history.pushState({}, '', url);
}

function switchToLogin() {
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
    
    // Update URL without page reload
    const url = new URL(window.location);
    url.searchParams.delete('signup');
    window.history.pushState({}, '', url);
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const messageDiv = document.getElementById('loginMessage');
    
    // Clear previous messages
    messageDiv.textContent = '';
    messageDiv.className = 'auth-message';
    
    // Validation
    if (!email || !password) {
        showAuthMessage('loginMessage', 'Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAuthMessage('loginMessage', 'Please enter a valid email address', 'error');
        return;
    }
    
    // Check stored credentials
    const storedUser = localStorage.getItem('mobipay_user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
            showAuthMessage('loginMessage', 'Login successful! Redirecting...', 'success');
            
            // Store login session
            localStorage.setItem('mobipay_session', JSON.stringify({
                email: user.email,
                name: user.name,
                loginTime: new Date().toISOString()
            }));
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
            return;
        }
    }
    
    showAuthMessage('loginMessage', 'Invalid email or password', 'error');
}

function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const mobile = document.getElementById('signupMobile').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const agreeTerms = document.getElementById('agreeTerms').checked;
    const messageDiv = document.getElementById('signupMessage');
    
    // Clear previous messages
    messageDiv.textContent = '';
    messageDiv.className = 'auth-message';
    
    // Validation
    if (!name || !email || !mobile || !password || !confirmPassword) {
        showAuthMessage('signupMessage', 'Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAuthMessage('signupMessage', 'Please enter a valid email address', 'error');
        return;
    }
    
    if (!isValidMobile(mobile)) {
        showAuthMessage('signupMessage', 'Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    
    if (password.length < 6) {
        showAuthMessage('signupMessage', 'Password must be at least 6 characters long', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showAuthMessage('signupMessage', 'Passwords do not match', 'error');
        return;
    }
    
    if (!agreeTerms) {
        showAuthMessage('signupMessage', 'Please agree to the Terms & Conditions', 'error');
        return;
    }
    
    // Check if user already exists
    const existingUser = localStorage.getItem('mobipay_user');
    if (existingUser) {
        const user = JSON.parse(existingUser);
        if (user.email === email) {
            showAuthMessage('signupMessage', 'An account with this email already exists', 'error');
            return;
        }
    }
    
    // Create new user
    const newUser = {
        name: name,
        email: email,
        mobile: mobile,
        password: password,
        signupDate: new Date().toISOString()
    };
    
    localStorage.setItem('mobipay_user', JSON.stringify(newUser));
    showAuthMessage('signupMessage', 'Account created successfully! Please login.', 'success');
    
    // Clear form and switch to login
    setTimeout(() => {
        document.getElementById('signupForm').reset();
        switchToLogin();
    }, 2000);
}

function showAuthMessage(elementId, message, type) {
    const messageDiv = document.getElementById(elementId);
    messageDiv.textContent = message;
    messageDiv.className = `auth-message ${type}`;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidMobile(mobile) {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
}

// Format mobile number input
document.getElementById('signupMobile').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    e.target.value = value;
});