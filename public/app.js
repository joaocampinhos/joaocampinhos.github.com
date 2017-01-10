'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint no-console: ["error", { allow: ["log", "warn"] }] */
/* eslint max-len: ["error", { "ignoreComments": true }] */

console.log('\nOwO What\'s This?\n         .\n        /\'\n       //\n   .  //\n   |\\//7\n  /\' "  .   . .\n | (    \\     \'._\n |  \'._  \'    \'. \'\n /    \\\'-\'_---. ) )\n.              :.\'\n|               \\\n| .    .   .     .\n\' .    |  |      |\n \\^   /_-\':     /\n / | |    \'\\  .\'\n/ /| |     \\\\  |\n\\ \\( )     // /\n \\ | |    // /\n  L! !   // /\n   [_]  L[_|\n');

var colors = {
  Home: 'washed-blue',
  Work: 'navy',
  Writing: 'dark-gray',
  Contact: 'washed-red'
};

function onScroll() {
  var elems = document.querySelectorAll('nav a');
  elems.forEach(function (el) {
    var sect = document.querySelectorAll(el.getAttribute('href'))[0];
    var pos = sect.getBoundingClientRect();
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (pos.top <= 0 && pos.top > -h) {
      (function () {
        var title = el.getAttribute('title');
        var c = Object.keys(colors).map(function (a) {
          return colors[a];
        });
        console.log(c);
        elems.forEach(function (elem) {
          var _elem$classList;

          return (_elem$classList = elem.classList).remove.apply(_elem$classList, _toConsumableArray(c));
        });
        elems.forEach(function (elem) {
          return elem.classList.add(colors[title]);
        });
        el.classList.add('b');
      })();
    } else {
      el.classList.remove('b');
    }
  });
}

window.addEventListener('scroll', onScroll, true);
onScroll();
/*
const elements = document.querySelectorAll('nav a');
Array.prototype.forEach.call(elements, (el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('nav').classList.remove('slideInDown');
    document.querySelector('nav').classList.add('slideOutUp');
    window.setTimeout(() => {
      location.href = el.getAttribute('href');
    }, 500);
  });
});

/*
window.addEventListener('scroll', () => {
  const top = window.pageYOffset || document.documentElement.scrollTop;
  const hei = document.querySelector('nav').clientHeight / 2;
  if (top + hei >= window.innerHeight) document.querySelector('nav').classList.add('dark');
  else document.querySelector('nav').classList.remove('dark');
});

//set interval for color change
setInterval(function(){colorMate();},5000);


//animate body background using color picker function
function colorMate(){
  $('body').animate({backgroundColor: pickColor()},2000);
}

//declare array of colors to be used when page loads
var colors = [
  '#206BA4',
  '#BBD9EE',
  '#EBF4FA',
  '#C0C0C0',
  '#E7E4D3',
  '#F1EFE2',
  '#52ADDA',
  '#68B8DF',
  '#DBDBDB',
  '#AACD4B',
  '#C5AE87'
];

var curcolor = 0;

//picks random color from array, different from current one
function pickColor(){
  var rand = Math.floor(Math.random() * 11);
  if (rand == curcolor){
    pickColor();
  }
  else {
    curcolor = rand;
    return colors[rand];
  }
}
*/