
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
setTimeout(function () {
 dorothy.classList.add('flip-right');
 //dorothy.classList.remove('flip-left');   
}, 0);

let cokeClicked = false;
let chipsClicked = false;

// Function to move coke
function moveCoke() {
    dorothy.classList.remove('flip-right');
    dorothy.classList.remove('flip-left');
    dorothy.classList.add('flip-right');
    dorothy.style.left = '1600px';  // New left position
    dorothy.style.top = '900px';   // New top position
    console.log("Moving Coke!");
    cokeClicked = true;
    checkBothClicked();
    setTimeout(function() {
    document.getElementById("cola").style.display = "none";
    }, 4000);
}

// Function to move chips
function moveChips() {
    dorothy.classList.remove('flip-right');
    dorothy.classList.remove('flip-left');
    dorothy.classList.add('flip-left');

    dorothy.style.left = '100px';  // New left position
    dorothy.style.top = '900px';   // New top position
    console.log("Moving Chips!");
    chipsClicked = true;
    checkBothClicked();
    setTimeout(function() {
    document.getElementById("chips").style.display = "none";
    }, 4000);
}

// Function to check if both divs have been clicked
function checkBothClicked() {
    if (cokeClicked && chipsClicked) {
        // If both have been clicked, set a timeout to redirect after 5 seconds
        setTimeout(function() {
            window.location.href = "https://google.com";
        }, 4000); // 5000 ms = 5 seconds
    }
}

// Add event listeners to the divs
document.getElementById("cola").addEventListener("click", moveCoke);
document.getElementById("chips").addEventListener("click", moveChips);
   
