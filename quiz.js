const questions = [
    {
    question: "What is the language used to style a website?",
    choices: ["A. HTML", "B. CSS", "C. Javascript", "D. React"],
    correctAnswer: "B"
},
{
    question: "What is the language used to show the skeleton of a website?",
    choices: ["A. HTML", "B. CSS", "C. Javascript", "D. React"],
    correctAnswer: "A"
},
{
    question: "What is the language used for functionality in a website?",
    choices: ["A. HTML", "B. CSS", "C. Javascript", "D. React"],
    correctAnswer: "C"
},
{
    question: "What element is used to show a line break?",
    choices: ["A. ol", "B. ul", "C. th", "D. br"],
    correctAnswer: "D"
}
];

const quizForm = document.getElementById("quizForm");
const feedback = document.getElementById("feedback");

let currentQuestionIndex = 0;

//Load initial question
loadQuestion();

//Function to load question
function loadQuestion(){
    const currentQuestion = questions[currentQuestionIndex]

document.getElementById("question").textContent = currentQuestion.question;
document.getElementById("option1").textContent = currentQuestion.choices[0];
document.getElementById("option2").textContent = currentQuestion.choices[1];
document.getElementById("option3").textContent = currentQuestion.choices[2];
document.getElementById("option4").textContent = currentQuestion.choices[3];
}

//Function to handle form submission
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        feedback.textContent = "Please select an answer";
        return;
    }

    const answer = selectedAnswer.value;

    if (answer === questions[currentQuestionIndex].correctAnswer) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect. The correct answer is " + questions[currentQuestionIndex].correctAnswer;
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(function() {
            loadQuestion();
            feedback.textContent = "";
        }, 1500); // Load next question after 1.5 seconds
    } else {
        setTimeout(function() {
            feedback.textContent = "Quiz Completed!";
        }, 1500); // Show quiz completion message after 1.5 seconds
    }

    // Clear selection
    selectedAnswer.checked = false;
});





// function checkAnswer(userAnswer) {
//     if (userAnswer === question1.answer)
//     {
//         alert("Correct!");
//     }
//     else
//      {
//         alert("Sorry, that's not correct.");
//     }
// }

// let score = 0;

// function checkAnswer(userAnswer) {
//     if (userAnswer === question1.answer) {
//         alert("Correct!");
//         score = score + 1;
//     }
//     else {
//         alert("Sorry, that's not correct.");
//     }
// }

// function nextQuestion(question) {
//     document.getElementById("question").innerText = question.question;
//     document.getElementById("option1").innerText = question.options[0];
//     document.getElementById("option2").innerText = question.options[1];
//     document.getElementById("option3").innerText = question.options[2];
//     document.getElementById("option4").innerText = question.options[3];
// }

// let currentQuestion = 0;

// function checkAnswer(userAnswer) {
//     if (userAnswer === questions[currentQuestion].answer) {
//         alert("Correct!");
//         score = score + 1;
//     } else {
//         alert("Sorry, that's not correct.");
//     }

//     currentQuestion = currentQuestion + 1;
//     nextQuestion(questions[currentQuestion]);
// }

 


// const questions = [
//     {
//         question1: "What is the language used to style a website?",
//         choices: ["A. HTML", "B. CSS", "C. Javascript", "D. React "],
//         correctAnswer: "B."
//     },
//     {
//         question2: "What is the language used to show the skeleton of a website?",
//         choices: ["A. HTML", "B. CSS", "C. Javascript", "D. React "],
//         Answer: "A."
//     },
//     {
//         question3: "What is the language used for functionality in a website?",
//         choices: ["A. HTML", "B. CSS", "C. Javascript", "D. React "],
//         correct: "C."
//     },
//     {
//     question4: "What element is used to show a line break?",
//     choices: ["A. ol", "B. ul", "C. th", "D. br"],
//     correct: "D."
//     }
// ];
