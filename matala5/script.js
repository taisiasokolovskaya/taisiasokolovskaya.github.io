document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => alert('Link clicked!'));
});
// Example: Change text color on button click
function changeTextColor() {
  document.querySelector('h1').style.color = 'red';
}

// Add a button to the HTML
const button = document.createElement('button');
button.innerText = 'Change Title Color';
button.onclick = changeTextColor;
document.body.appendChild(button);
