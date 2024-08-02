const questions = [
    {
        question: "What role did Mrs. Thompson say onions play in keeping our bodies healthy?",
        options: ["They are like knights protecting the castle", "They provide only flavor", "They are a source of empty calories"],
        answer: "They are like knights protecting the castle",
        explanation: "Mrs. Thompson compared onions to knights protecting the castle, explaining that onions help fight off germs and keep our bodies strong."
    },
    {
        question: "What nutritional benefit did Mrs. Thompson highlight about onions for the heart and mind?",
        options: ["They make the heart strong and mind sharp", "They have no impact on heart and mind", "They only add sweetness to food"],
        answer: "They make the heart strong and mind sharp",
        explanation: "Onions are described as having magical powers to make our hearts strong and our minds sharp due to their nutritional properties."
    },
    {
        question: "What did Mrs. Thompson use to make the onions more appealing to the children?",
        options: ["Crispy batter and caramelization", "Just raw onions", "A lot of sugar"],
        answer: "Crispy batter and caramelization",
        explanation: "Mrs. Thompson prepared the onions by dipping them in crispy batter and caramelizing them, which made them more appealing and delicious to the children."
    },
    {
        question: "How did the children react to the onion snacks prepared by Mrs. Thompson?",
        options: ["They were delighted and found them delicious", "They were indifferent", "They disliked them even more"],
        answer: "They were delighted and found them delicious",
        explanation: "The children were delighted with the onion snacks and couldn't believe how delicious onions could be when prepared creatively."
    },
    {
        question: "What was the final outcome for the children of Veggieland regarding their view on onions?",
        options: ["They embraced onions as a nutritious addition", "They continued to avoid onions", "They preferred sugary snacks over onions"],
        answer: "They embraced onions as a nutritious addition",
        explanation: "Thanks to Mrs. Thompson's culinary efforts, the children of Veggieland began to appreciate onions as a delicious and nutritious part of their meals."
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
        window.location.href = "end_game5.html";
    }
}


loadQuestion(currentQuestionIndex);
