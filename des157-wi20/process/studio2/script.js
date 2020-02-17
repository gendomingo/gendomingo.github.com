'use strict';
console.log('reading js');
var closeOne=document.querySelector('#closeOne');
var closeTwo=document.querySelector('#closeTwo');
var closeThree=document.querySelector('#closeThree');

var topSpot=document.querySelector('#topSpot');
var rightSpot=document.querySelector('#rightSpot');
var leftSpot=document.querySelector('#leftSpot');

var overlay = document.querySelector('#overlay');
var overlayTwo = document.querySelector('#overlayTwo');
var overlayThree = document.querySelector('#overlayThree');

topSpot.addEventListener('click', function() {
  overlay.style.display = 'block';
}, false);
closeOne.addEventListener('click', function() {
  overlay.style.display = 'none';
}, false);

leftSpot.addEventListener('click', function() {
  overlayTwo.style.display = 'block';
}, false);
closeTwo.addEventListener('click', function() {
  overlayTwo.style.display = 'none';
}, false);

rightSpot.addEventListener('click', function() {
  overlayThree.style.display = 'block';
}, false);
closeThree.addEventListener('click', function() {
  overlayThree.style.display = 'none';
}, false);
