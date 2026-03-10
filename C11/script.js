// Get query parameter for cell size
function getCellSize() {
    const params = new URLSearchParams(window.location.search);
    const size = parseInt(params.get('cell_size'));
    return (isNaN(size) || size <= 0) ? 50 : size;
}

const canvas = document.getElementById('mosaicCanvas');
const ctx = canvas.getContext('2d');
const imageInput = document.getElementById('imageInput');

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
        const cellSize = getCellSize();

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0); // draw original image

        const imgData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imgData.data;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let y = 0; y < img.height; y += cellSize) {
            for (let x = 0; x < img.width; x += cellSize) {
                let r=0, g=0, b=0, count=0;

                // Loop over pixels in the cell
                for (let cy = 0; cy < cellSize && y+cy < img.height; cy++) {
                    for (let cx = 0; cx < cellSize && x+cx < img.width; cx++) {
                        const index = ((y+cy) * img.width + (x+cx)) * 4;
                        r += data[index];
                        g += data[index+1];
                        b += data[index+2];
                        count++;
                    }
                }

                r = Math.round(r/count);
                g = Math.round(g/count);
                b = Math.round(b/count);

                // Fill cell with average color
                ctx.fillStyle = `rgb(${r},${g},${b})`;
                ctx.fillRect(x, y, cellSize, cellSize);
            }
        }
    }
});