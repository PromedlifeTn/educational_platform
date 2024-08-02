const questions = [
    {
        question: "ما المكون الذي استخدمته الجدة بدلاً من السكر لصنع الحلويات؟",
        options: ["عسل", "شراب القيقب", "تمر"],
        answer: "تمر",
        explanation: "استخدمت الجدة التمر بدلاً من السكر لأنه محلي طبيعي غني بالعناصر الغذائية، مما يجعل الحلويات أكثر صحة."
    },
    {
        question: "ما العنصر الغذائي الموجود في التمر الذي يساعد في الهضم؟",
        options: ["الألياف", "البروتين", "الكالسيوم"],
        answer: "الألياف",
        explanation: "التمر غني بالألياف، مما يساعد في الحفاظ على صحة الجهاز الهضمي وسهولته."
    },
    {
        question: "ما هي بعض الفيتامينات والمعادن الرئيسية الموجودة في التمر؟",
        options: ["فيتامين C والكالسيوم", "البوتاسيوم والمغنيسيوم", "فيتامين D والحديد"],
        answer: "البوتاسيوم والمغنيسيوم",
        explanation: "التمر مليء بالعناصر الغذائية المهمة مثل البوتاسيوم والمغنيسيوم وفيتامين B6، التي تساعد في الحفاظ على قوة وصحة أجسامنا."
    },
    {
        question: "كيف شعر ليلي وبن حيال البسكويت المصنوع بالتمر؟",
        options: ["مستاؤون", "متحمسون", "غير مبالين"],
        answer: "متحمسون",
        explanation: "كان ليلي وبن متحمسين وسعيدين بتذوق البسكويت المصنوع بالتمر، ووجداها لذيذة وحلوة."
    },
    {
        question: "ما فائدة واحدة لاستخدام التمر في الخبز كما وصفتها الجدة؟",
        options: ["التمر يجعل الحلويات أقل حلاوة", "التمر يضيف نكهات صناعية", "التمر يجعل الحلويات أكثر صحة"],
        answer: "التمر يجعل الحلويات أكثر صحة",
        explanation: "أوضحت الجدة أن التمر لا يضيف فقط حلاوة ولكنه يجعل الحلويات أيضاً أكثر صحة بفضل عناصره الغذائية الطبيعية وغياب السكر المكرر."
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
        window.location.href = "end_game4.html";
    }
}


loadQuestion(currentQuestionIndex);
