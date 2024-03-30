function updateTable() {
    fetch("utilisateur.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de récupération du fichier JSON");
            }
            return response.json();
        })
        .then(data => {
            const userTable = document.getElementById("userTable").getElementsByTagName("tbody")[0];
            userTable.innerHTML = "";
            data.forEach(user => {
                const row = userTable.insertRow();
                const idCell = row.insertCell(0);
                const nomCell = row.insertCell(1);
                const prenomCell = row.insertCell(2);
                const emailCell = row.insertCell(3);
                idCell.textContent = user.id;
                nomCell.textContent = user.nom;
                prenomCell.textContent = user.prenom;
                emailCell.textContent = user.email;
            });
        })
        .catch(error => {
            console.error("Une erreur s'est produite:", error);
        });
}
