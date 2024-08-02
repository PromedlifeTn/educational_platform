const questions = [
    {
        question: "What does dates contain?",
        options: ["Sugars", "Fiber", "Vitamins", "All of the above"],
        answer: "All of the above",
        explanation: "Dates are considered a complete food as they contain all kinds of minerals beneficial to the body in addition to vitamins and plant nutrients.",
        Source: "https://p.dw.com/p/1HbUi",
        Image: "../../assets/31.png" 
    },
    {
        question: "Why do we eat dates?",
        options: ["To give us physical fitness", "To give us energy and vitality"],
        answer: "To give us energy and vitality",
        explanation: "Dates contain all the nutrients the body needs to boost its energy throughout the day. They provide energy, and the fiber in them helps stabilize blood sugar levels, helping the body avoid excessive sugar consumption (the energy source) in the body.",
        Source: "https://p.dw.com/p/1HbUi",
        Image: "../../assets/32.png" 
    },
    {
        question: "Which fruit vegetable is purple in color?",
        options: ["Eggplant", "Zucchini", "Peppers"],
        answer: "Eggplant",
        explanation: "Eggplant is an herbaceous plant with large purple fruits rich in beneficial compounds like zinc and potassium. The best way to consume eggplant for maximum benefit is to cook it and add salt and lemon.",
        Source: "https://bit.ly/45mOL9y",
        Image: "../../assets/33.png" 
    },
    {
        question: "Which part of Artichoke do we eat?",
        options: ["Fruits", "Roots", "Flowers"],
        answer: "Flowers",
        explanation: "The edible part of the artichoke is the flower bud, which is noticed to be swollen and fleshy, containing a good amount of vitamins A and B.",
        Source: "https://bit.ly/3LZYjAt",
        Image: "../../assets/34.png" 
    },
    {
        question: "Which fruit vegetable is eaten cooked?",
        options: ["Onion", "Zucchini", "Artichoke"],
        answer: "Zucchini",
        explanation: "Zucchini is one of the fruit vegetables cooked in various ways in the Middle East and worldwide. In addition to its delicious taste, zucchini is very beneficial for body health and well-being due to its richness in nutrients and antioxidant compounds.",
        Source: "https://bit.ly/3Fc566a",
        Image: "../../assets/35.png" 
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
        window.location.href = "end_game_GN_L3.html";
    }
}


loadQuestion(currentQuestionIndex);

