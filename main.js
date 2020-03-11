'use strict';

const head = document.querySelector ('.head')
const oldFace = document.querySelector ('#old__Face')
const newFace = document.querySelector ('#new__face');

function wink () {
    oldFace.classList.add ('hidden');
    newFace.classList.remove ('hidden');
}

function stopWink () {
    oldFace.classList.remove ('hidden');
    newFace.classList.add ('hidden');
}

head.addEventListener('click', wink)
head.addEventListener('mouseleave', stopWink)