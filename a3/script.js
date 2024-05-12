function generateRhombus() {
    const height = document.getElementById('height').value;
    const oddColor = document.getElementById('oddColor').value;
    const evenColor = document.getElementById('evenColor').value;
    const symbol = document.getElementById('symbol').value;

    const topLeft = generateTopLeft(height, oddColor, evenColor, symbol);
    const topRight = generateTopRight(height, oddColor, evenColor, symbol);
    const bottomLeft = generateBottomLeft(height, oddColor, evenColor, symbol);
    const bottomRight = generateBottomRight(height, oddColor, evenColor, symbol);

    document.getElementById('topLeft').textContent = topLeft;
    document.getElementById('topRight').textContent = topRight;
    document.getElementById('bottomLeft').textContent = bottomLeft;
    document.getElementById('bottomRight').textContent = bottomRight;
}

function generateTopLeft(height, oddColor, evenColor, symbol) {
    let result = '';
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += symbol.fontcolor(j % 2 === 0 ? evenColor : oddColor);
        }
        result += line + '\n';
    }
    return result;
}

function generateTopRight(height, oddColor, evenColor, symbol) {
    let result = '';
    for (let i = height; i >= 1; i--) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += symbol.fontcolor(j % 2 === 0 ? evenColor : oddColor);
        }
        result += line + '\n';
    }
    return result;
}

function generateBottomLeft(height, oddColor, evenColor, symbol) {
    let result = '';
    for (let i = height - 1; i >= 0; i--) {
        let line = '';
        for (let j = 1; j <= i + 1; j++) {
            line += symbol.fontcolor(j % 2 === 0 ? evenColor : oddColor);
        }
        result += line + '\n';
    }
    return result;
}

function generateBottomRight(height, oddColor, evenColor, symbol) {
    let result = '';
    for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += symbol.fontcolor(j % 2 === 0 ? evenColor : oddColor);
        }
        result += line + '\n';
    }
    return result;
}

String.prototype.fontcolor = function(color) {
    return `<span style="color: ${color};">${this}</span>`;
}
