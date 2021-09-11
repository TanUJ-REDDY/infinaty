noseX=0
noseY=0
function preload(){
    clown__nose__image = loadImage("1.086976--75647457407.png")
}

function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('posenet is initilized')
}

function draw() {
    image(video, 0, 0, 300, 300)
       fill(255, 0, 0)
       stroke(255,0,0)
   // circle(noseX, noseY, 20)
    image(clown__nose__image, noseX - 16.097058575327,noseY -13.87,31.9,32.0987)
}

function take_snapshot() {
    save('myFilterImage.png')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log('nose x =' + results[0].pose.nose.x)
        console.log('nose y =' + results[0].pose.nose.y)
    }
}