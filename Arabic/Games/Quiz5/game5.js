const questions = [
    {
        question: "ما الدور الذي قالت السيدة طومسون أن البصل يلعبه في الحفاظ على صحة أجسامنا؟",
        options: ["إنهم مثل الفرسان الذين يحرسون القلعة", "إنهم يوفرون النكهة فقط", "إنهم مصدر للسعرات الحرارية الفارغة"],
        answer: "إنهم مثل الفرسان الذين يحرسون القلعة",
        explanation: "قامت السيدة طومسون بمقارنة البصل بالفرسان الذين يحرسون القلعة، موضحة أن البصل يساعد في محاربة الجراثيم والحفاظ على قوة أجسامنا."
    },
    {
        question: "ما الفائدة الغذائية التي أبرزتها السيدة طومسون بشأن البصل للقلب والعقل؟",
        options: ["إنهم يقوّون القلب ويزيدون حدة العقل", "لا تأثير لهم على القلب والعقل", "إنهم يضيفون فقط الحلاوة للطعام"],
        answer: "إنهم يقوّون القلب ويزيدون حدة العقل",
        explanation: "تم وصف البصل بأنه يمتلك قوى سحرية تجعل قلوبنا قوية وعقولنا حادة بفضل خصائصه الغذائية."
    },
    {
        question: "ماذا استخدمت السيدة طومسون لجعل البصل أكثر جاذبية للأطفال؟",
        options: ["غلاف مقرمش وتكرميل", "مجرد بصل خام", "الكثير من السكر"],
        answer: "غلاف مقرمش وتكرميل",
        explanation: "قامت السيدة طومسون بإعداد البصل عن طريق غمسه في غلاف مقرمش وتكرميله، مما جعله أكثر جاذبية ولذة للأطفال."
    },
    {
        question: "كيف تفاعل الأطفال مع وجبات البصل الخفيفة التي أعدتها السيدة طومسون؟",
        options: ["كانوا سعداء ووجدوا أنها لذيذة", "كانوا غير مبالين", "أصبحوا يكرهونها أكثر"],
        answer: "كانوا سعداء ووجدوا أنها لذيذة",
        explanation: "كان الأطفال سعداء بالوجبات الخفيفة المصنوعة من البصل ولم يصدقوا مدى لذة البصل عندما يُعد بشكل إبداعي."
    },
    {
        question: "ما كانت النتيجة النهائية بالنسبة للأطفال في Veggieland بخصوص رأيهم في البصل؟",
        options: ["تبنوا البصل كإضافة غذائية مغذية", "استمروا في تجنب البصل", "فضلوا الوجبات الخفيفة السكرية على البصل"],
        answer: "تبنوا البصل كإضافة غذائية مغذية",
        explanation: "بفضل جهود السيدة طومسون الطهو، بدأ أطفال Veggieland في تقدير البصل كجزء لذيذ ومغذي من وجباتهم."
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
        window.location.href = "end_game5.html";
    }
}


loadQuestion(currentQuestionIndex);
