
function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/x9TfA1pyf/model.json',modelReady);
}

function modelReady(){
classifier.classify(gotResults);

}
function gotResults(error,results){
if (error) {
console.error(error);
} else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) +1;
    random_number_g = Math.floor(Math.random() * 255) +1;
    random_number_b = Math.floor(Math.random() * 255) +1;
    document.getElementById("result_label").innerHTML ='I can hear -'+
    results[0].label;
    document.getElementById("result_confidence").innerHTML ='Accuracy -'+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color ="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color ="rgb("+random_number_r+","+random_number_g+","+random_number_b+")" ; 
    
    img= document.getElementById('alien1');
    img1=document.getElementById('alien2');
    img2=document.getElementById('alien3');
    img3=document.getElementById('alien4');

    if(results[0].label=="clap") {
    img.src = 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/download.jpg';
    img1.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/8581a0042b227770fdbea1f602df54e9.png';
    img2.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/48a33f1c527fd4be63b317fa1707af99.png';
    img3.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/OIP (3).jpg';
    }
    else if (results[0].label =="Bell") {
        img.src = 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/download.jpg';
        img1.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/8581a0042b227770fdbea1f602df54e9.png';
        img2.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/48a33f1c527fd4be63b317fa1707af99.png';
        img3.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/OIP (3).jpg';


    }
  else if (results[0].label== "Snapping") {
    img.src = 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/download.jpg';
    img1.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/8581a0042b227770fdbea1f602df54e9.png';
    img2.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/48a33f1c527fd4be63b317fa1707af99.png';
    img3.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/OIP (3).jpg';



  }
  else{
    img.src = 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/download.jpg';
    img1.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/8581a0042b227770fdbea1f602df54e9.png';
    img2.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/48a33f1c527fd4be63b317fa1707af99.png';
    img3.src= 'Sound_controlled_aliens-20230812T172623Z-001/Sound_controlled_aliens/OIP (3).jpg';



  }



    }
    
    
    
    
    

}






