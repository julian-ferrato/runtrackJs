document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");

    button.addEventListener("click", function() {
        fetch("expression.txt")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur de récupération de fichier");
                }
                return response.text();
            })
            .then(data => {
                const expressionParagraph = document.createElement("p");
                expressionParagraph.textContent = data;
                document.body.appendChild(expressionParagraph);
            })
            .catch(error => {
                console.error("Une erreur s'est produite:", error);
            });
    });
});
