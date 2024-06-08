function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple login logic for demonstration purposes
    if (username === 'admin' && password === 'admin') {
        document.getElementById('login-signup').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('user-name').innerText = username;
    } else {
        alert('Invalid username or password');
    }
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Simple signup logic for demonstration purposes
    if (username && password) {
        alert('Signup successful, please login.');
        showLogin();
    } else {
        alert('Please enter a username and password');
    }
}

function showDashboard() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('content').style.display = 'none';
}

function showSection(sectionId) {
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById(sectionId).style.display = 'block';
}

function uploadImage(sectionId) {
    const fileInput = document.getElementById(`${sectionId}-upload`);
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById(`${sectionId}-img`).src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}
