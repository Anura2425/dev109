function drawRhombus() {
     const height = document.getElementById('height').value;
     const oddColor = document.getElementById('odd-color').value;
     const evenColor = document.getElementById('even-color').value;
     const symbol = document.getElementById('symbol').value;

     let rhombus = '';
     for (let i = 0; i < height; i++) {
       const line = symbol.repeat(i + 1);
       rhombus += `<span style="color:${i % 2 === 0 ? evenColor : oddColor}">${line}</span><br>`;
     }

     for (let i = height - 2; i >= 0; i--) {
       const line = symbol.repeat(i + 1);
       rhombus += `<span style="color:${i % 2 === 0 ? evenColor : oddColor}">${line}</span><br>`;
     }

     document.getElementById('rhombus').innerHTML = rhombus;
   }
