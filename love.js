const yesButton = document.getElementById("YesButton")
const noButton = document.getElementById("nobutton")
const heading = document.getElementById("head")
const image = document.getElementById("image")

function Movebutton(){
    const newX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const newY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
}
yesButton.addEventListener('click', () => {
    heading.textContent = "Hehe, I knew it!😊";
    image.src = "./image/milk-and-mocha-hug.gif";
    yesButton.style.display = "none";
    noButton.style.display = "none";// Change image source if desired
  });
  noButton.addEventListener('click', () => {
    heading.textContent = "Sorry that you didn't like the image!";
    image.src = "https://via.placeholder.com/150"; // Reset image source if desired
  });