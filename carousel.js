const projects = [
//Project data goes here
{
    videoSrc: "https://www.youtube.com/embed/eAtGzF9ZioI",
    title: "First Person Game for Unity Pathways Course",
    description: "A first person game that I made for the Unity Pathways Course.",
    completion: "Year Started 2022 | Year Finished 2022",

},
{
    videoSrc: "https://www.youtube.com/embed/IkX5INHEugM",
    title: "Prototype True First Person",
    description: "A prototype true first person game that I was exploring in Unity.",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc: "https://www.youtube.com/embed/6AG4WWr6zW8",
    title: "A WIP game that I am working on in Godot Engine",
    description: "A standard pixel platformer where I try to learn 2D game programmming.",
    completion : "Year Started 2022 | Year Finished TBD",
},
{
    videoSrc: "https://www.youtube.com/embed/3nXhtWLgAuM",
    title: "A simple experiment on pathfinding using Unity.",
    description: "I tried learning pathfinding and basic AI programmming using Unity.",
    completion: "Year Started 2022 | Year Finished 2022",
},

{
    videoSrc:"https://www.youtube.com/embed/g98_AkA7zOc",
    title: "A Simple game made for the Unity Pathways Course",
    description: "A simple game where the course challenged us to 'gamify' a box and couple of balls.",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc:"https://www.youtube.com/embed/eTORTvLFFOk",
    title: "Droppy Egg",
    description:"A hyper-casual game that I made using Unity. It uses the accelerometer for controls.",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc:"https://www.youtube.com/embed/Rwnq7CHJBOc",
    title: "Flappy Bird for CS50G",
    description: "A flappy bird clone written in Lua made for the Harvard CS50G course.",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc:"https://www.youtube.com/embed/7CTXXQ2XSmY",
    title:"Unity Pathway Coursework",
    description:"An exercise in VFX for the Unity Pathway course",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc:"https://www.youtube.com/embed/PTFoye20WSc",
    title: "A simple game made in Unity",
    description: "A simple game that I made for fun.",
    completion: "Year Started 2022 | Year Finished 2022",
}
];

let currentIndex = 0;

const container = document.querySelector('.carousel-container');

function updateCarousel() {
    container.innerHTML = `
        <div class="project-title">
            <iframe src="${projects[currentIndex].videoSrc}" width="100%" height="400" frameborder="0" allowfullscreen class="project-video"></iframe>
            <p>${projects[currentIndex].title}</p>
            <p>${projects[currentIndex].description}</p>
            <p>${projects[currentIndex].completion}</p>
        </div>
    `;
}


function goToNextProject(){
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
}

function goToPrevProject(){
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel();
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', goToPrevProject);
nextButton.addEventListener('click', goToNextProject);

//Initialize carousel
updateCarousel();