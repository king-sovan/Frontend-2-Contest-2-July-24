const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

function validateEmail() {
    const email = emailInput.value;
    if (email.length <= 3 || !email.includes('@') || !email.includes('.')) {
        emailError.textContent = 'Email must be more than 3 characters and contain "@" and "."';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value;
    if (password.length <= 8) {
        passwordError.textContent = 'Password must be more than 8 characters';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

function checkAllGood() {
    if (validateEmail() && validatePassword()) {
        successMessage.textContent = 'All good to go';
    } else {
        successMessage.textContent = '';
    }
}

emailInput.addEventListener('input', () => {
    validateEmail();
    checkAllGood();
});

passwordInput.addEventListener('input', () => {
    validatePassword();
    checkAllGood();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to submit?')) {
        alert('Successful signup!');
        form.reset();
        emailError.textContent = '';
        passwordError.textContent = '';
        successMessage.textContent = '';
    } else {
        emailInput.value = '';
        passwordInput.value = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        successMessage.textContent = '';
    }
});