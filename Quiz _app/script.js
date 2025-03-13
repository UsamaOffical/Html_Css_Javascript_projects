const questions = [
    {
        question: "What is the national flower of Pakistan?",
        answer: [
            { text: "Rose", correct: false },
            { text: "Jasmine", correct: true },
            { text: "Sunflower", correct: false },
            { text: "Tulip", correct: false }
        ]
    },
    {
        question: "On which date did Pakistan gain independence?",
        answer: [
            { text: "14 August 1947", correct: true },
            { text: "15 August 1947", correct: false },
            { text: "23 March 1940", correct: false },
            { text: "25 December 1947", correct: false }
        ]
    },
    {
        question: "Which is the largest city of Pakistan?",
        answer: [
            { text: "Lahore", correct: false },
            { text: "Islamabad", correct: false },
            { text: "Karachi", correct: true },
            { text: "Peshawar", correct: false }
        ]
    },
    {
        question: "Which is the longest river in Pakistan?",
        answer: [
            { text: "Ravi", correct: false },
            { text: "Chenab", correct: false },
            { text: "Indus", correct: true },
            { text: "Jhelum", correct: false }
        ]
    },
    {
        question: "Which is the highest mountain peak in Pakistan?",
        answer: [
            { text: "Nanga Parbat", correct: false },
            { text: "K2", correct: true },
            { text: "Rakaposhi", correct: false },
            { text: "Broad Peak", correct: false }
        ]
    },
    {
        question: "What is the national game of Pakistan?",
        answer: [
            { text: "Cricket", correct: false },
            { text: "Hockey", correct: true },
            { text: "Football", correct: false },
            { text: "Squash", correct: false }
        ]
    },
    {
        question: "What was the first capital of Pakistan?",
        answer: [
            { text: "Lahore", correct: false },
            { text: "Islamabad", correct: false },
            { text: "Karachi", correct: true },
            { text: "Multan", correct: false }
        ]
    },
    {
        question: "Which is the smallest province of Pakistan by area?",
        answer: [
            { text: "Sindh", correct: false },
            { text: "Balochistan", correct: false },
            { text: "Khyber Pakhtunkhwa", correct: false },
            { text: "Punjab", correct: true }
        ]
    },
    {
        question: "In which continent is Pakistan located?",
        answer: [
            { text: "Europe", correct: false },
            { text: "Asia", correct: true },
            { text: "Africa", correct: false },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "Which is the largest stadium in Pakistan?",
        answer: [
            { text: "Gaddafi Stadium", correct: true },
            { text: "National Stadium", correct: false },
            { text: "Jinnah Stadium", correct: false },
            { text: "Arbab Niaz Stadium", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-btn")
const nextButton = document.getElementById("next-btn")

let  currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answer.forEach(answer =>{
        let button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if(answer.correct){
            answer.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectedAnswer)
    })
}
function resetState(){
    answerButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectedAnswer(e){
    const selecteBtn = e.target
    const iscorrect = selecteBtn.dataset.correct === "true"
    if(iscorrect){
        selecteBtn.classList.add("correct")
    }
    else{
        selecteBtn.classList.add("inCorrect")

    }


}

startQuiz()