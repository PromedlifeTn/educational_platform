
const questions = [
    {
        question: "Is dates beneficial for health?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Dates are one of the most beneficial foods for health, as they are a complete food containing all kinds of minerals, vitamins, and plant compounds essential for the body.",
        Source: "https://p.dw.com/p/1HbUi",
        Image: "../../assets/21.png" 
    },
    {
        question: "When do we eat dates?",
        options: ["In the morning", "In the evening"],
        answer: "In the morning",
        explanation: "Dates are rich in simple carbohydrates and natural sugars, providing quick energy. They can be beneficial in supplying the body with the energy it needs at the start of the day.",
        Source: "https://p.dw.com/p/1HbUi",
        Image: "../../assets/22.png" 
    },
    {
        question: "Which of these fruits contains more water?",
        options: ["Dates", "Tomatoes", "Peppers"],
        answer: "Tomatoes",
        explanation: "Tomatoes contain 94.5 grams of water per 100 grams, surpassing watermelon, which contains 92% water.",
        Source: "https://bit.ly/45tiVIl",
        Image: "../../assets/23.png" 
    },
    {
        question: "Is it better to eat tomatoes",
        options: ["Cooked", "Fresh"],
        answer: "Cooked",
        explanation: "Nutrition experts often recommend consuming vegetables fresh and uncooked except for tomatoes, which differ in this regard. Cooked tomatoes can contribute more to disease resistance and reduce the risk of heart diseases and cancer.",
        Source: "https://bit.ly/46IQerO",
        Image: "../../assets/24.png" 
    },
    {
        question: "Is it better to eat carrots",
        options: ["Cooked", "Fresh", "Both answers"],
        answer: "Both answers",
        explanation: "Carrots can be eaten both fresh and cooked. If carrots are not very fresh, it's better to cut them into slices before cooking. Raw carrots are easier and faster to digest than cooked carrots contrary to what many people believe.",
        Source: "https://bit.ly/3Qfjxg4",
        Image: "../../assets/25.png" 
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
        <p>${selectedOption === currentQuestion.answer ? 'صحيح!' : 'خطأ!'}</p>
        <p>الجواب الصحيح هو: ${currentQuestion.answer}</p>
        <p>تفسير : ${currentQuestion.explanation}</p>
        <p>المصدر: <a href="${currentQuestion.Source}" target="_blank">اضغط هنا للمزيد من المعلومات</a></p>
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
        window.location.href = "end_game_GN_L2.html";
    }
}


loadQuestion(currentQuestionIndex);

