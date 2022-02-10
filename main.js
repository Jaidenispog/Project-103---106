function start(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CtsyVT5hu/model.json', modelLoaded);

}

function modelLoaded(){

    console.log("Your Model Has Been Loaded!");
    classifier.classify(gotResults);
}

function gotResults(error, results) {

    console.log('Got Result');
    

}