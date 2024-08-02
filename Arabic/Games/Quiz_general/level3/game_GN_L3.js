const questions = [

    {
        question: "على ماذا يحتوي التمر؟",
        options: ["السكريات","الألياف", "الفيتامينات", "كل ما ذكر سابقا" ],
        answer: "كل ما ذكر سابقا" ,
        explanation: "هذه الثمرة تعتبر غذاء كاملا، لاحتوائها على كافة أنواع المعادن المفيدة للجسم إضافة إلى الفيتامينات و المركبات الغذائية النباتية.",
        Source: "https://p.dw.com/p/1HbUi",
        Image: "../../assets/31.png" 
    },
    {
        question: "لماذا نأكل التمر؟",
        options: ["ليعطينا لياقة بدنية", "ليعطينا الطاقة و النشاط"],
        answer: "ليعطينا الطاقة و النشاط",
        explanation: " يحتوي التمر على كل العناصر الغذائية التي يحتاجها الجسم لتعزيز طاقته خلال اليوم، إذ يزود الجسم بالطاقة كما تساعد الألياف الموجدة بداخله على استقرار نسبة السكر في الدم، ما يساعد الجسم على تجنب استهلاك السكر (مصدر الطاقة ) الزائد في الجسم. ",
        Source: " https://p.dw.com/p/1HbUi",
        Image: "../../assets/32.png" 
    },
    {
        question: ":خضر ثمرية لونها أرجواني",
        options: ["باذنجان", "الكوسا","فلفل"],
        answer: "باذنجان",
        explanation: " هو نبات عشبي له ثمار كبيرة بنفسجية اللون غنية ببعض المركبات المفيدة مثل الزنك و البوتاسيوم وأنسب طرق تناول الباذنجان لتحقيق أقصي استفادة هي أكله مسلوقا ومضافا إليه الملح والليمون",
        Source: "https://bit.ly/45mOL9y",
        Image: "../../assets/33.png" 
    },
    {
        question: "أي جزء نأكل من الأرضي شوكي (الخرشوف)",
        options: ["الثمار","الجذور","الأزهار"],
        answer: "الأزهار",
        explanation: " يؤكل التخت الزهري الذي يلاحظ أنه متضخم ولحمي، ويحتوي على كمية جيدة من فيتامين أ و ب",
        Source: "https://bit.ly/3LZYjAt",
        Image: "../../assets/34.png" 
    },
    {
        question:" خضر ثمرية تأكل مطبوخة",
        options: ["البصل", "الكوسا","أرضي شوكي"],
        answer: "الكوسا",
        explanation: "يعتبر الكوسا أحد أنواع الخضر الثمرية التي يتم طبخها بطرق مختلفة في منطقة الشرق الأوسط والعالم أجمع. وبالإضافة إلى طعمها اللذيذ، يعد الكوسا مفيد جدًا لصحة الجسم وعافيته، ويعود ذلك لغناه بالعديد من العناصر الغذائية والمركبات المضادة للأكسدة.",
        Source: "https://bit.ly/3Fc566a",
        Image: "../../assets/35.png" 
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
        window.location.href = "end_game_GN_L3.html";
    }
}


loadQuestion(currentQuestionIndex);

