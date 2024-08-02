const questions = [
    {
        question: "التمر هو؟",
        options: ["فاكهة", "خضر", "فطريات"],
        answer: "فاكهة",
        explanation: " التمر هو ثمرة أشجار نخيل التمر وهو أحد الثمار الشهيرة بقيمتها الغذائية العالية وهي فاكهة صيفية تنتشر في الوطن العربي"
        ,Source: "https://bit.ly/السؤال_الأول",
        Image: "../../assets/11.png" 
    },
    {
        question: "الطماطم ينتمي الى",
        options: ["خضر ثمرية", "خضر ورقية","خضر جذرية"],
        answer: "خضر ثمرية",
        explanation: "ينتمي الطماطم الى الخضر الثمرية مثل الباذنجان، القرع، الفلفل، الخيار         ",
        Source: "https://bit.ly/السؤال_الثاني",
        Image: "../../assets/12.png" 
    },
    {
        question: "الجزر ينتمي الى",
        options:  ["خضر ثمرية", "خضر ورقية","خضر جذرية"],
        answer: "خضر جذرية",
        explanation: "الجزر من الخضر الجذرية وله قوام متماسك ومقرمش عندما تكون طازجة"
        ,Source: "https://bit.ly/السؤال_الثالث",
        Image: "../../assets/13.png"
    },
    {
        question: "يأكل اليقطين/القرع",
        options: [ "مطبوخ","طازج", "الاجابتين"],
        answer: "مطبوخ",
        explanation: " في حين أن اليقطين النيء وبذوره قد يحتويان على فيتامينات ومعادن أكثر بقليل، إلا أن طعمها وملمسها يعتبر غالبًا أقل شهية        "
        ,Source: "https://bit.ly/السؤال_الرابع",
        Image: "../../assets/14.png"
    },

    {
        question: "ما هي أكبر فائدة للألياف في الخضر؟",
        options: ["تسهيل عملية الهضم", "الوقاية من الأمراض"],
        answer: "تسهيل عملية الهضم",
        explanation: "تعرف الألياف الغذائية - الموجودة بشكل رئيسي في الفاكهة والخضروات والحبوب الكاملة والبقوليات - بقدرتها على منع الإمساك وتخفيفه. ولكن قد توفر الأطعمة الغنية بالألياف فوائد صحية أخرى أيضًا، مثل المساعدة في الحفاظ على وزن صحي للجسم، وخفض خطر الإصابة بداء السكرى وأمراض القلب، أو بعض أنواع السرطان.",
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

