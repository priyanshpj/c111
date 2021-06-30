Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode: "environment"
    }
});
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img id='identifyThis' src='"+data_uri+"'/>";   
    })
}
classifier=ml5.imageClassifier("MobileNet", modelLoaded)
function modelLoaded(){
    console.log("Model Loaded!")   
}
function check(){
    img=document.getElementById("identifyThis");
    classifier.classify(img, gotresult);
}
function gotresult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("span1").innerHTML=results[0].label+","+results[1].label;
    }
}