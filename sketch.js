let vid;
let playing = false;
let completion;

let width;
let height;
let bits;

function setup() {
  var canvas = createCanvas(500, 80);
  canvas.center();
  canvas.position();
  vid = createVideo("lyndon-centro-interview.mp4");
  vid.size(400,200);
//   vid.center();
    vid.id('sketch');
  vid.loop()
}

// function draw() {
//   completion = vid.time() / vid.duration();
//   ellipse(completion*width, 50, 10, 10);
// }

function mousePressed() {
  if (!playing) {
    vid.play();
    vid.time((mouseX/width) * vid.duration());
    playing = true;
  }
  else {
    vid.pause();
    playing = false;
  }
}

// MOVE TO CENTER CODE

// This function just adds the class center to the elements, and then the element moves to the center based on the transition speed assigned in CSS
function moveToCenter(element){
  element.classList.add('center');
}

// This function gets all the elements with the class "bits" attached to them and executes the above function on them
window.onload = function(){
  width = window.innerWidth;
  height = window.innerHeight;

  bits = document.querySelectorAll('.bits');

  bits.forEach(bit=>{
    moveToCenter(bit);
  });
}
//my comments down here    vvvvv
//make border-radius of circle bigger
//print out and scan a forced perspective
//phone picture and apply threshold to flatten
//functio in JS 