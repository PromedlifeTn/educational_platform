const questions = [
    {
        question: "Pourquoi Timmy était-il absent de l'école pendant trois jours ?",
        options: ["Il était en vacances", "Il était malade", "Il a déménagé dans une autre école"],
        answer: "Il était malade",
        explanation: "Timmy était absent de l'école pendant trois jours car il était malade et devait rester à la maison à cause de douleurs à l'estomac."
    },
    {
        question: "Qu'est-ce qui a causé la maladie de Timmy ?",
        options: ["Manger trop de collations malsaines", "Ne pas dormir suffisamment", "Jouer trop longtemps"],
        answer: "Manger trop de collations malsaines",
        explanation: "La maladie de Timmy a été causée par la consommation excessive de collations qui n'étaient pas bonnes pour lui."
    },
    {
        question: "À quoi Mme Parker a-t-elle comparé nos corps ?",
        options: ["Des châteaux", "Des machines", "Des jardins"],
        answer: "Des châteaux",
        explanation: "Mme Parker a comparé nos corps à des châteaux forts gardés par des soldats courageux, représentant nos organes."
    },
    {
        question: "Quel type de collations Mme Parker a-t-elle recommandé ?",
        options: ["Collations commerciales", "Fruits", "Biscuits"],
        answer: "Fruits",
        explanation: "Mme Parker a recommandé les fruits comme collations saines, délicieuses et bonnes pour nous."
    },
    {
        question: "Quel effet la consommation de fruits a-t-elle eu sur les enfants ?",
        options: ["Ils ne les aimaient pas", "Ils se sont sentis plus forts et en meilleure santé", "Ils se sont sentis fatigués"],
        answer: "Ils se sont sentis plus forts et en meilleure santé",
        explanation: "Manger des fruits a permis aux enfants de se sentir plus forts et en meilleure santé, donnant à leurs corps la force nécessaire pour rester en bonne santé."
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
        <p>المصدر: <a href="${currentQuestion.Source}"target="_blank">Cliquer ici !</a></p>
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
