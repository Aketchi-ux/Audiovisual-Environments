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

  context.fillStyle = 'rgba(255, 0, 0, 0.5)';
  context.strokeStyle = "red";
  context.lineWidth = 3;

  context.beginPath();
  context.moveTo(200,300);
  context.arc(200, 300, 100, 0.1 * Math.PI, 1.9 * Math.PI);
  context.lineTo(200, 300);

  context.fill();
  context.stroke();
}