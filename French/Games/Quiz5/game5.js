const questions = [
    {
        question: "Quel rôle Mme Thompson a-t-elle attribué aux oignons pour maintenir notre corps en bonne santé ?",
        options: ["Ils sont comme des chevaliers protégeant le château", "Ils fournissent uniquement du goût", "Ils sont une source de calories vides"],
        answer: "Ils sont comme des chevaliers protégeant le château",
        explanation: "Mme Thompson a comparé les oignons à des chevaliers protégeant le château, expliquant que les oignons aident à combattre les germes et à maintenir notre corps en forme."
    },
    {
        question: "Quel avantage nutritionnel Mme Thompson a-t-elle souligné concernant les oignons pour le cœur et l'esprit ?",
        options: ["Ils renforcent le cœur et aiguisent l'esprit", "Ils n'ont aucun impact sur le cœur et l'esprit", "Ils ajoutent uniquement de la douceur aux aliments"],
        answer: "Ils renforcent le cœur et aiguisent l'esprit",
        explanation: "Les oignons sont décrits comme ayant des pouvoirs magiques pour rendre nos cœurs forts et nos esprits aiguisés grâce à leurs propriétés nutritionnelles."
    },
    {
        question: "Qu'est-ce que Mme Thompson a utilisé pour rendre les oignons plus attrayants pour les enfants ?",
        options: ["Une pâte croustillante et une caramelisation", "Juste des oignons crus", "Beaucoup de sucre"],
        answer: "Une pâte croustillante et une caramelisation",
        explanation: "Mme Thompson a préparé les oignons en les trempant dans une pâte croustillante et en les caramélisant, ce qui les a rendus plus attrayants et délicieux pour les enfants."
    },
    {
        question: "Comment les enfants ont-ils réagi aux snacks d'oignons préparés par Mme Thompson ?",
        options: ["Ils étaient ravis et les ont trouvés délicieux", "Ils étaient indifférents", "Ils les ont encore plus détestés"],
        answer: "Ils étaient ravis et les ont trouvés délicieux",
        explanation: "Les enfants étaient ravis des snacks d'oignons et ne pouvaient pas croire à quel point les oignons pouvaient être délicieux lorsqu'ils étaient préparés de manière créative."
    },
    {
        question: "Quel a été le résultat final pour les enfants de Veggieland concernant leur opinion sur les oignons ?",
        options: ["Ils ont adopté les oignons comme un ajout nutritif", "Ils ont continué à éviter les oignons", "Ils ont préféré les snacks sucrés aux oignons"],
        answer: "Ils ont adopté les oignons comme un ajout nutritif",
        explanation: "Grâce aux efforts culinaires de Mme Thompson, les enfants de Veggieland ont commencé à apprécier les oignons comme une partie délicieuse et nutritive de leurs repas."
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
        window.location.href = "end_game5.html";
    }
}


loadQuestion(currentQuestionIndex);
