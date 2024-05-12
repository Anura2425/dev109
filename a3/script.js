const form = document.getElementById('rhombus-form');
        const output = document.getElementById('rhombus-output');

function createRightRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
downRight(pHeight, pColorEven, pColorOdd, pSymbol);

}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p>";
for(j=0;j<=i;j++){

//Is the position even or odd so we change the color
if (j%2)
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("downRight").innerHTML = rLine;
}

        function createLeftRhombus(height, oddColor, evenColor, symbol) {
            let rhombus = '';
            const maxWidth = height * 2 - 1;

            for (let i = 0; i < height; i++) {
                let line = '';
                const spaces = maxWidth - 2 * i;
                const symbols = i + 1;

                for (let j = 0; j < spaces / 2; j++) {
                    line += ' ';
                }

                for (let j = 0; j < symbols; j++) {
                    line += `<span style="color: ${(j + i) % 2 === 0 ? evenColor : oddColor};">${symbol}</span>`;
                }

                for (let j = 0; j < spaces / 2; j++) {
                    line += ' ';
                }

                rhombus += line + '\n';
            }

            for (let i = height - 2; i >= 0; i--) {
                let line = '';
                const spaces = maxWidth - 2 * i;
                const symbols = i + 1;

                for (let j = 0; j < spaces / 2; j++) {
                    line += ' ';
                }

                for (let j = 0; j < symbols; j++) {
                    line += `<span style="color: ${(j + i) % 2 === 0 ? evenColor : oddColor};">${symbol}</span>`;
                }

                for (let j = 0; j < spaces / 2; j++) {
                    line += ' ';
                }

                rhombus += line + '\n';
            }

            return rhombus;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const height = parseInt(form.elements.height.value);
            const oddColor = form.elements['odd-color'].value;
            const evenColor = form.elements['even-color'].value;
            const symbol = form.elements.symbol.value;

            output.innerHTML = `<pre>${createLeftRhombus(height, oddColor, evenColor, symbol)}</pre>`;
        });
