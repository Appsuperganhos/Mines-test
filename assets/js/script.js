function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateMinasNumber() {
    const minasNumber = getRandomNumber(1, 24);
    document.getElementById('minas-number').textContent = minasNumber;
}
