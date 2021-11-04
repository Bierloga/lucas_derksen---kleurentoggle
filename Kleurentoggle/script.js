const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', function () {
    menu.classList.remove('disappear')
})

const popUp = function () {
    menu.classList.add('disappear')
    return
}

const orangeItem = document.querySelector('.orange-box');
orangeItem.addEventListener('click', popUp)
orangeItem.addEventListener('click', function () {
    const body = document.querySelector('.body')
    body.classList.add('orange-box')
    body.classList.remove('green-box')
    body.classList.remove('home-box')
    body.classList.remove('red-box')
    body.classList.remove('purple-box')
})
const greenItem = document.querySelector('.green-box');
greenItem.addEventListener('click', popUp);
greenItem.addEventListener('click', function () {
    const body = document.querySelector('.body')
    body.classList.add('green-box')
    body.classList.remove('orange-box')
    body.classList.remove('home-box')
    body.classList.remove('red-box')
    body.classList.remove('purple-box')
})
const homeItem = document.querySelector('.home-box');
homeItem.addEventListener('click', popUp);
homeItem.addEventListener('click', function () {
    const body = document.querySelector('.body')
    body.classList.add('home-box')
    body.classList.remove('green-box')
    body.classList.remove('orange-box')
    body.classList.remove('red-box')
    body.classList.remove('purple-box')
})
const purpleItem = document.querySelector('.purple-box');
purpleItem.addEventListener('click', popUp);
purpleItem.addEventListener('click', function () {
    const body = document.querySelector('.body')
    body.classList.add('purple-box')
    body.classList.remove('green-box')
    body.classList.remove('home-box')
    body.classList.remove('red-box')
    body.classList.remove('orange-box')
})
const redItem = document.querySelector('.red-box');
redItem.addEventListener('click', popUp);
redItem.addEventListener('click', function () {
    const body = document.querySelector('.body')
    body.classList.add('red-box')
    body.classList.remove('green-box')
    body.classList.remove('home-box')
    body.classList.remove('orange-box')
    body.classList.remove('purple-box')
})