function saveUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now login.');
    window.location.href = 'login.html';
}

function validateUser(event) {
    event.preventDefault();
    
    const loginIdentifier = document.getElementById('loginIdentifier').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => (u.username === loginIdentifier || u.email === loginIdentifier) && u.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Invalid username/email or password.');
    }
}
