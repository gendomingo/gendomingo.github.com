'use strict';
console.log('reading js');
var closeOne=document.querySelector('#closeOne');
var closeTwo=document.querySelector('#closeTwo');
var closeThree=document.querySelector('#closeThree');

var top=document.querySelector('#top');
var right=document.querySelector('#right');
var left=document.querySelector('#left');

var itemOne = document.querySelector('#itemOne');
var itemTwo = document.querySelector('#itemTwo');
var itemThree = document.querySelector('#itemThree');

top.addEventListener('click', function() {
  itemOne.style.display = 'block';
}, false);
closeOne.addEventListener('click', function() {
  itemOne.style.display = 'none';
}, false);

left.addEventListener('click', function() {
  itemTwo.style.display = 'block';
}, false);
closeTwo.addEventListener('click', function() {
  itemTwo.style.display = 'none';
}, false);

right.addEventListener('click', function() {
  itemThree.style.display = 'block';
}, false);
closeThree.addEventListener('click', function() {
  itemThree.style.display = 'none';
}, false);
