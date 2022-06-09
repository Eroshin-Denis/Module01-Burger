const startBtn = document.querySelector('#start')
const startBtn2 = document.querySelector('#start2')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#98FB98', '#FFB6C1', '#FFA500', '#F0E68C', '#00BFFF', '#FF4500']
let time = 0
let score = 0
// первый экран
startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
startBtn2.addEventListener('click', (event) => {
    clearInterval(decreaseTime);
  })
// ======================
// второй экран
timeList.addEventListener('click', event => {
    // делегирование проекта
    if (event.target.classList.contains('time-btn')) {
        // преобразуем в число
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        // return event.target()
        createRandomCircle()
        // меняем по клику цвет
        
    }
})
// function setColor(event) {
//     const element = event.target
//     const color = getRandomColor()
// }
function getRandomColor() {
    // return colors[Math.floor(Math.random() * colors.length)]
    // const colors = ['#98FB98', '#FFB6C1', '#FFA500', '#F0E68C', '#00BFFF', '#FF4500']
    // случайный цвет
    colors[Math.floor(Math.random() * colors.length)]
}
// старт игры
function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}
// остановить таймер в конце
function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
    startBtn2.style.display = "inline";
}
// шарик рандомный размер
function createRandomCircle() {
    const circle = document.createElement("div")
    const size = getRandomNumber(10, 60)
    // деструктуризация
    const {width, height} = board.getBoundingClientRect()
// рандомное положение
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
// добавим класс
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    circle.style.background = `red`
    circle.style.background = getRandomColor()
    board.append(circle)
    // рандомный цвет
    
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
// случайные цвета из массива
function getRandomColor() {    
    return colors[Math.floor(Math.random() * colors.length )]
}
function vjii() {
    // if()
}
function winTheGame() {
    function kill() {
    const circle = document.querySelector('.circle')

    if (circle) {
        circle.click()
    }
}
setInterval(kill, 42)
}