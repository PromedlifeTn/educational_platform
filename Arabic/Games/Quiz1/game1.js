const questions = [
    {
        question: "ما نوع الطعام الذي كان أهل قرية Green Leaf يزرعونه في حدائقهم؟",
        options: ["الخضروات والفواكه", "الحلويات", "الأطعمة المعالجة"],
        answer: "الخضروات والفواكه",
        explanation: "كان أهل قرية Green Leaf يزرعون الخضروات والفواكه في حدائقهم، مما ساعدهم في الحفاظ على صحة جيدة وطاقة لا محدودة."
    },
    {
        question: "ما هي الآثار السلبية لاستهلاك الكثير من الحلويات المعالجة؟",
        options: ["طاقة عالية", "زيادة الأمراض والسعال", "زيادة القوة والنشاط"],
        answer: "زيادة الأمراض والسعال",
        explanation: "تناول الأطفال للكثير من الحلويات المعالجة أدى إلى زيادة الأمراض والسعال، وانخفاض في حيوية القرية."
    },
    {
        question: "ما هي فوائد السكر الطبيعي الموجود في الفواكه للصحة؟",
        options: ["تغذية الجسم وجعله أقوى وأكثر نشاطًا", "زيادة الوزن بسرعة", "تسوس الأسنان"],
        answer: "تغذية الجسم وجعله أقوى وأكثر نشاطًا",
        explanation: "السكر الطبيعي الموجود في الفواكه يغذي أجسام الأطفال ويجعلها أقوى وأكثر نشاطًا مقارنة بالسكر المعالج."
    },
    {
        question: "كيف ساهمت الأمهات في استعادة صحة الأطفال في قرية Green Leaf؟",
        options: ["بإعطائهم المزيد من الحلويات", "بتحضير أطباق لذيذة من الفواكه والخضروات الطازجة", "بإعطائهم أطعمة معالجة"],
        answer: "بتحضير أطباق لذيذة من الفواكه والخضروات الطازجة",
        explanation: "حضرت الأمهات أطباقًا لذيذة من الفواكه والخضروات الطازجة، مثل كعك الفراولة، مما ساعد في استعادة صحة الأطفال."
    },
    {
        question: "ما التغييرات التي حدثت للأطفال بعد العودة إلى نظام غذائي صحي؟",
        options: ["انخفاض في مستويات الطاقة", "تحسن في الصحة وزيادة في مستويات الطاقة", "زيادة الأمراض"],
        answer: "تحسن في الصحة وزيادة في مستويات الطاقة",
        explanation: "بعد العودة إلى نظام غذائي صحي، تحسنت صحة الأطفال، وزادت مستويات الطاقة لديهم، وعادت الضحكات لملء الهواء."
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


