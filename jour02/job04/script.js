function bisextile(annee) {
const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    if (event.key.match(/[a-z]/i)) {
        if (document.activeElement === textarea) {
            textarea.value += event.key + event.key;
        } else {
            textarea.value += event.key;
        }
    }
})}
