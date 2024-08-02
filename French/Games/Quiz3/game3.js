const questions = [
    {
        question: "Quels composés spéciaux trouvés dans les dattes aident à protéger le corps des radicaux libres nocifs ?",
        options: ["Vitamines", "Minéraux", "Polyphénols"],
        answer: "Polyphénols",
        explanation: "Les dattes contiennent des polyphénols, qui sont des composés naturels avec une activité antioxydante qui aident à protéger le corps des radicaux libres nocifs."
    },
    {
        question: "Quel type de datte est décrit comme ayant une saveur riche et une texture moelleuse ?",
        options: ["Dattes Alig", "Dattes Kenticha", "Dattes Deglet el Nour"],
        answer: "Dattes Alig",
        explanation: "Les dattes Alig sont connues pour leur saveur riche et leur texture moelleuse, comme mentionné dans l'histoire."
    },
    {
        question: "Quel est le principal avantage nutritionnel des polyphénols trouvés dans les dattes ?",
        options: ["Améliorer la digestion", "Lutter contre les radicaux libres", "Améliorer la saveur"],
        answer: "Lutter contre les radicaux libres",
        explanation: "Les polyphénols ont une activité antioxydante, ce qui aide à lutter contre les radicaux libres et à protéger le corps des dommages."
    },
    {
        question: "Quelle variété de dattes est considérée comme la 'reine des dattes' et est connue pour son goût exquis et sa texture délicate ?",
        options: ["Dattes Kenticha", "Dattes Deglet el Nour", "Dattes Alig"],
        answer: "Dattes Deglet el Nour",
        explanation: "Les dattes Deglet el Nour sont renommées pour leur goût exquis et leur texture délicate, comme souligné dans l'histoire."
    },
    {
        question: "Comment Baba Ahmed a-t-il décrit les différentes variétés de dattes à Sara et Adam ?",
        options: ["Chaque variété a des saveurs et des usages uniques", "Toutes les dattes sont les mêmes", "Seules certaines dattes sont saines"],
        answer: "Chaque variété a des saveurs et des usages uniques",
        explanation: "Baba Ahmed a expliqué que chaque variété de dattes a ses propres qualités et caractéristiques spéciales, offrant une variété de saveurs et d'usages."
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
        <p>${selectedOption === currentQuestion.answer ? 'Vrai' : 'Faux'}</p>
        <p>الجواب الصحيح هو: ${currentQuestion.answer}</p>
        <p>تفسير : ${currentQuestion.explanation}</p>
        <p>المصدر: <a href="${currentQuestion.Source}" target="_blank">Cliquer ici !</a></p>
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
