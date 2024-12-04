document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("tree");

    function drawSquare(x, y, size, angle, depth) {
        if (depth === 0) return;

        const square = document.createElement("div");
        square.className = "square";
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.left = `${x}px`;
        square.style.bottom = `${y}px`;
        square.style.transform = `rotate(${angle}deg)`;
        container.appendChild(square);

        const newSize = size * Math.sqrt(2) / 2;
        const newDepth = depth - 1;

        const leftX = x - newSize * Math.sin(angle * Math.PI / 180);
        const leftY = y + size + newSize * Math.cos(angle * Math.PI / 180);
        const rightX = x + size * Math.cos(angle * Math.PI / 180);
        const rightY = y + size * Math.sin(angle * Math.PI / 180);

        drawSquare(leftX, leftY, newSize, angle - 45, newDepth);
        drawSquare(rightX, rightY, newSize, angle + 45, newDepth);
    }

    drawSquare(window.innerWidth / 2 - 50, 0, 100, 0, 12);
});
