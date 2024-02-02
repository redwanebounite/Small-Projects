const questions = [
    {
        question : "Which is larget animal in the world?",
        answers : [
            {text: "Shark", correct: false},
            {text: "Giraffe", correct: false},
            {text: "Elephant", correct: false},
            {text: "Blue whale", correct:true},
        ]
    },
    {
        question : "Which is the smallest country in the world?",
        answers : [
            {text: "Morocco", correct: false},
            {text: "Vatican City", correct: true},
            {text: "USA", correct: false},
            {text: "Spain", correct:false},
        ]
    },
    {
        question : "Which is the larget desert in the world?",
        answers : [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "ALgeria", correct: false},
            {text: "Antarctica", correct:true},
        ]
    },
    {
        question : "Which is smallest continent in the world?",
        answers : [
            {text: "Australia", correct: true},
            {text: "Africa", correct: false},
            {text: "Asia", correct: false},
            {text: "Europe", correct:false},
        ]
    }
]
let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-btn");
let nextButton =  document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
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
function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function  selectAnswer(e){
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";
    if (isCorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", function(){
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
})
startQuiz();