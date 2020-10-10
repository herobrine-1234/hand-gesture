Webcam.set
({
height:300,
width:320,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML='<img id="captured_img"src="'+data_uri+'"/>';
}
);
}
console.log("ml5 version: ", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dN86kJ9Pi/',modelLoaded);
function modelLoaded(){
console.log("modelLoaded!");
}
function check()
{img=document.getElementById("captured_img");
classifier.classify(img,gotResult);
}

function gotResult(error,results)
{
if(error)
{
    console.error(error);
}
else{
console.log(result);
document.getElementById("result_handjester_name").innerHTML=results[0].label;
document.getElementById("result_handjester_name2").innerHTML=results[1].label;
if(results[0].label=="look left")
{
document.getElementById("update_handjester").innerHTML="&#9755;";
}
if(results[0].label=="victory")
{
document.getElementById("update_handjester").innerHTML="&#9996;";
}
if(results[0].label=="look right")
{
document.getElementById("update_handjester").innerHTML="&#9754;";
}
if(results[1].label=="look left")
{
document.getElementById("update_handjester2").innerHTML="&#9755;";
}
if(results[1].label=="victory")
{
document.getElementById("update_handjester2").innerHTML="&#9996;;";
}
if(results[1].label=="look right")
{
document.getElementById("update_handjester2").innerHTML="&#9754;"; 
}
}}