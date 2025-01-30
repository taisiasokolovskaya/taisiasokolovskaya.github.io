function askBoy (){
    var girl = document.getElementById("girl");
    chips.style.background= "url('../images/market.jpg')";
    chips.style.animation = "walkSpriteAnimation 2s steps(16) forwards";
    chips.style.left = '400px'; 
    chips.style.top = '300px';

    var frameIndex = 1;
    var walkAnimationInterval = setInterval(function() {
        frameIndex++;
        if (frameIndex > 20) {
            clearInterval(walkAnimationInterval); 
            girl.style.background = "url('../images/market.jpg')"; 
            girl.style.animation = "sprite-animation 2s steps(16) infinite"; 
        } else {
            girl.style.background = "url('../images/market.jpg')"; 
        }
    }, 100); 
    var moveRightDiv = document.querySelector('.moveRight');
    moveRightDiv.style.display = 'none';
   

    var moveRight2Div = document.querySelectorAll('.moveRight2');
    moveRight2Div.forEach(function(element) {
        element.classList.add('startAnimation');
    });

    setTimeout(function() {
        var moveLeftDiv = document.querySelector('.moveLeft');
        moveLeftDiv.classList.add('startMoveLeftAnimation');
    }, 4000); // Delay matches the duration of moveRight2 animation (4 seconds)
    setTimeout(function() {
        var endingButton = document.querySelectorAll('.ending');
        endingButton.forEach(function(element) {
            element.classList.add('endingAppear');
        });
    }, 6000);
}
function nextPage (){
    var girl = document.getElementById("girl");
    chips.style.background= "url('../images/market.jpg')";
    chips.style.animation = "walkSpriteAnimation 4s steps(16) forwards";
    chips.style.left = '1500px'; 
    chips.style.top = '300px';

    var divElements = document.querySelectorAll('.moveRight2, .moveLeft');
    divElements.forEach(function(element) {
        element.style.opacity = 0;
    });
    var audio = document.getElementById('buttonSound1');
    audio.play();
    setTimeout(function() {
        window.location.href = '../dorothy/courge2.html';
    }, 2000);

}
    
