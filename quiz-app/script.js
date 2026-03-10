const questions = [

{
question:"HTML nimani anglatadi?",
answers:["Hyper Text Markup Language","High Tool Machine Language","Home Tool Markup Language","Hyper Transfer Machine Language"],
correct:0
},

{
question:"CSS nima uchun ishlatiladi?",
answers:["Design berish","Database yaratish","Server boshqarish","API yozish"],
correct:0
},

{
question:"JavaScript qayerda ishlaydi?",
answers:["Brauzerda","Printerda","Database da","Server BIOS da"],
correct:0
},

{
question:"DOM nima?",
answers:["Document Object Model","Database Object Model","Display Object Method","Data Object Map"],
correct:0
},

{
question:"Git nima?",
answers:["Version control system","Programming language","Database","Framework"],
correct:0
},

{
question:"API nima?",
answers:["Application Programming Interface","Advanced Programming Internet","Automatic Program Input","Application Process Internet"],
correct:0
},

{
question:"let nimani bildiradi?",
answers:["Variable yaratish","Function yaratish","Loop yaratish","Array yaratish"],
correct:0
},

{
question:"const nima?",
answers:["O'zgarmas variable","Function","Loop","Class"],
correct:0
},

{
question:"Frontend developer qaysi texnologiyalar bilan ishlaydi?",
answers:["HTML CSS JavaScript","Python Django","Java Spring","C++"],
correct:0
},

{
question:"LocalStorage nima?",
answers:["Browser storage","Server database","Cloud storage","Operating system memory"],
correct:0
}

];

let index = 0;
let score = 0;
let time = 15;
let timer;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreText = document.getElementById("score");
const progress = document.getElementById("progress");
const timeText = document.getElementById("time");
const bestScoreText = document.getElementById("bestScore");

function loadQuestion(){

clearInterval(timer);

time = 15;

timeText.innerText = time;

timer = setInterval(()=>{
time--;
timeText.innerText = time;

if(time === 0){
nextQuestion();
}

},1000);

let q = questions[index];

question.innerText = q.question;

answers.innerHTML = "";

q.answers.forEach((a,i)=>{

let btn = document.createElement("button");

btn.innerText = a;

btn.onclick = ()=> checkAnswer(i);

answers.appendChild(btn);

});

progress.style.width = ((index+1)/questions.length)*100 + "%";

}

function checkAnswer(i){

if(i === questions[index].correct){
score++;
}

nextQuestion();

}

function nextQuestion(){

clearInterval(timer);

index++;

if(index < questions.length){

loadQuestion();

}else{

finishQuiz();

}

}

function finishQuiz(){

question.innerText = "Quiz Finished";

answers.innerHTML = "";

scoreText.innerText = "Score: " + score + " / " + questions.length;

nextBtn.style.display = "none";

let best = localStorage.getItem("bestScore") || 0;

if(score > best){
localStorage.setItem("bestScore",score);
best = score;
}

bestScoreText.innerText = "Best Score: " + best;

}

restartBtn.onclick = ()=>{

index = 0;
score = 0;

nextBtn.style.display = "block";

scoreText.innerText = "";

loadQuestion();

};

loadQuestion();