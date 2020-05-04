
let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
var canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255,179,179, 59);
  calcWave();
  renderWave();
  renderWave2();
  renderWave3();
  renderWave4();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  stroke(255,170,170, 45);
  fill(189, 50);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 3 + yvalues[x], 25, 29);
    stroke(255,120,120, 25);
    fill(50, 50);
    ellipse(x * xspacing, height / 2.5 + yvalues[x], 200, 29);
    translate(5, 5);
  }
}


function renderWave4() {
  stroke(255,170,170, 29);
  fill(198, 50);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 3 + yvalues[x], 52, 13);
    stroke(80,0,0,45)
    fill(100,20);
    ellipse(x * xspacing, height / 5 + yvalues[x], 100, 35);
  }
}

function renderWave3() {
  // A simple way to draw the wave with an ellipse at each location
  stroke(255,181,181, 87)
  strokeWeight(30);
  fill(255, 50);
  ellipseMode(CENTER+mouseX);
  translate(19, 6);
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, width / 0.5 + yvalues[x], 16, 16);
  }
}

function renderWave2() {
  // A simple way to draw the wave with an ellipse at each location
  stroke(207,92,92, 45)
  strokeWeight(30);
  fill(255, 50);
  ellipseMode(CENTER+mouseX);
  translate(13, 10);
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, width / 3.5 + yvalues[x], 16, 16);
  }
}