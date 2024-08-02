// Step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

let runTimeOut;

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
};




// Function to initialize the SpeechSynthesis API
function initSpeechSynthesis() {
    const synth = window.speechSynthesis;

    // Function to speak the text
    function speakText(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // Set the language to English (US)
        synth.speak(utterance);
    }

    // Get all elements with class "speakButton"
    const speakButtons = document.querySelectorAll('.speakButton');

    // Add click event listener to each button
    speakButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the text content from the nearest parent element with class "content"
            const text = button.closest('.content').querySelector('.des').textContent;
            speakText(text); // Call the speakText function with the text content
        });
    });
}

// Call the initSpeechSynthesis function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initSpeechSynthesis);


//cursor
const cursor = document.querySelector(".cursor");


//follow
document.addEventListener("mousemove",(e) =>
{
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
    //effect on mouse stopped
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000)
}
);

document.addEventListener("mouseout",()=>{
    cursor.style.display = "none";
})
