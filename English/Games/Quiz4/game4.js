const questions = [
    {
        question: "What ingredient did Grandma use instead of sugar to make the treats?",
        options: ["Honey", "Maple syrup", "Dates"],
        answer: "Dates",
        explanation: "Grandma used dates instead of sugar because they are a natural sweetener that is also packed with nutrients, making the treats healthier."
    },
    {
        question: "Which nutrient found in dates helps with digestion?",
        options: ["Fiber", "Protein", "Calcium"],
        answer: "Fiber",
        explanation: "Dates are high in fiber, which helps keep the digestive system smooth and healthy."
    },
    {
        question: "What are some of the key vitamins and minerals found in dates?",
        options: ["Vitamin C and Calcium", "Potassium and Magnesium", "Vitamin D and Iron"],
        answer: "Potassium and Magnesium",
        explanation: "Dates are loaded with important nutrients such as potassium, magnesium, and vitamin B6, which help keep our bodies strong and healthy."
    },
    {
        question: "How did Lily and Ben feel about the cookies made with dates?",
        options: ["Disappointed", "Excited", "Indifferent"],
        answer: "Excited",
        explanation: "Lily and Ben were excited and delighted to taste the cookies made with dates, finding them delicious and sweet."
    },
    {
        question: "What is one benefit of using dates in baking as described by Grandma?",
        options: ["Dates make the treats less sweet", "Dates add artificial flavors", "Dates make the treats healthier"],
        answer: "Dates make the treats healthier",
        explanation: "Grandma explained that dates not only add sweetness but also make the treats healthier due to their natural nutrients and lack of refined sugar."
    }
    
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
        window.location.href = "end_game4.html";
    }
}


loadQuestion(currentQuestionIndex);
