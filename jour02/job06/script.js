function appliquerStyleLaPlateforme() {
    document.body.classList.add('plateforme-style');
}

function detecterCodeKonami(callback) {
    var konamiCode = [
        "ArrowUp", "ArrowUp",
        "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight",
        "ArrowLeft", "ArrowRight",
        "b", "a"
    ];
    var index = 0;

    function keyHandler(event) {
        if (event.key === konamiCode[index]) {
            index++;
            if (index === konamiCode.length) {
                callback();
                index = 0; 
            }
        } else {
            index = 0;
        }
    }

    window.addEventListener('keydown', keyHandler);
}

detecterCodeKonami(appliquerStyleLaPlateforme);
