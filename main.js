function preload()
{}

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
      console.log("Your noses x coordinate is" + results[0].pose.nose.x);
      console.log("Your noses y coordinate is" + results[0].pose.nose.y);
  }
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function modelLoaded()
{
    console.log("THEY ARE TRACKING YOUR BODY");
}

function take_snapshot()
{
    save("me_as_a_clown.png");
}