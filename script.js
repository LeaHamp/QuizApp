const questions = [
    {
        question: "What does API stand for in software development?",
        answers: [
            {text: "Advanced Programming Integration", correct: false},
            {text: "Application Programming Interface", correct: true},
            {text: "Automated Process Interaction", correct: false},
            {text: "Application Protocol Interface", correct: false},
        ]
    },{
        question: "Which programming language is known as the mother of all language?",
        answers: [
            {text: "C", correct: false},
            {text: "Java", correct: false},
            {text: "Fortran", correct: true},
            {text: "Assembly", correct: false},
        ]
    },{
        question: "Which company developed the Python programming language?",
        answers: [
            {text: "Microsoft", correct: false},
            {text: "Google", correct: false},
            {text: "Guido van Rossum", correct: true},
            {text: "None of the above", correct: false},
        ]
    },{
        question: "What does SQL stand for in database management?",
        answers: [
            {text: "Standard Query Language", correct: false},
            {text: "Structured Query Language", correct: true},
            {text: "Simple Query Language", correct: false},
            {text: "Scripting Query Language", correct: false},
        ]
    },{
        question: "Which version control system is the most widely used in software development?",
        answers: [
            {text: "Subversion", correct: false},
            {text: "Mercurial", correct: false},
            {text: "Git", correct: true},
            {text: "Perfore", correct: false},
        ]
    },{
        question: "What is the primary purpose of an API in software development?",
        answers: [
            {text: "To store data", correct: false},
            {text: "To provide user interface", correct: false},
            {text: "To allow communication between software applications", correct: true},
            {text: "To compile source code", correct: false},
        ]
    },{
        question: "What is the default extension of a python script?",
        answers: [
            {text: ".java", correct: false},
            {text: ".py", correct: true},
            {text: ".js", correct: false},
            {text: ".html", correct: false},
        ]
    },{
        question: "Which of the following is NOT a JavaScript framework?",
        answers: [
            {text: "React", correct: false},
            {text: "Angular", correct: false},
            {text: "Django", correct: true},
            {text: "Vue", correct: false},
        ]
    },{
        question: "In which year was the first version of Windows released?",
        answers: [
            {text: "1980", correct: false},
            {text: "1983", correct: false},
            {text: "1985", correct: true},
            {text: "1990", correct: false},
        ]
    },{
        question: "What is the purpose of a compiler in programming?",
        answers: [
            {text: "To execute the code", correct: false},
            {text: "To convert high-level code to machine code", correct: true},
            {text: "To test the code", correct: false},
            {text: "To write the code", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        resetState();
        questionElement.innerHTML = `Quiz Completed! Your score: ${score} out of ${questions.length}`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
        nextButton.addEventListener("click", startQuiz);
    }
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}



startQuiz();