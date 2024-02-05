let element = document.querySelector('.carre')
style = getComputedStyle(element, null)

function getInfosElement(element) {
    let style = getComputedStyle(element, null)

    const className = "Class : " + element.className + "\n";
    const backgroundColor = "- Background color : " + style.backgroundColor + "\n";
    const color = "- Color : " + style.color + "\n";
    const height = " - Height : " + style.height + "\n";
    const width = " - Width : " + style.width + "\n";
    const display = " - Display : " + style.display + "\n";
    const fontFamily = " - Font Family : " + style.fontFamily + "\n";

    textAlert = className + backgroundColor + color + height + width + display + fontFamily;

    alert(textAlert);
}

element.addEventListener('click', function() {
    getInfosElement(element);
});
