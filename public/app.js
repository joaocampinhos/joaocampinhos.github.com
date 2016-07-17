'use strict';

/* eslint no-console: ["error", { allow: ["log", "warn"] }] */
/* eslint max-len: ["error", { "ignoreComments": true }] */

var elements = document.querySelectorAll('nav a');
Array.prototype.forEach.call(elements, function (el) {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('nav').classList.remove('slideInDown');
    document.querySelector('nav').classList.add('slideOutUp');
    window.setTimeout(function () {
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
*/

var width = void 0;
var height = void 0;
var largeHeader = void 0;
var canvas = void 0;
var ctx = void 0;
// let target;
var points = [];

/*
class Circle {
  constructor(x, y, rad, color, alpha) {
    this.x = x;
    this.y = y;
    this.radius = rad;
    this.color = 'rgba(255,255,255';
    this.alpha = alpha;
  }

  animate() {
    this.alpha = Math.random();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `${this.color} , ${this.alpha})`;
    ctx.fill();
  }
}
*/

function initHeader() {
  var dpi = document.getElementById('testdiv').offsetWidth * window.devicePixelRatio;
  var scaleFactor = dpi / 96;

  width = Math.ceil(window.innerWidth * scaleFactor);
  height = Math.ceil(window.innerHeight * scaleFactor);
  // target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  largeHeader = document.getElementById('large-header');
  largeHeader.style.height = window.innerHeight + 'px';

  canvas = document.getElementById('canvas');

  canvas.style.width = window.innerWidth;
  canvas.style.height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  ctx = canvas.getContext('2d');
  // ctx.scale(scaleFactor, scaleFactor);

  // Criar pontos
  /*
  const inc = 30;
  for (let i = 0; i < width; i += inc) {
    for (let j = 0; j < height; j += inc) {
      const x = Math.round(Math.random() * inc + i);
      const y = Math.round(Math.random() * inc + j);
      points.push(new Circle(x, y, 2, Math.random()));
    }
  }
  for (const e of points) {
    e.draw();
  }
  */

  // console.log(points);

  // tang.push(new Circle(target.x, target.y, 60, '#58fd71'));
  // tang.push(new Circle(target.x, target.y, 1, '#1b1b1b'));
  // tang.push(new Circle(target.x, target.y, 1, '#58fd71', true));
  // tang.push(new Circle(target.x, target.y, 1, '#58fd71', true));
  // tang.push(new Line(target.x + 100, target.y - 100, target.x - 100, target.y + 100, '#fcd060'));
}

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;

      e.animate();
      e.draw();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  requestAnimationFrame(animate);
}

function initAnimation() {
  animate();
  // for(var i in points) {
  // shiftPoint(points[i]);
  // }
}

// Main
// addListeners();
initHeader();
initAnimation();
/*
// create points

// for each point find the 5 closest points
for(var i = 0; i < points.length; i++) {
var closest = [];
var p1 = points[i];
for(var j = 0; j < points.length; j++) {
var p2 = points[j];
if(!(p1 === p2)) {
var placed = false;
for(var k = 0; k < 5; k++) {
if(!placed) {
if(closest[k] === undefined) {
closest[k] = p2;
placed = true;
}
}
}

for(var k = 0; k < 5; k++) {
if(!placed) {
if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
closest[k] = p2;
placed = true;
}
}
}
}
}
p1.closest = closest;
}

// assign a circle to each point
for(let i in points) {
var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
points[i].circle = c;
}
}

// Event handling
function addListeners() {
if(!('ontouchstart' in window)) {
window.addEventListener('mousemove', mouseMove);
}
window.addEventListener('scroll', scrollCheck);
window.addEventListener('resize', resize);
}

function mouseMove(e) {
var posy = 0;
var posx = 0;
if (e.pageX || e.pageY) {
posx = e.pageX;
posy = e.pageY;
}
else if (e.clientX || e.clientY)    {
posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
}
target.x = posx;
target.y = posy;
}

function scrollCheck() {
if(document.body.scrollTop > height) animateHeader = false;
else animateHeader = true;
}

function resize() {
width = window.innerWidth;
height = window.innerHeight;
largeHeader.style.height = height+'px';
canvas.width = width;
canvas.height = height;
}

// animation
function initAnimation() {
  animate();
  for(var i in points) {
    shiftPoint(points[i]);
  }
}


function shiftPoint(p) {
  TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
      y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
      onComplete: function() {
      shiftPoint(p);
      }});
}

*/

function randomString(s) {
  var res = '';
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== ' ') res += Math.floor(Math.random() * 10);else res += ' ';
  }
  return res.split('');
}

function solve(s, t) {
  var res = randomString(s);
  console.log(res);

  var _loop = function _loop(i) {
    console.log('x');
    var counter = 0;
    var si = setInterval(function () {
      if (s[i] !== ' ') {
        res[i] = Math.floor(Math.random() * 10);
        console.log(res.join(''));
      }

      counter++;
      if (counter === 10) {
        clearInterval(si);
        res[i] = s[i];
        console.log(res.join(''));
      }
    }, 100);
  };

  for (var i = 0; i < res.length; i++) {
    _loop(i);
  }
}

solve('João Campinhos', 10);