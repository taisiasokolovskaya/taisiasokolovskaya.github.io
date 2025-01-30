function startGame() {
    let character = document.getElementById('character');
    let chips = document.getElementById('chips');
    let cola = document.getElementById('cola');

    let positionX = window.innerWidth / 2;
    let positionY = window.innerHeight / 2;

    function moveCharacter(targetX, targetY, callback) {
        let interval = setInterval(() => {
            if (Math.abs(positionX - targetX) > 5) {
                positionX += positionX < targetX ? 5 : -5;
            }
            if (Math.abs(positionY - targetY) > 5) {
                positionY += positionY < targetY ? 5 : -5;
            }
            
            character.style.left = positionX + 'px';
            character.style.top = positionY + 'px';

            if (Math.abs(positionX - targetX) <= 5 && Math.abs(positionY - targetY) <= 5) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 50);
    }

    moveCharacter(chips.offsetLeft, chips.offsetTop, () => {
        setTimeout(() => moveCharacter(cola.offsetLeft, cola.offsetTop), 500);
    });
}
