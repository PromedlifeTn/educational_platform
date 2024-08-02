const questions = [
    {
        question: "What does Artichoke help with?",
        options: ["Preventing cancer like liver cancer", "Treating heart and cardiovascular diseases", "Both"],
        answer: "Both",
        explanation: "Artichoke is packed with plant nutrients with antioxidant benefits that help with everything from cancer prevention to boosting the immune system. Artichoke also fights heart and cardiovascular diseases, as people with high cholesterol levels are more prone to heart diseases, heart attacks, or strokes.",
        Source: "https://bit.ly/3tm8atS",
        Image: "../../assets/51.png" 
    },
    {
        question: "What is the percentage of sugars in dates?",
        options: ["40%-50%", "50%-60%", "60%-70%", "70%-80%"],
        answer: "70%-80%",
        explanation: "The sugar content in dates is over 70-78% of the fruit's components. These sugars are characterized by their rapid absorption, direct transfer to the blood, digestion, and burning.",
        Source: "https://ar.wikipedia.org/wiki/%D8%AA%D9%85%D8%B1",
        Image: "../../assets/52.png" 
    },
    {
        question: "How does Carrot help maintain eye health?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D"],
        answer: "Vitamin A",
        explanation: "The benefits of carrots for the eyes are primarily due to the essential nutrients they contain for eye health and vision strength, most notably Vitamin A and carotenoids, which are plant compounds that mostly convert to Vitamin A inside the body. They also have antioxidant properties.",
        Source: "https://bit.ly/3Qh3KOc",
        Image: "../../assets/53.png" 
    },
    {
        question: "From which part is the active substance of saffron extracted?",
        options: ["Flowers", "Leaves", "Seeds"],
        answer: "Flowers",
        explanation: "The stigmas of saffron flowers contain an oily volatile oil with a fragrant aroma and colorful substances. This substance has an orange-red color, a penetrating scent, and a distinct taste, mainly consisting of crocins (the primary chemical component responsible for saffron's color). Crocins have been proven to be effective antioxidants and also have anticancer effects.",
        Source: "https://bit.ly/45yM6tj",
        Image: "../../assets/54.png" 
    },
    {
        question: "What is the antioxidant and anti-inflammatory substance found in onions?",
        options: ["Minerals", "Flavonoids", "Fibers"],
        answer: "Flavonoids",
        explanation: "Onions contain compounds that are anti-inflammatory, anti-cholesterol, anti-cancer, and antioxidant, such as quercetin, which is a type of flavonoid.",
        Source: "https://bit.ly/3Q9Xt6F",
        Image: "../../assets/55.png" 
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
        window.location.href = "end_game_GN_L5.html";
    }
}


loadQuestion(currentQuestionIndex);

