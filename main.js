//https://teachablemachine.withgoogle.com/train/audio/
function startClassification() { 
    navigator.mediaDevices.getUserMedia({ audio: true }); 
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/train/audio', modelReady);
 }
 function modelReady(){
 classifier.classify( gotResults);
}

