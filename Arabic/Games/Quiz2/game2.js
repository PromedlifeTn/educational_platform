const questions = [
    {
        question: "لماذا كان تيمي غائبًا عن المدرسة لثلاثة أيام؟",
        options: ["كان في عطلة", "كان مريضًا", "انتقل إلى مدرسة أخرى"],
        answer: "كان مريضًا",
        explanation: "تيمي كان غائبًا عن المدرسة لثلاثة أيام لأنه كان مريضًا وكان عليه البقاء في المنزل بسبب آلام في المعدة."
    },
    {
        question: "ما الذي سبب مرض تيمي؟",
        options: ["تناول الكثير من الوجبات الخفيفة غير الصحية", "عدم النوم الكافي", "اللعب كثيرًا"],
        answer: "تناول الكثير من الوجبات الخفيفة غير الصحية",
        explanation: "مرض تيمي كان بسبب تناول الكثير من الوجبات الخفيفة التي لم تكن جيدة له."
    },
    {
        question: "بماذا قاست السيدة باركر أجسامنا؟",
        options: ["القلع", "الآلات", "الحدائق"],
        answer: "القلع",
        explanation: "قاست السيدة باركر أجسامنا بالقلع القوية المحمية بواسطة جنود شجعان، ممثلين بالأعضاء لدينا."
    },
    {
        question: "ما نوع الوجبات الخفيفة التي أوصت بها السيدة باركر؟",
        options: ["وجبات خفيفة تجارية", "الفواكه", "البسكويت"],
        answer: "الفواكه",
        explanation: "أوصت السيدة باركر بالفواكه كوجبات خفيفة صحية، لذيذة وجيدة لنا."
    },
    {
        question: "ما تأثير تناول الفواكه على الأطفال؟",
        options: ["لم تعجبهم", "شعروا بأنهم أقوى وأكثر صحة", "شعروا بالتعب"],
        answer: "شعروا بأنهم أقوى وأكثر صحة",
        explanation: "تناول الفواكه جعل الأطفال يشعرون بأنهم أقوى وأكثر صحة، مما أعطى أجسامهم القوة اللازمة للبقاء بصحة جيدة."
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
        window.location.href = "end_game2.html";
    }
}


loadQuestion(currentQuestionIndex);
