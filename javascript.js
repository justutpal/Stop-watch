let container = document.querySelector('.container');
let display = document.querySelector('.display');
let miliSecond = document.querySelector(".mili");
let markup = document.querySelector('.markup');
let start = document.querySelector('.start');
let stopIt = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let minute = document.querySelector(".min");
let second = document.querySelector(".sec");
let hour = document.querySelector(".hour");
let par = document.querySelector('.par');
let mili = 0;
let sec = 0;
let min = 0;
let hor = 0;
let clear = ""

// Function starts from here.

markup.addEventListener('click', () => {
    if (second.innerHTML > 0) {
        let paras = document.createElement('p');
        paras.innerText = hor + " : " + min + " : " + sec + " : " + mili;
        container.appendChild(paras)
    }
})

start.addEventListener('click', () => {
    start.style.display = 'none'
    stopIt.style.display = 'inline'
    clear = setInterval(() => {
        mili++
        miliSecond.innerHTML = mili

        if (miliSecond.innerHTML == 99) {
            mili = 0
            sec++
            second.innerHTML = `${sec}`
        }
        if (second.innerHTML == 60) {
            sec = 0
            min++
            minute.innerHTML = min
            if (minute.innerHTML == 60) {
                min = 0
                hor++
                hour.innerHTML = hor
            }
        }
    }, 10)
})

stopIt.addEventListener('click', () => {
    start.style.display = 'inline'
    stopIt.style.display = 'none'
    clearInterval(clear)
})

reset.addEventListener('click', () => {
    location.reload()
})