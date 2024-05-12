function generateRhombus(height, oddColor, evenColor, symbol) {
  let rhombus = '';
  const maxWidth = height * 2 - 1;

  // Top part
  for (let i = 0; i < height; i++) {
    let line = '';
    for (let j = 0; j < maxWidth; j++) {
      const color = (i + j) % 2 === 0 ? evenColor : oddColor;
      const char = j >= height - i - 1 && j < height + i ? symbol : ' ';
      line += `<span style="color: ${color};">${char}</span>`;
    }
    rhombus += line + '<br>';
  }

  // Bottom part
  for (let i = height - 2; i >= 0; i--) {
    let line = '';
    for (let j = 0; j < maxWidth; j++) {
      const color = (i + j) % 2 === 0 ? evenColor : oddColor;
      const char = j >= height - i - 1 && j < height + i ? symbol : ' ';
      line += `<span style="color: ${color};">${char}</span>`;
    }
    rhombus += line + '<br>';
  }

  return rhombus;
}
