const questions = [
    {
        question: "Quel ingrédient Grand-mère a-t-elle utilisé au lieu du sucre pour préparer les friandises ?",
        options: ["Miel", "Sirop d'érable", "Dattes"],
        answer: "Dattes",
        explanation: "Grand-mère a utilisé des dattes au lieu du sucre car elles sont un édulcorant naturel riche en nutriments, rendant les friandises plus saines."
    },
    {
        question: "Quel nutriment trouvé dans les dattes aide à la digestion ?",
        options: ["Fibres", "Protéines", "Calcium"],
        answer: "Fibres",
        explanation: "Les dattes sont riches en fibres, ce qui aide à maintenir le système digestif fluide et en bonne santé."
    },
    {
        question: "Quels sont certains des vitamines et minéraux clés trouvés dans les dattes ?",
        options: ["Vitamine C et Calcium", "Potassium et Magnésium", "Vitamine D et Fer"],
        answer: "Potassium et Magnésium",
        explanation: "Les dattes sont chargées de nutriments importants tels que le potassium, le magnésium et la vitamine B6, qui aident à maintenir notre corps fort et en bonne santé."
    },
    {
        question: "Comment Lily et Ben ont-ils réagi aux biscuits faits avec des dattes ?",
        options: ["Déçus", "Excités", "Indifférents"],
        answer: "Excités",
        explanation: "Lily et Ben étaient excités et ravis de goûter les biscuits faits avec des dattes, les trouvant délicieux et sucrés."
    },
    {
        question: "Quel est un des avantages d'utiliser des dattes en pâtisserie comme décrit par Grand-mère ?",
        options: ["Les dattes rendent les friandises moins sucrées", "Les dattes ajoutent des saveurs artificielles", "Les dattes rendent les friandises plus saines"],
        answer: "Les dattes rendent les friandises plus saines",
        explanation: "Grand-mère a expliqué que les dattes ajoutent non seulement de la douceur mais rendent également les friandises plus saines grâce à leurs nutriments naturels et l'absence de sucre raffiné."
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
        <p>${selectedOption === currentQuestion.answer ?'Vrai' : 'Faux'}</p>
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
        window.location.href = "end_game4.html";
    }
}


loadQuestion(currentQuestionIndex);
