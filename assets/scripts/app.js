/* eslint no-console: ["error", { allow: ["log", "warn"] }] */
/* eslint max-len: ["error", { "ignoreComments": true }] */

console.log(`
OwO What's This?
         .
        /'
       //
   .  //
   |\\//7
  /' " \
 .   . .
 | (    \\     '._
 |  '._  '    '. '
 /    \\'-'_---. ) )
.              :.'
|               \\
| .    .   .     .
' .    |  |      |
 \\^   /_-':     /
 / | |    '\\  .'
/ /| |     \\\\  |
\\ \\( )     // /
 \\ | |    // /
  L! !   // /
   [_]  L[_|
`);

const colors = {
  Home: 'washed-blue',
  Work: 'navy',
  Writing: 'dark-gray',
  Contact: 'washed-red',
};

function onScroll() {
  const elems = document.querySelectorAll('nav a');
  elems.forEach((el) => {
    const sect = document.querySelectorAll(el.getAttribute('href'))[0];
    const pos = sect.getBoundingClientRect();
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (pos.top <= 0 && pos.top > -h) {
      const title = el.getAttribute('title');
      const c = Object.keys(colors).map(a => colors[a]);
      elems.forEach(elem => elem.classList.remove(...c));
      elems.forEach(elem => elem.classList.add(colors[title]));
      el.classList.add('b');
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
