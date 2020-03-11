"use strict"

const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

const aboutoverlay = document.querySelector('#aboutoverlay');
const aboutclose = document.querySelector('#aboutclose');

const contactoverlay = document.querySelector('#contactoverlay');
const contactclose = document.querySelector('#contactclose');

about.addEventListener('click', function () {
    aboutoverlay.style.display='block';
})
aboutclose.addEventListener('click', function (){
    aboutoverlay.style.display = 'none';
})

contact.addEventListener('click', function () {
    contactoverlay.style.display='block';
})
contactclose.addEventListener('click', function (){
    contactoverlay.style.display = 'none';
})
