const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

window.addEventListener('resize', updateCanvasSize);
updateCanvasSize();

/*************************************************************
 * canvas
 */
function updateCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.lineWidth = 3;

  //Pac-Man
  for (let i = 0; i < 10; i++) {
    context.beginPath();

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    context.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
    context.strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;

    const radius = 100;
    const x = radius + Math.random() * (canvas.width - 2 * radius);
    const y = radius + Math.random() * (canvas.height - 2 * radius);
    context.moveTo(x, y);
    context.arc(x, y, 100, 0.1 * Math.PI, 1.9 * Math.PI);
    context.lineTo(x, y);

    context.fill();
    context.stroke();
  }

  //Lines
  for (let i = 0; i < 6; i++) {
    context.beginPath();

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    context.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    context.lineWidth = 3;

    const x1 = Math.random() * canvas.width;
    const y1 = Math.random() * canvas.height;

    const x2 = Math.random() * canvas.width;
    const y2 = Math.random() * canvas.height;

    context.moveTo(x1, y1);
    context.lineTo(x2, y2);

    context.stroke();
  }

  //Squares
  for (let i = 0; i < 6; i++) {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const color = `rgb(${r}, ${g}, ${b})`;

    context.fillStyle = color;
    context.strokeStyle = color;
    context.lineWidth = 3;

    const width = 50 + Math.random() * 100;
    const height = 50 + Math.random() * 100;

    const x = Math.random() * (canvas.width - width);
    const y = Math.random() * (canvas.height - height);

    context.fillRect(x, y, width, height);
    context.strokeRect(x, y, width, height);
  }
}