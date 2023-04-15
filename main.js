function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        r= Math.floor(Math.random() * 255);
        g= Math.floor(Math.random() * 255);
        b= Math.floor(Math.random() * 255);

        r_label = results[0].label;
        r_acc = (results[0].confidence * 100).toFixed(2);

        document.getElementById("result_label").innerHTML = 'I can hear - '+ r_label;
        document.getElementById("result_confidence").innerHTML = 'confidence - '+ r_acc + '%';
        document.getElementById("result_label").style.color = "rgb("+ r +", "+ g +", "+ b +")";
        document.getElementById("result_confidence").style.color = "rgb("+ r +", "+ g +", "+ b +")";
        
        img1 = document.getElementById("img1");
        img2 = document.getElementById("img2");
        img3 = document.getElementById("img3");
        img4 = document.getElementById("img4");

        if (r_label == "Clap") {
            img1.src = "img1_gif.gif";
            img2.src = "img2.webp";
            img3.src = "img3.png";
            img4.src = "img4.png";
        } else if (r_label == "Bell"){
            img1.src = "img1.webp";
            img2.src = "img2_gif.gif";
            img3.src = "img3.png";
            img4.src = "img4.png";
        }
        else if (r_label == "Snapping"){
            img1.src = "img1.webp";
            img2.src = "img2.webp";
            img3.src = "img3_gif.gif";
            img4.src = "img4.png";
        }
        else{
            img1.src = "img1.webp";
            img2.src = "img2.webp";
            img3.src = "img3.png";
            img4.src = "img4_gif.gif";
        }
    }
}