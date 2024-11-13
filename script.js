const headerIcons = document.querySelectorAll('.header-right ul li a');
const showUsersButton = document.getElementById('showUsersButton');
const logoutButton = document.getElementById('logoutButton');

const aboutLink = document.querySelector('a[href="#about"]');
const shopLink = document.querySelector('a[href="#products"]');
const contactLink = document.querySelector('a[href="#contact"]');

const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const closeButton = document.querySelector('.close');

const signupButton = document.getElementById('SignUpButton');

const users = [
    { username: 'omar', password: 'omartaji666' },
    { username: 'taji', password: 'omartaji777' },
    { username: 'roblox', password: 'roblox888' }
];


headerIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        console.log('Icon clicked'); 
        
        headerIcons.forEach(icon => {
            icon.classList.remove('active');
        });

        this.classList.add('active');
        console.log('Active class added to clicked icon:', this); 
    });
});





aboutLink.addEventListener('dblclick', function() {
    openInNewTab('about.html');
});

shopLink.addEventListener('dblclick', function() {
    openInNewTab('shop.html');
});

contactLink.addEventListener('dblclick', function() {
    openInNewTab('contact.html');
});

function openInNewTab(url) {
    const win = window.open(url, '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
}

loginButton.addEventListener('click', function () {
    openPopup();
});

closeButton.addEventListener('click', function() {
    closePopup();
});

function openPopup() {
    loginPopup.style.display = 'block';
}

function closePopup() {
    loginPopup.style.display = 'none';
}






function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const togglePassword = document.querySelector(`#${inputId} + .toggle-password i`);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    }
}

function login(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    const userFound = users.some(user => user.username === username && user.password === password);

    if (userFound) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }

    closePopup();
}




signupButton.addEventListener('click', signup);




function showSignup() {
    const signupPopup = document.getElementById('signupPopup');
    signupPopup.style.display = 'block';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

function signup(event) {
    event.preventDefault();

    const nameValue = document.getElementById('signup-name').value;
    const passValue = document.getElementById('signup-password').value;

    
    if (!nameValue.trim() && !passValue.trim()) {
        return; 
    }

    if (!nameValue || !passValue) {
        alert('Please fill out all fields.');
        return;
    }

    
    if (users.some(user => user.username === nameValue)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    
    users.push({ username: nameValue, password: passValue });

    alert('Account created successfully! You can now log in.');

    
    closePopup('signupPopup');
}

showUsersButton.addEventListener('click', function() {
    console.log('Users:', users);
});


function logout() {
    let lengt = users.length;
    if (lengt > 0) {
        users.splice(lengt - 1, 1);
        console.log("User logged out, updated users:", users);
    } else {
        alert("no users to log out");
    }
}


function redirectToPayment() {
    window.open('payment.html', '_blank');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100; 

        if (target) {
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth' 
            });
        }
    });
});
