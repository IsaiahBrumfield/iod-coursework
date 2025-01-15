function changeColor(columnNumber) {
    var randomColor = '#' + Math.floor(Math.random()*16777215);

    columnNumber.style.backgroundColor = randomColor;
    HTMLHeadingElement.textContent = 'Changed Column' + columnNumber;
}