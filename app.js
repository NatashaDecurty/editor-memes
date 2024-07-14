//secciones

const btnImg = document.getElementById('btn-img');
const btnText = document.getElementById('btn-text');
const sectEditor = document.getElementById('sect-editor');
const sideText = document.getElementById('side-text');

const appearText = function () {
    sectEditor.classList.add('hidden');
}
const appearImg = function () {
    sectEditor.classList.remove('hidden');
}
let showText = function () {
    sideText.classList.remove('side-text');
}
let hideText = function () {
    sideText.classList.add('side-text');
}


btnText.addEventListener('click', appearText);
btnImg.addEventListener('click', appearImg);

btnText.addEventListener('click', showText);
btnImg.addEventListener('click', hideText);

//Modo oscuro

const toggle = document.getElementById('btn-dark');
const nav = document.getElementById('nav');
const main = document.querySelector('main');
const sideBar = document.querySelector('#side-bar');

const colorCambio = function () {
    nav.classList.toggle('active');
    main.classList.toggle('active2');
    sideBar.classList.toggle('active3');
}

toggle.addEventListener('click', colorCambio);

// función

const urlText = document.getElementById('url-text');
const memeImg = document.getElementById('meme-img');

function actualizarImagen(event) {
    console.log(event.target.value);
    if (event.target.value.length !== 0) {
        memeImg.style.backgroundImage = `url(${event.target.value})`;
    }
}

urlText.addEventListener('input', actualizarImagen)







