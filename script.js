let canvas, classifier;
function setup() {
  canvas=createCanvas(400, 400);
  background("white");
  canvas.center();
  classifier = ml5.imageClassifier("DoodleNet",modelLoaded);
  canvas.mouseReleased(classifyCanvas);
}
function classifyCanvas(){
  classifier.classify(canvas, gotResult);
}
function gotResult(result){
  console.log(result);
}
function modelLoaded(){
  console.log("The model is loaded");
}

function draw() {
  stroke("green");
  strokeWeight(13);
  if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function clearCanvas(){
  background("white");
}
