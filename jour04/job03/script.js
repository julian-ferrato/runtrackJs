function filterPokemons() {
    const filterForm = document.getElementById("filterForm");
    const id = filterForm.elements["id"].value.trim();
    const nom = filterForm.elements["name"].value.trim();
    const type = filterForm.elements["type"].value.trim();

    fetch("pokemon.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de récupération du fichier");
            }
            return response.json();
        })
        .then(data => {
            let filteredPokemons = data.filter(pokemon => {
                return (!id || pokemon.id.toString() === id) &&
                       (!nom || checkPokemonName(pokemon.name, nom)) &&
                       (!type || pokemon.type.includes(type));
            });

            displayResults(filteredPokemons);
        })
        .catch(error => {
            console.error("Une erreur s'est produite:", error);
        });
}

function checkPokemonName(names, targetName) {
    if (names && names.french && names.french.toLowerCase() === targetName.toLowerCase()) {
        return true;
    }
    return false;
}

function displayResults(pokemons) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (pokemons.length === 0) {
        resultsDiv.textContent = "Aucun Pokémon trouvé.";
    } else {
        const ul = document.createElement("ul");
        pokemons.forEach(pokemon => {
            const li = document.createElement("li");
            li.textContent = `${pokemon.name.french} - ID: ${pokemon.id} - Type: ${pokemon.type}`;
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    }
}
