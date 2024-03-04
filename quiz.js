let question1 = {
    question: "What is the language used to style a website?",
    options : ["HTML", "CSS", "Javascript", "React"],
    answer: "CSS"
};

document.getElementById("question").innerText = question1.question;
document.getElementById("option1").innerText = question1.options [0];
document.getElementById("option2").innerText = question1.options [1];
document.getElementById("option3").innerText = question1.options [2];
document.getElementById("option4").innerText = question1.options [3];

function checkAnswer(userAnswer) {
    if (userAnswer === question1.answer)
    {
        alert("Correct!");
    }
    else
     {
        alert("Sorry, that's not correct.");
    }
}

let score = 0;

function checkAnswer(userAnswer) {
    if (userAnswer === question1.answer) {
        alert("Correct!");
        score = score + 1;
    }
    else {
        alert("Sorry, that's not correct.");
    }
}

function nextQuestion(question) {
    document.getElementById("question").innerText = question.question;
    document.getElementById("option1").innerText = question.options[0];
    document.getElementById("option2").innerText = question.options[1];
    document.getElementById("option3").innerText = question.options[2];
    document.getElementById("option4").innerText = question.options[3];
}

let currentQuestion = 0;

function checkAnswer(userAnswer) {
    if (userAnswer === questions[currentQuestion].answer) {
        alert("Correct!");
        score = score + 1;
    } else {
        alert("Sorry, that's not correct.");
    }

    currentQuestion = currentQuestion + 1;
    nextQuestion(questions[currentQuestion]);
}





































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




const quizForm = document.getElementById("quizForm");
const feedback = document.getElementById("feedback");

let currentQuestionIndex = 0;