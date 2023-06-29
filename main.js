rightWristX = 0;
leftWristX = 0;
rightWristY = 0;
leftWristY = 0;
scoreRightWrist = 0;
scoreleftWrist = 0;
song1 = '';
song2 = '';
song1_status = '';
song2_status = '';
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video, 0, 0, 600, 500);
}
function preload(){
    song1 = loadSound('music.mp3');
    song2 = loadSound('Xenogenesis')
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
    
}