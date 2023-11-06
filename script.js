let questions = [
    {
        question: "What country has the highest life expectancy? ",
        answers: {
            ans1: "Pakistan",
            ans2: "India",
            ans3: "HongKong",
            ans4: "Canada",
        },
        correct: "HongKong"

    },
    {
        question: "Where would you be if you were standing on the Spanish Steps?",
        answers: {
            ans1: "Rome",
            ans2: "Canada",
            ans3: "Spain",
            ans4: "Australia",
        },
        correct: "Rome"

    },
    {
        question:"Which language has the more native speakers?",
        answers: {
            ans1: "English",
            ans2: "Spanish",
            ans3: "Korean",
            ans4: "German",
        },
        correct: "Spanish"

    },
    {
        question: "What is the most common surname in the United States?",
        answers: {
            ans1: "John",
            ans2: "Smith",
            ans3: "Jordan",
            ans4: "Micheal",
        },
        correct: "Smith"

    },
    {
        question: "What disease commonly spread on pirate ships?",
        answers: {
            ans1: "Scurvy",
            ans2: "Polio",
            ans3: "Influenza",
            ans4: "Measals",
        },
        correct: "Scurvy"

    },
    {
        question: "Which planet has the most moons?",
        answers: {
            ans1: "Saturn",
            ans2: "Jupiter",
            ans3: "Mars",
            ans4: "Venus",
        },
        correct: "Saturn"

    },
    {
        question: "In what country is the Chernobyl nuclear plant located?",
        answers: {
            ans1: "Russia",
            ans2: "Ukrain",
            ans3: "America",
            ans4: "Germany",
        },
        correct: "Ukrain"

    },
    {
        question: "What is the largest Spanish-speaking city in the world?",
        answers: {
            ans1: "Toronto",
            ans2: 'Montreal',
            ans3: "Mexico",
            ans4: "New York",
        },
        correct: "Mexico"

    },
    {
        question: "What software company is headquartered in Redmond, Washington?",
        answers: {
            ans1: "Microsoft",
            ans2: "Silicon Valley",
            ans3: "Meta",
            ans4: "IBM",
        },
        correct: "Microsoft"

    },
    {
        question: "What phone company produced the 3310?",
        answers: {
            ans1: "Nokia",
            ans2: "Samsung",
            ans3: "Vivo",
            ans4: "Apple",
        },
        correct: "Nokia"

    },
]
let currentQuestionIndex = 0;
let score = 0;
let total = questions.length;
start();
function start(){
    currentQuestionIndex = 0;
    score = 0;
    let start = document.querySelector('#start');
    start.addEventListener('click', function(){
        addQuestion();
    });
}
function addQuestion(){
    let quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `<h3>${questions[currentQuestionIndex].question}</h3>`;
    let answers = questions[currentQuestionIndex].answers;

    for(let key in answers){
        let button  = document.createElement('button');
        button.innerText = answers[key];
        button.classList.add('ans');
        quizContainer.append(button);
    }
    checkAns();
    function checkAns(){
        let ansBtns = document.querySelectorAll('.ans');
        for(let i = 0; i<ansBtns.length; i++){
            ansBtns[i].addEventListener('click', function(){
                if(questions[currentQuestionIndex].correct == this.innerText ){
                    score++;
                }
                currentQuestionIndex++;
                if(currentQuestionIndex<questions.length){
                    addQuestion()
                }else{
                    EndGame();
                }
            })

            }
        }
    }

function EndGame(){
    document.querySelector('.quiz-container').innerHTML = `<h3>Score:${score}/${total}</h3>`;
    let button = document.createElement('button');
    button.innerText = "Restart";
    button.id = 'start';
    document.querySelector('.quiz-container').append(button);
    start();
}