noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/mrc1xkSL/download-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      noseX = results[0].pose.nose.x - 15;
      noseY = results[0].pose.nose.y - 12;
      console.log("Your noses x coordinate is" + noseX);
      console.log("Your noses y coordinate is" + noseY);
  }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 35, 35);
}

function modelLoaded()
{
    console.log("ThEY aRe TrAcKInG YOuR BOdy");
}

function take_snapshot()
{
    save("me_as_a_clown.png");
}