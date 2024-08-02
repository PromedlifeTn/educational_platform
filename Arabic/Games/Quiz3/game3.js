const questions = [
    {
        question: "ما هي المركبات الخاصة الموجودة في التمر التي تساعد في حماية الجسم من الجذور الحرة الضارة؟",
        options: ["الفيتامينات", "المعادن", "البوليفينولات"],
        answer: "البوليفينولات",
        explanation: "التمر يحتوي على بوليفينولات، وهي مركبات طبيعية ذات نشاط مضاد للأكسدة تساعد في حماية الجسم من الجذور الحرة الضارة."
    },
    {
        question: "أي نوع من التمر يوصف بأنه ذو نكهة غنية وقوام مضغ؟",
        options: ["تمر أليج", "تمر كنتيشا", "تمر دقلة النور"],
        answer: "تمر أليج",
        explanation: "تمر أليج معروف بنكهته الغنية وقوامه المضغ، كما هو مذكور في القصة."
    },
    {
        question: "ما الفائدة الغذائية الرئيسية للبوليفينولات الموجودة في التمر؟",
        options: ["تحسين الهضم", "محاربة الجذور الحرة", "تعزيز النكهة"],
        answer: "محاربة الجذور الحرة",
        explanation: "البوليفينولات لها نشاط مضاد للأكسدة، مما يساعد في محاربة الجذور الحرة وحماية الجسم من الأضرار."
    },
    {
        question: "أي نوع من التمر يعتبر 'ملكة التمور' ومعروف بطعمه الفاخر وملمسه الرقيق؟",
        options: ["تمر كنتيشا", "تمر دقلة النور", "تمر أليج"],
        answer: "تمر دقلة النور",
        explanation: "تمر دقلة النور مشهور بطعمه الفاخر وملمسه الرقيق، كما هو موضح في القصة."
    },
    {
        question: "كيف وصف بابا أحمد الأنواع المختلفة من التمر لسارة وآدم؟",
        options: ["كل نوع له نكهات واستخدامات فريدة", "جميع التمور متشابهة", "بعض التمور فقط صحية"],
        answer: "كل نوع له نكهات واستخدامات فريدة",
        explanation: "أوضح بابا أحمد أن كل نوع من التمر له خصائصه ومميزاته الخاصة، مما يوفر مجموعة متنوعة من النكهات والاستخدامات."
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
        window.location.href = "end_game3.html";
    }
}


loadQuestion(currentQuestionIndex);
