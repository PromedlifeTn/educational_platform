const questions = [
    {
        question: "What kind of food did the people of Green Leaf Village grow in their gardens?",
        options: ["Vegetables and fruits", "Sweets", "Processed foods"],
        answer: "Vegetables and fruits",
        explanation: "The people of Green Leaf Village grew vegetables and fruits in their gardens, which helped them maintain good health and boundless energy.",
    }
    ,
    {
        question: "What were the negative effects of consuming too many processed sweets?",
        options: ["High energy", "Increased illness and coughing", "Increased strength and activity"],
        answer: "Increased illness and coughing",
        explanation: "The children consumed too many processed sweets, which led to increased illness and coughing, and a decline in the village's vitality.",
        
    },
    {
        question: "What are the health benefits of the natural sugars found in fruits?",
        options: ["Nourishing the body and making it stronger and more active", "Rapid weight gain", "Tooth decay"],
        answer: "Nourishing the body and making it stronger and more active",
        explanation: "The natural sugars found in fruits nourish the children's bodies and make them stronger and more active compared to processed sugars.",
        
    },
    {
        question: "How did the mothers contribute to restoring the children's health in Green Leaf Village?",
        options: ["By giving them more sweets", "By preparing delicious dishes from fresh fruits and vegetables", "By giving them processed foods"],
        answer: "By preparing delicious dishes from fresh fruits and vegetables",
        explanation: "The mothers prepared delicious dishes from fresh fruits and vegetables, like strawberry cakes, which helped restore the children's health.",
        
    },

    {
        question: "What changes occurred in the children after returning to a healthy diet?",
        options: ["Decrease in energy levels", "Improved health and increased energy levels", "Increased illness"],
        answer: "Improved health and increased energy levels",
        explanation: "After returning to a healthy diet, the children's health improved, their energy levels increased, and laughter once again filled the air.",
        
    },

];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(index) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestion = questions[index];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, i) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(option);
        optionsElement.appendChild(li);
    });

    const nextButton = document.getElementById('next-button');
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = 'Finish';
    } else {
        nextButton.textContent = 'Next';
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const popupContainer = document.getElementById('popup-container');
    const popupContent = document.getElementById('popup-content');
    const popupImage = document.getElementById('popup-Image');

    if (selectedOption === currentQuestion.answer) {
        score++; // Increase the score for a correct answer
    } 

    // Populate the popup content with the correct answer and explanation
    popupContent.innerHTML = `
        <p>${selectedOption === currentQuestion.answer ? 'Correct!' : 'False!'}</p>
        <p>الجواب الصحيح هو: ${currentQuestion.answer}</p>
        <p>تفسير : ${currentQuestion.explanation}</p>
        <p>المصدر: <a href="${currentQuestion.Source}" target="_blank">Click here for more informations!</a></p>
    `;
    
    popupImage.innerHTML = `
        <img src="${currentQuestion.Image}" alt="Image Description">
    `;

    // Show the popup
    popupContainer.style.display = 'block';

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        // The last question has been completed
        loadQuestion(currentQuestionIndex - 1); // Display the last question again
        nextButton.textContent = 'Finish';
    }
}

function closePopup() {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}/${questions.length}`;

    if (currentQuestionIndex === questions.length) {
        // Redirect to home page
        localStorage.setItem('score', score);
        window.location.href = "end_game1.html";
    }
}


loadQuestion(currentQuestionIndex);


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


