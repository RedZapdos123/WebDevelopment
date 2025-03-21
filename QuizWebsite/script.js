//The questions set.
let questions = [
    {question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris"},
    {question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    {question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars"}
];

//Global variables to keep track of the score and question number.
let currentQ = 0;
let score = 0;

//The load question function display the question and calculate the result after the Quiz is over.
function loadQuestion(){
    if(currentQ < questions.length){
        let q = questions[currentQ];
        document.getElementById("question").textContent = q.question;

        let optionsHTML = "";
        q.options.forEach(option => {
            optionsHTML += `<button class="option" onclick="checkAnswer('${option}')">${option}</button>`;
        });

        document.getElementById("options").innerHTML = optionsHTML;
    } 
    else{
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").textContent = `The quiz is over. Your score is: ${score}/${questions.length}`;
    }
}

//The answer check function.
function checkAnswer(selected){
    if(selected === questions[currentQ].answer){
        score++;
    }
    currentQ++;
    loadQuestion();
}

//The next question function to display the next question.
function nextQuestion(){
    loadQuestion();
}

loadQuestion();
