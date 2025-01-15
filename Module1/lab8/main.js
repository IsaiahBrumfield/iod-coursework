document.getElementById('roll-button').addEventListener('click', function() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice-result').textContent = diceRoll;
});