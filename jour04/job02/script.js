function jsonValueKey(jsonString, key) {
    try {
        const jsonObject = JSON.parse(jsonString);
        if (key in jsonObject) {
            return jsonObject[key];
        } else {
            return null;
        }
    } catch (error) {
        console.error("Erreur lors de l'analyse de la chaîne JSON:", error);
        return null;
    }
}

const jsonString = '{"name": "LaPlateforme_", "adress": "8 rue d\'Hozier", "city": "marseille", "nb_staff": "11", "creation": "2019"}';
const key = "city";
const value = jsonValueKey(jsonString, key);
document.write("Valeur pour la clé '" + key + "': " + value);
