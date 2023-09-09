const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0;
let correct = 0;
let wrong = 0;
let score = 0;
let total = quizData.length;
let questionBox = document.getElementById('questionBox');
let allInputs = document.querySelectorAll(".ans");

const loadQuestion = (index) => {

    if(total === index) return quizEnd();

    reset();

    let quesNo = quizData[index];
    questionBox.innerText = `(${index+1}) ${quesNo.question}`;
    allInputs[0].nextElementSibling.innerText = quesNo.a;
    allInputs[1].nextElementSibling.innerText = quesNo.b;
    allInputs[2].nextElementSibling.innerText = quesNo.c;
    allInputs[3].nextElementSibling.innerText = quesNo.d;
}

document.querySelector("#btn").addEventListener(
    'click',
    function(){
        let quesNo = quizData[index];
        let storeAnswer = getAnswer();
        if(storeAnswer === quesNo.correct){ 
            correct++; 
            score += 4;
        }
        else { 
            wrong++;
            score += -1;
        }
        index++;
        loadQuestion(index);
    }
)

const getAnswer = () => {
    let submittedAnswer;
    allInputs.forEach(
        (Options) => {
            if(Options.checked) submittedAnswer = Options.value;
        }
    )
    return submittedAnswer;
}

const reset = () => {
    allInputs.forEach(
        (Choice) => {
            Choice.checked=false;
        }
    )
}

const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <br>
        <h2 class="w-100"> Hii, you've scored ${correct} / ${total} </h2>
        <br>
        <h2> You Scored : ${score} </h2>
    </div>
    `
}



loadQuestion(index);
