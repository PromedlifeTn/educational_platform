const questions = [
    {
        question: "What does Artichoke contain?",
        options: ["Fats", "Vitamins"],
        answer: "Vitamins",
        explanation: "Artichoke is rich in antioxidants and vitamins. It is free of fats and protects heart health.",
        Source: "https://bit.ly/3rKyzRR",
        Image: "../../assets/41.png" 
    },
    {
        question: "What is Saffron?",
        options: ["Herbaceous plant", "Type of fruit", "Type of vegetable"],
        answer: "Herbaceous plant",
        explanation: "Saffron is a type of flowering plant belonging to the Crocus genus in the Iridaceae family. Cultivated saffron is known for the spices extracted from its flowers.",
        Source: "https://bit.ly/46MHrW0",
        Image: "../../assets/42.png" 
    },
    {
        question: "What is the water content in dates?",
        options: ["Less than 10%", "Around 20%", "Around 50%", "More than 70%"],
        answer: "Around 20%",
        explanation: "In every 100 grams of dates, there is approximately 20.53 grams of water.",
        Source: "https://bit.ly/3rOrks0",
        Image: "../../assets/43.png" 
    },
    {
        question: "Which part of Carrot do we eat?",
        options: ["Fruits", "Leaves", "Roots"],
        answer: "Roots",
        explanation: "Carrots belong to root vegetables and are one of the most distinctive and nutrient-rich types that offer many health benefits to the body.",
        Source: "https://bit.ly/3FdQaof",
        Image: "../../assets/44.png" 
    },
    {
        question: "What is the component responsible for the smell of onions?",
        options: ["Sulfur compounds", "Fats", "Fibers"],
        answer: "Sulfur compounds",
        explanation: "Propyl allyl disulfide is an organic compound found in onions and garlic, it is a pale yellow liquid with a strong odor that evaporates easily and causes eye irritation.",
        Source: "https://bit.ly/3LTWUeP",
        Image: "../../assets/45.png" 
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
        window.location.href = "end_game_GN_L4.html";
    }
}


loadQuestion(currentQuestionIndex);

