const questions = [
    {
        question: "Quel type de nourriture les habitants du village Green Leaf faisaient-ils pousser dans leurs jardins ?",
        options: ["Légumes et fruits", "Friandises", "Aliments transformés"],
        answer: "Légumes et fruits",
        explanation: "Les habitants du village Green Leaf faisaient pousser des légumes et des fruits dans leurs jardins, ce qui les aidait à maintenir une bonne santé et une énergie sans limite."
    },
    {
        question: "Quels étaient les effets négatifs de la consommation excessive de friandises transformées ?",
        options: ["Énergie élevée", "Augmentation des maladies et de la toux", "Augmentation de la force et de l'activité"],
        answer: "Augmentation des maladies et de la toux",
        explanation: "Les enfants consommaient trop de friandises transformées, ce qui a entraîné une augmentation des maladies et de la toux, ainsi qu'un déclin de la vitalité du village."
    },
    {
        question: "Quels sont les bienfaits pour la santé des sucres naturels trouvés dans les fruits ?",
        options: ["Nourrir le corps et le rendre plus fort et plus actif", "Prise de poids rapide", "Carie dentaire"],
        answer: "Nourrir le corps et le rendre plus fort et plus actif",
        explanation: "Les sucres naturels trouvés dans les fruits nourrissent les corps des enfants et les rendent plus forts et plus actifs par rapport aux sucres transformés."
    },
    {
        question: "Comment les mères ont-elles contribué à restaurer la santé des enfants dans le village Green Leaf ?",
        options: ["En leur donnant plus de friandises", "En préparant des plats délicieux à partir de fruits et légumes frais", "En leur donnant des aliments transformés"],
        answer: "En préparant des plats délicieux à partir de fruits et légumes frais",
        explanation: "Les mères ont préparé des plats délicieux à partir de fruits et légumes frais, comme des gâteaux à la fraise, ce qui a aidé à restaurer la santé des enfants."
    },
    {
        question: "Quels changements sont survenus chez les enfants après être revenus à une alimentation saine ?",
        options: ["Diminution des niveaux d'énergie", "Amélioration de la santé et augmentation des niveaux d'énergie", "Augmentation des maladies"],
        answer: "Amélioration de la santé et augmentation des niveaux d'énergie",
        explanation: "Après être revenus à une alimentation saine, la santé des enfants s'est améliorée, leurs niveaux d'énergie ont augmenté et les rires ont de nouveau rempli l'air."
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
        window.location.href = "end_game1.html";
    }
}


loadQuestion(currentQuestionIndex);


//cursor
const cursor = document.querySelector(".cursor");


//follow
document.addEventListener("mousemove",(e) =>
{
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
    //effect on mouse stopped
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000)
}
);

document.addEventListener("mouseout",()=>{
    cursor.style.display = "none";
})


