function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
}


document.getElementById('nom').addEventListener('input', function() {
    const nom = this.value;
    const errorSpan = document.getElementById('nomError');
    if (nom.trim() === '' || nom.length < 4) {
        errorSpan.textContent = 'Le nom doit contenir au moins 4 caractères.';
    } else {
        errorSpan.textContent = '';
    }
});

document.getElementById('prenom').addEventListener('input', function() {
    const prenom = this.value;
    const errorSpan = document.getElementById('prenomError');
    if (prenom.trim() === '') {
        errorSpan.textContent = 'Veuillez entrer votre prénom.';
    } else {
        errorSpan.textContent = '';
    }
});

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
    if (password.length < 8 || !isValidPassword(password)) {
        errorSpan.textContent = 'Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, un chiffre et un caractère spécial.';
    } else {
        errorSpan.textContent = '';
    }
});

function validateForm() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const adresse = document.getElementById('adresse').value;
    const codePostal = document.getElementById('codePostal').value;

    const nomError = document.getElementById('nomError');
    const prenomError = document.getElementById('prenomError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const adresseError = document.getElementById('adresseError');
    const codePostalError = document.getElementById('codePostalError');

    let isValid = true;

    if (nom.trim() === '' || nom.length < 4) {
        nomError.textContent = 'Le nom doit contenir au moins 4 caractères.';
        isValid = false;
    } else {
        nomError.textContent = '';
    }

    if (prenom.trim() === '') {
        prenomError.textContent = 'Veuillez entrer votre prénom.';
        isValid = false;
    } else {
        prenomError.textContent = '';
    }

    if (!isValidEmail(email)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (password.length < 8 || !isValidPassword(password)) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (adresse.trim() === '') {
        adresseError.textContent = 'Veuillez entrer votre adresse.';
        isValid = false;
    } else {
        adresseError.textContent = '';
    }

    if (codePostal.trim() === '') {
        codePostalError.textContent = 'Veuillez entrer votre code postal.';
        isValid = false;
    } else {
        codePostalError.textContent = '';
    }

    return isValid;
}


document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Inscription réussie');
        window.location.href = 'connexion.html';
    }
});


document.getElementById('adresse').addEventListener('input', function() {

});

document.getElementById('codePostal').addEventListener('input', function() {
});

document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
});


