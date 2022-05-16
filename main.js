function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("far.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("end.wav");
	mario_kick=loadSound("kil.wav");
	mario_die=loadSound("die.wav");
	setSprites();
	MarioAnimation();
}
function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('cheatpanel');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function draw() {
	game();
}
function modelLoaded() {
	console.log('Model Loaded!');
}
function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + ", noseY = " + noseY);
	}
}