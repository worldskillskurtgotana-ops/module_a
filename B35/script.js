const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');
const generateBtn = document.getElementById('generate');
const depthInput = document.getElementById('depth');

function drawTriangle(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size / 2, y + size * Math.sqrt(3)/2);
    ctx.lineTo(x - size / 2, y + size * Math.sqrt(3)/2);
    ctx.closePath();
    ctx.fill();
}

function sierpinski(x, y, size, depth) {
    if (depth === 0) {
        drawTriangle(x, y, size);
    } else {
        const newSize = size / 2;
        // Top triangle
        sierpinski(x, y, newSize, depth - 1);
        // Bottom-left
        sierpinski(x - newSize/2, y + newSize * Math.sqrt(3)/2, newSize, depth - 1);
        // Bottom-right
        sierpinski(x + newSize/2, y + newSize * Math.sqrt(3)/2, newSize, depth - 1);
    }
}

generateBtn.addEventListener('click', () => {
    const depth = parseInt(depthInput.value);
    if (isNaN(depth) || depth < 0 || depth > 7) {
        alert("Enter a number between 0 and 7");
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    sierpinski(canvas.width/2, 20, canvas.width - 40, depth);
});