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

// función imagen

const urlText = document.getElementById('url-text');
const memeImg = document.getElementById('meme-img');

function actualizarImagen(event) {
    console.log(event.target.value);
    if (event.target.value.length !== 0) {
        memeImg.style.backgroundImage = `url(${event.target.value})`;
    }
}

urlText.addEventListener('input', actualizarImagen)

//fondo color

const colorBack = document.getElementById('color-back');
const blendMode = document.getElementById('blend-mode-color');


const chooseColor = function (e) {
    blendMode.innerText = e.target.value.toUpperCase()
    memeImg.style.backgroundColor = e.target.value
    }

colorBack.addEventListener('input', chooseColor)

// filtros

// *poner color fffhfhf

let brillo = document.getElementById('brillo');
let opacidad = document.getElementById('opacidad');
let contraste = document.getElementById('contraste');
let desenfoque = document.getElementById('desenfoque');
let grises = document.getElementById('grises');
let sepia = document.getElementById('sepia');
let hueR = document.getElementById('hue-r');
let saturado = document.getElementById('saturado');
let negativo = document.getElementById('negativo');
let resetFilters = document.getElementById('reset-filters');

brillo.addEventListener('input', function(e) {
    let brightness_value = e.target.value
    memeImg.style.filter = `brightness(${brightness_value})`
})

opacidad.addEventListener('input', function(e) {
    let opacity_value = e.target.value
    memeImg.style.filter = `opacity(${opacity_value})`
})

contraste.addEventListener('input', function(e) {
    let contrast_value = e.target.value
    memeImg.style.filter = `contrast(${contrast_value}%)`
})

desenfoque.addEventListener('input', function(e) {
    let blur_value = e.target.value
    memeImg.style.filter = `blur(${blur_value}px)`
})

grises.addEventListener('input', function(e) {
    let grayscale_value = e.target.value
    memeImg.style.filter = `grayscale(${grayscale_value}%)`
})

sepia.addEventListener('input', function(e) {
    let sepia_value = e.target.value
    memeImg.style.filter = `sepia(${sepia_value}%)`
})

hueR.addEventListener('input', function(e) {
    let hue_rotate_value = e.target.value
    memeImg.style.filter = `hue-rotate(${hue_rotate_value}deg)`
})

saturado.addEventListener('input', function(e) {
    let saturate_value = e.target.value
    memeImg.style.filter = `saturate(${saturate_value}%)`
})

negativo.addEventListener('input', function(e) {
    let invert_value = e.target.value
    memeImg.style.filter = `invert(${invert_value})`
})

const reestablecerFiltros = () => {
    brillo.value = 1
    opacidad.value = 1
    contraste.value = 100
    desenfoque.value = 0
    grises.value = 0
    sepia.value = 0
    hueR.value = 0
    saturado.value = 100
    negativo.value = 0
  }

  resetFilters.addEventListener('click', reestablecerFiltros)






