const questions = [
    {
        question: "What special compounds found in dates help protect the body from harmful free radicals?",
        options: ["Vitamins", "Minerals", "Polyphenols"],
        answer: "Polyphenols",
        explanation: "Dates contain polyphenols, which are natural compounds with antioxidant activity that help protect the body from harmful free radicals."
    },
    {
        question: "Which type of date is described as having a rich flavor and chewy texture?",
        options: ["Alig dates", "Kenticha dates", "Deglet el Nour dates"],
        answer: "Alig dates",
        explanation: "Alig dates are known for their rich flavor and chewy texture, as mentioned in the story."
    },
    {
        question: "What is the main nutritional benefit of polyphenols found in dates?",
        options: ["Improving digestion", "Fighting free radicals", "Enhancing flavor"],
        answer: "Fighting free radicals",
        explanation: "Polyphenols have antioxidant activity, which helps fight free radicals and protect the body from damage."
    },
    {
        question: "Which variety of dates is considered the 'queen of dates' and is known for its exquisite taste and delicate texture?",
        options: ["Kenticha dates", "Deglet el Nour dates", "Alig dates"],
        answer: "Deglet el Nour dates",
        explanation: "Deglet el Nour dates are renowned for their exquisite taste and delicate texture, as highlighted in the story."
    },
    {
        question: "How did Baba Ahmed describe the different varieties of dates to Sara and Adam?",
        options: ["Each variety has unique flavors and uses", "All dates are the same", "Only some dates are healthy"],
        answer: "Each variety has unique flavors and uses",
        explanation: "Baba Ahmed explained that each variety of dates has its own special qualities and characteristics, providing a variety of flavors and uses."
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
        window.location.href = "end_game3.html";
    }
}


loadQuestion(currentQuestionIndex);
