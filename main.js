noseX = 0;

noseY = 0;

difference = 0;

rightWristX = 0;

leftWristX = 0;

function setup() {

 canvas = createCanvas(500,500);

 canvas.position(750,115);

 video = createCapture(VIDEO);

 video.size(550,500);

 video.position(100,115);

 poseNet = ml5.poseNet( video , modalLoaded);

 poseNet.on("pose" , gotPoses);

}

function modalLoaded() {

 console.log("PoseNet Is Initialized");

}

function gotPoses(results) {

 if(results.length > 0) {

  console.log(results);

  noseX = results[0].pose.nose.x;

  noseY = results[0].pose.nose.y;

  console.log("Nose X = " + noseX);

  console.log("Nose Y = " + noseY);

  leftWristX = results[0].pose.leftWrist.x;

  rightWristX = results[0].pose.rightWrist.x;

  difference = floor(leftWristX - rightWristX);

  console.log("Left Wrist = " + leftWristX);

  console.log("Right Wrist = " + rightWristX);

  console.log("Difference = " + difference);

 }

}

function draw() {

 document.getElementById("font_size").innerHTML = "Font size = " + 
 
 difference;
 
 background("grey");

 fill("aqua");

 stroke("black");

 textSize(difference);

 text("Arjun R Pai" , noseX ,noseY);

}