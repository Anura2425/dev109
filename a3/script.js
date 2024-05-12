const form = document.getElementById('rhombus-form');
        const output = document.getElementById('rhombus-output');

        function generateRhombus(height, oddColor, evenColor, symbol) {
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

            output.innerHTML = `<pre>${generateRhombus(height, oddColor, evenColor, symbol)}</pre>`;
        });
