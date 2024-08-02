const questions = [
    {
        question: "What is a date?",
        options: ["Fruit", "Vegetable", "Fungi"],
        answer: "Fruit",
        explanation: "Dates are the fruits of date palm trees and are known for their high nutritional value. They are a summer fruit commonly found in the Arab world.",
        Source: "https://bit.ly/FirstQuestion",
        Image: "../../assets/11.png" 
    },
    {
        question: "Tomatoes belong to",
        options: ["Fruit Vegetables", "Leafy Vegetables", "Root Vegetables"],
        answer: "Fruit Vegetables",
        explanation: "Tomatoes belong to fruit vegetables, similar to eggplants, pumpkins, peppers, and cucumbers.",
        Source: "https://bit.ly/SecondQuestion",
        Image: "../../assets/12.png" 
    },
    {
        question: "Carrots belong to",
        options:  ["Fruit Vegetables", "Leafy Vegetables", "Root Vegetables"],
        answer: "Root Vegetables",
        explanation: "Carrots are root vegetables with a firm and crunchy texture when fresh.",
        Source: "https://bit.ly/ThirdQuestion",
        Image: "../../assets/13.png"
    },
    {
        question: "Do you eat pumpkin/squash cooked or raw?",
        options: ["Cooked", "Raw", "Both answers"],
        answer: "Cooked",
        explanation: "While raw squash and its seeds may contain slightly more vitamins and minerals, their taste and texture are often less appetizing.",
        Source: "https://bit.ly/FourthQuestion",
        Image: "../../assets/14.png"
    },
    {
        question: "What is the main benefit of fiber in vegetables?",
        options: ["Facilitating digestion", "Disease prevention"],
        answer: "Facilitating digestion",
        explanation: "Dietary fiber, primarily found in fruits, vegetables, whole grains, and legumes, is known for its ability to prevent and alleviate constipation. However, foods rich in fiber also provide other health benefits, such as helping maintain a healthy body weight, reducing the risk of diabetes and heart diseases, or certain types of cancer.",
        Source: "https://bit.ly/3PVVdyN",
        Image: "../../assets/15.png"
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
        window.location.href = "end_game_GN_L1.html";
    }
}


loadQuestion(currentQuestionIndex);

