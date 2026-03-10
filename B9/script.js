// Select existing elements
const container = document.querySelector('div');
const afterImage = container.querySelectorAll('img')[1];
const splitter = container.querySelector('input');

let isDragging = false;

// Start dragging when mousedown on splitter
splitter.addEventListener('mousedown', () => {
    isDragging = true;
});

// Stop dragging when mouse is released
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Update splitter position and after image clip while dragging
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;

    // Clamp x between 0 and container width
    x = Math.max(0, Math.min(x, rect.width));

    // Move splitter
    splitter.style.left = x + 'px';
    splitter.style.transform = 'translateX(-50%)';

    // Update clip-path of after image
    const percentage = (x / rect.width) * 100;
    afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
});