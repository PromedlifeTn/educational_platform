const questions = [
    {
        question: " يساعد الأرضي شوكي (الخرشوف) على",
        options: [ "  الوقاية من أمراض السرطان  مثل سرطان الكبد","علاج أمراض القلب والأوعية الدموية " , "الاجابتين"],
        answer: "الاجابتين",
        explanation: "الخرشوف مليء بالمغذيات النباتية ذات الفوائد المضادة للأكسدة التي تساعد في كل شيء من درء السرطان إلى تقوية جهاز المناعة. و يحارب الخرشوف أمراض القلب والأوعية الدموية، فالأشخاص الذين لديهم مستويات عالية من الكوليسترول هم أكثر عرضة للإصابة بأمراض القلب، والسكتة القلبية، أو السكتة الدماغية        " ,
        Source: "https://bit.ly/3tm8atS",
        Image: "../../assets/51.png" 
    },
    {
        question: " ما هي نسبة السكريات التي يحتوي عليها التمر؟",
        options: [ "40%-50%", "50%-60%", "60%-70%","70%-80%"],
        answer: "70%-80%",
        explanation: " تزيد نسبة السكريات بالتمرة على 70 ـ 78% من مكونات الثمرة وتتميز هذه السكريات بسرعة امتصاصها وانتقالها للدم مباشرة وهضمها وحرقها.",
        Source: "https://ar.wikipedia.org/wiki/%D8%AA%D9%85%D8%B1",
        Image: "../../assets/52.png" 
    },
    {
        question: "يساعد الجزر على الحفاظ على صحة العين بفضل:        ",
        options: [ "فيتامين أ", "فيتامين ج", "فيتامين د"],
        answer:  "فيتامين أ", 
        explanation: "تعود فوائد الجزر للعين بشكل أساسي لما يحتويه من عناصر غذائية ضرورية لصحة العين وقوة البصر، أهمها فيتامين أ والكاروتينات، وهي مركبات نباتية يتحول معظمها إلى فيتامين أ داخل الجسم، كما ولها خصائص مضادة للأكسدة.",
        Source: "https://bit.ly/3Qh3KOc",
        Image: "../../assets/53.png" 
    },
    {
        question: "من أي جزء يتم استخراج المادة الفعالة للزعفران",
        options: [ "الأزهار", "الأوراق", "البذور" ],
        answer:"الأزهار" ,
        explanation: "تحتوي مياسم الأزهار على زيت دهني طيار ذي رائحة عطرية ومواد ملونة. وهذه المادة لونها أحمر برتقالي، وذات رائحة نفاذة، وطعم مميزتتكون أساسا على الكروسين (المكون الكيميائي الأساسي المسؤول عن لون الزعفران). أثبت أن الكروسين مضاد أكسدة فعال. كما أثبت أيضاً أنه ذو تأثير مضاد التسرطن",
        Source: "https://bit.ly/45yM6tj",
        Image: "../../assets/54.png" 
    },
    {
        question: ": ما هي المادة المضادة للأكسدة و الالتهابات التي يحتويها البصل؟",
        options: [ "معادن", "الفلافونيدات", "الألياف" ],
        answer: "الفلافونيدات",
        explanation: "يحتوي البصل على مركّبات ضد الالتهاب والكولسترول والسرطان والأكسدة مثل الكورسيتن وهو من الفلافونيدات. ",
        Source: "https://bit.ly/3Q9Xt6F",
        Image: "../../assets/55.png" 
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
        window.location.href = "end_game_GN_L5.html";
    }
}


loadQuestion(currentQuestionIndex);

