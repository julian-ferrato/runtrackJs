function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const errorSpan = document.getElementById('emailError');
    if (!isValidEmail(email)) {
        errorSpan.textContent = 'Veuillez entrer une adresse email valide.';
    } else {
        errorSpan.textContent = '';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const errorSpan = document.getElementById('passwordError');
    if (password.length < 6) {
        errorSpan.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
    } else {
        errorSpan.textContent = '';
    }
});

document.getElementById('connexionForm').addEventListener('submit', function(event) {
    event.preventDefault();
});
