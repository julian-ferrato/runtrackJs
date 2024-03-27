function showhide() {
    var article = document.getElementById("dynamic-article");

    if (!article) {
        article = document.createElement("article");
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        article.id = "dynamic-article";
        document.body.appendChild(article);
    } else {
        article.remove();
    }
}

document.getElementById("button").addEventListener("click", showhide);
