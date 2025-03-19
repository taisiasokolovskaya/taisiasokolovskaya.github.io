
    let character = document.getElementById('character');
    let chips = document.getElementById('chips');
    let cola = document.getElementById('cola');

    let positionX = window.innerWidth / 2;
    let positionY = window.innerHeight / 2;


const dorothy = document.querySelector('.character');

// Function to move Dorothy to a new position
function moveDorothy() {
    //alert("dorothy1");
    dorothy.style.left = '1600px';  // New left position
    dorothy.style.top = '900px';   // New top position
    //alert("dorothy2");
}

// Optional: Trigger the movement after a delay (e.g., 2 seconds)
setTimeout(moveDorothy, 2000);
   
