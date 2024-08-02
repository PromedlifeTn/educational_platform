const questions = [
    {
        question: "يحتوي الأرضي شوكي (الخرشوف) على",
        options: ["دهون", "فيتامينات"],
        answer: "فيتامينات",
        explanation: "الأرضي شوكي, غني بمضادات الأكسدة وفيتامينات، والخرشوف, خالٍ من الدهون ويحمي صحة القلب.",
        Source: "https://bit.ly/3rKyzRR",
        Image: "../../assets/41.png" 
    },
    {
        question: "ما هو الزعفران؟",
        options: ["نبات عشبي", "نوع من الفواكه", "نوع من الخضر"],
        answer: "نبات عشبي",
        explanation: "الزعفران هو أحد أنواع النباتات المزهرة من جنس الزعفران ضمن الفصيلة السوسنية. يشتهر الزعفران المزروع بالتوابل المستخرجة من أزهاره.",
        Source: "https://bit.ly/46MHrW0",
        Image: "../../assets/42.png" 
    },
    {
        question: "ما هي نسبة الماء في التمر؟",
        options: ["أقل من 10%", "حوالي 20%", "حوالي 50%", "أكثر من 70%"],
        answer: "حوالي 20%",
        explanation: "في كل 100 غرام من التمر نجد تقريبا 20.53 غرام من الماء.",
        Source: "https://bit.ly/3rOrks0",
        Image: "../../assets/43.png" 
    },
    {
        question: "أي جزء نأكل من الجزر؟",
        options: ["الثمار", "الأوراق", "الجذور"],
        answer: "الجذور",
        explanation: "الجزر ينتمي إلى الخضروات الجذرية ويعد أحد أكثر أنواعها تميزًا وغنى بالعناصر الغذائية التي تقدم العديد من الفوائد للصحة والجسم.",
        Source: "https://bit.ly/3FdQaof",
        Image: "../../assets/44.png" 
    },
    {
        question: "ما هو المكون المسؤول عن رائحة البصل؟",
        options: ["المواد الكبريتية", "الدهون", "الألياف"],
        answer: "المواد الكبريتية",
        explanation: "ثنائي كبريتيد بروبيل الأليل هو مركب عضوي موجود بالبصل والثوم عبارة عن سائل أصفر شاحب اللون ذو رائحة قوية تتبخر بسهولة وتسبب تهيجًا للعيون.",
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

