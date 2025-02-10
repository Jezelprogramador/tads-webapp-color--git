document.addEventListener('DOMContentLoaded', function() {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');

    function updateColor() {
        const red = parseInt(redRange.value);
        const green = parseInt(greenRange.value);
        const blue = parseInt(blueRange.value);
        const rgb = `rgb(${red}, ${green}, ${blue})`;
        const hex = `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase()}`;

        colorBox.style.backgroundColor = rgb;
        hexCode.textContent = hex;
        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        redRange.style.background = `linear-gradient(to right, rgb(0,0,0), rgb(${red},0,0))`;
        greenRange.style.background = `linear-gradient(to right, rgb(0,0,0), rgb(0,${green},0))`;
        blueRange.style.background = `linear-gradient(to right, rgb(0,0,0), rgb(0,0,${blue}))`;
    }

    function updateRangeFromInput() {
        redRange.value = Math.max(0, Math.min(255, redInput.value));
        greenRange.value = Math.max(0, Math.min(255, greenInput.value));
        blueRange.value = Math.max(0, Math.min(255, blueInput.value));
        updateColor();
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    redInput.addEventListener('input', updateRangeFromInput);
    greenInput.addEventListener('input', updateRangeFromInput);
    blueInput.addEventListener('input', updateRangeFromInput);

    updateColor();
});