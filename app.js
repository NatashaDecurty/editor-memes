// descarga
const btnDownload = document.getElementById('btn-download');
const memeView = document.getElementById('meme-view');

function downloadMeme () {
    domtoimage.toBlob(memeView).then(function (blob) {
        saveAs(blob, "mi-meme.png")
    }
        )
}

btnDownload.addEventListener('click', downloadMeme);

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

    if (event.target.value.length !== 0) {
        memeImg.style.backgroundImage = `url(${event.target.value})`;
    }
}

urlText.addEventListener('input', actualizarImagen)

//fondo color img

const colorBack = document.getElementById('color-back');
const blendMode = document.getElementById('blend-mode-color');


const chooseColor = function (e) {
    blendMode.innerText = e.target.value.toUpperCase()
    memeImg.style.backgroundColor = e.target.value
    }

colorBack.addEventListener('input', chooseColor)

// filtros img


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


// TEXTO

let topTextImput = document.getElementById('top-text');
let bottomTextImput = document.getElementById('bottom-text');
const topText = document.getElementById('meme-txt-top');
const bottomText = document.getElementById('meme-txt-bottom');
const checkTop = document.getElementById('no-top-text');
const checkBottom = document.getElementById('no-bottom-text');

//1

function crearTexto(e) {
    topText.innerText = topTextImput.value
    bottomText.innerText = bottomTextImput.value
}

topTextImput.addEventListener('input', crearTexto);
bottomTextImput.addEventListener('input', crearTexto);

const noText = () => {
    if (checkTop.checked) {
        topText.classList.add('hidden')
    } else {
        topText.classList.remove('hidden')
    }

    if (checkBottom.checked) {
        bottomText.classList.add('hidden')
    } else {
        bottomText.classList.remove('hidden')
    }
}

checkTop.addEventListener('change', noText);
checkBottom.addEventListener('change', noText);


//2 font

const fontSelect = document.getElementById('txt-font-type');
const sizeFont = document.getElementById('size-font');
const sideLeftBtn = document.getElementById('side-left-btn');
const sideCenterBtn = document.getElementById('side-center-btn');
const sideRightBtn = document.getElementById('side-right-btn');

const changeFont = () => {
    const font = fontSelect.value
    topText.style.fontFamily = font
    bottomText.style.fontFamily = font
}

const changeSize = () => {

    const size = sizeFont.value;

    topText.style.fontSize = `${size}px`;
    bottomText.style.fontSize = `${size}px`;
}

const alignText = (align) => {
    topText.style.textAlign = align
    bottomText.style.textAlign = align
}

fontSelect.addEventListener('change', changeFont)

sizeFont.addEventListener('change', changeSize)

sideLeftBtn.addEventListener('click', () => alignText('left'))
sideCenterBtn.addEventListener('click', () => alignText('center'))
sideRightBtn.addEventListener('click', () => alignText('Right'))

// color txt

const colorTxt = document.getElementById('txt-color-choose');
const txtColorValue = document.getElementById('txt-color-value');
const backColorTxt = document.getElementById('txt-background-color-choose');
const backTxtColorValue = document.getElementById('b-txt-color-value');
const checkBackColor = document.getElementById('txt-no-background-check');


const changeTxtColor = () => {
    const color = colorTxt.value.toUpperCase()

    txtColorValue.innerText = color
    topText.style.color = color
    bottomText.style.color = color
}

const changeBackTxtColor = () => {
    if (!checkBackColor.checked) {
        const color = backColorTxt.value

        backTxtColorValue.innerText = color.toUpperCase()
        topText.style.backgroundColor = color
        bottomText.style.backgroundColor = color
    } else {
        topText.style.backgroundColor = 'transparent'
        bottomText.style.backgroundColor = 'transparent'
    }
}
colorTxt.addEventListener('input', changeTxtColor)
backColorTxt.addEventListener('input', changeBackTxtColor)
checkBackColor.addEventListener('change', changeBackTxtColor)

// contornos

const outNone = document.getElementById('no-contour-btn');
const outWhite = document.getElementById('light-contour-btn');
const outBlack = document.getElementById('dark-contour-btn');

const noOutline = function () {
    topText.style.textShadow = 'none'
    bottomText.style.textShadow = 'none'
}
const lightOutline = function () {
    topText.style.textShadow = '0 0 3px #FFFFFF, 0 0 5px #FFFFFF'
    bottomText.style.textShadow = '0 0 3px #FFFFFF, 0 0 5px #FFFFFF'
}
const darkOutline = function () {
    topText.style.textShadow = '0 0 3px #000000, 0 0 5px #000000'
    bottomText.style.textShadow = '0 0 3px #000000, 0 0 5px #000000'
}

outNone.addEventListener('click', noOutline)
outWhite.addEventListener('click', lightOutline)
outBlack.addEventListener('click', darkOutline)

// espaciado

const spaceInput = document.getElementById('padding-txt');

const makeSpace = () => {
    const padding = spaceInput.value;
    topText.style.padding = `${padding}px`;
    bottomText.style.padding = `${padding}px`;
}

  spaceInput.addEventListener('input', makeSpace)

  //interlineado

  const lineSpace = document.getElementById('interlineado-txt');

const makeLineH = function(e) {
    topText.style.lineHeight = e.target.value
    bottomText.style.lineHeight = e.target.value
}

lineSpace.addEventListener('input', makeLineH)