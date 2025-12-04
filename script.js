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

  for (let i = 0; i < 10; i++) {
  context.beginPath();

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  context.fillStyle = 'rgba({r}, {g}, {b}, 0.5)';
  context.strokeStyle = 'rgba({r},{g}, {b}, 1)';

  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  context.moveTo(x, y);
  context.arc(x, y, 100, 0.1 * Math.PI, 1.9 * Math.PI);
  context.lineTo(x, y);
  
  context.fill();
  context.stroke();
  }
}