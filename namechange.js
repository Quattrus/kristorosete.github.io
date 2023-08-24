const welcome = [
    "Hi, my name is Christo",
    "Welcome to my Portfolio",
    "Exploring the World of Games and Art",
];

let currentWelcomeIndex = 1;

const welcomeElement = document.getElementById('welcome');

function updateWelcome(){
    welcomeElement.style.opacity = 0; //Start fading out
    setTimeout(()=> {
        welcomeElement.textContent = welcome[currentWelcomeIndex];
        welcomeElement.style.opacity = 1; //Fade in
        currentWelcomeIndex = (currentWelcomeIndex + 1) % welcome.length;
    }, 1000);
}

setInterval(updateWelcome, 5000);