const questions = [
    {
        question: "Why was Timmy absent from school for three days?",
        options: ["He was on vacation", "He was sick", "He moved to another school"],
        answer: "He was sick",
        explanation: "Timmy was absent from school for three days because he was sick and had to stay home due to stomach pain.",
        
    },
    {
        question: "What caused Timmy's illness?",
        options: ["Eating too many unhealthy snacks", "Not sleeping enough", "Playing too much"],
        answer: "Eating too many unhealthy snacks",
        explanation: "Timmy's illness was caused by eating too many snacks that were not good for him.",
       
    },
    {
        question: "What did Mrs. Parker compare our bodies to?",
        options: ["Castles", "Machines", "Gardens"],
        answer: "Castles",
        explanation: "Mrs. Parker compared our bodies to strong castles guarded by brave soldiers, representing our organs.",
        
    },
    {
        question: "What kind of snacks did Mrs. Parker recommend?",
        options: ["Commercial snacks", "Fruits", "Cookies"],
        answer: "Fruits",
        explanation: "Mrs. Parker recommended fruits as healthy snacks that are delicious and good for us.",
        
    },

    {
        question: "What effect did eating fruits have on the children?",
        options: ["They disliked them", "They felt stronger and healthier", "They became tired"],
        answer: "They felt stronger and healthier",
        explanation: "Eating fruits made the children feel stronger and healthier, giving their bodies the strength to stay healthy.",
        
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
        window.location.href = "end_game2.html";
    }
}


loadQuestion(currentQuestionIndex);
