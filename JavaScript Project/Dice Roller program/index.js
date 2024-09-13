function rollDice() {
    const numOfDice = document.getElementById("numOfDice").ariaValueMax;
    const diceResult = documnet.getElementById("diceResult");
    const diceImage = documnet.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push('<img src="dice_images/${value}.png">');
    }

    diceResult.textContent = 'dice: ${values.join(', ')}';
    diceImage.textContent = images.join('');
}