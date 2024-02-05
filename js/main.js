// On récupère l'élément qui nous intéresse (ici la class .carre)
let element = document.querySelector('.carre')

// On crée une function pour définir les éléments que l'on veux récuperer
function getInfosElement(element) {

    // On crée une variable qui va contenir le style de notre élément
    let style = getComputedStyle(element, null)

    // Puis on déclare des variables par rapport au style
    const className = "Class : " + element.className + "\n";
    const backgroundColor = "- Background color : " + style.backgroundColor + "\n";
    const color = "- Color : " + style.color + "\n";
    const height = " - Height : " + style.height + "\n";
    const width = " - Width : " + style.width + "\n";
    const display = " - Display : " + style.display + "\n";
    const fontFamily = " - Font Family : " + style.fontFamily + "\n";

    // On déclare une variable qui contient le tout
    textAlert = className + backgroundColor + color + height + width + display + fontFamily;

    // Puis on lance une alert popup pour tout afficher
    alert(textAlert);
}

// Grâce au click sur l'element, on lancera la function getInfosElement
element.addEventListener('click', function() {
    getInfosElement(element);
});
