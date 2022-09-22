const startBtn = document.getElementById('start');
let timeLeft = document.getElementById('timer');
let time = 5;
const End = 
//change to 60 after testing


startBtn.addEventListener('click',startQuiz);

function timerFunction(){
    time--
    timeLeft.textContent=time
    console.log(time)
    if(timeLeft==0){
        timeLeft = clearInterval(timerFunction)
        timeLeft.textContent=('Game Over')
    }
};

//clearInterval, if statement syntax

function startQuiz(){
    setInterval(timerFunction, 1000)
    // clearInterval(timerFunction, 5000)
};

