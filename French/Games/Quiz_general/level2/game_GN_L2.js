const questions = [

    {
        question: "التمر مفيد للصحة؟",
        options: ["نعم", "لا"],
        answer: "نعم",
        explanation: "التمر من أكثر المواد الغذائية المفيدة للصحة، فهذه الثمرة تعتبر غذاء كاملا، لاحتوائها على كافة أنواع المعادن المفيدة للجسم إضافة إلى الفيتامينات و المركبات الغذائية النباتية ",
        Source: "https://p.dw.com/p/1HbUi",
        Image: "../../assets/21.png" 
    },
    {
        question: "متى نأكل التمر؟",
        options: ["في الصباح", "في المساء"],
        answer: "في الصباح",
        explanation: ". التمر غني بالكربوهيدرات البسيطة والسكريات الطبيعية، مما يمنحك طاقة سريعة. يمكن أن يكون مفيدًا في تزويد الجسم بالطاقة التي يحتاجها في بداية اليوم.",
        Source: "https://p.dw.com/p/1HbUi",
        Image: "../../assets/22.png" 
    },
    {
        question: ": أي من هذه الفواكه تحتوي على كمية أكثر من الماء",
        options: ["التمر", "الطماطم","فلفل"],
        answer: "الطماطم",
        explanation: "نجد 94.5 غ من الماء في كل 100غ من الطماطم حيث تتجاوز هذه النسبة البطيخ الذي يحتوي على 92% من الماء"
        ,Source: "https://bit.ly/45tiVIl",
        Image: "../../assets/23.png" 
    },
    {
        question: "هل يفضل أكل الطماطم",
        options: ["مطهوة", "طازجة"],
        answer:  "مطهوة",
        explanation:". ينصح خبراء التغذية غالبا بتناول الخضار طازجة وغير مطبوخة إلا الطماطم التي تختلف عنها في ذلك. خاصة وأن الطماطم المطبوخة يمكنها أن تساهم بصورة أكبر في مقاومة الأمراض وتقليل خطر الإصابة بأمراض القلب والسرطان.", 
        Source: "https://bit.ly/46IQerO",
        Image: "../../assets/24.png" 
    },
    {
        question: "هل يفضل أكل  الجزر",
        options: ["مطبوخ","طازج ", "الاجابتين"],
        answer:  "الاجابتين",
        explanation: "يمكن تناول الجزر طازجا أ مطبوخا: إذا كان الجزر غير طازج جدا فيفضل تقطيعه إلى دوائر قبل طبخه. الجزر النيئ أسرع وأسهل هضمًا من الجزر المطبوخ خلافًا لما يعتقده الكثير من الناس.",
        Source: "https://bit.ly/3Qfjxg4",
        Image: "../../assets/25.png" 
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
        window.location.href = "end_game_GN_L2.html";
    }
}


loadQuestion(currentQuestionIndex);

