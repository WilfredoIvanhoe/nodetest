console.log('starting shit');
var sliderDiv=document.getElementById('slider');
var stringImgArray = ["i.imgur.com/I1iEkqR.jpg","i.imgur.com/2AnKSTU.png","i.imgur.com/jFDrBNG.jpg","i.imgur.com/7egnnyd.jpg","i.imgur.com/u9DjHzE.png","i.imgur.com/3HrL3ml.png","i.imgur.com/8LaD2H9.png","i.imgur.com/GJwM3VG.png","i.imgur.com/F9d17bZ.png","i.imgur.com/5Q356uA.png","i.imgur.com/TnDo4lM.png","i.imgur.com/0IY0Rqc.jpg","i.imgur.com/y4B5rfE.png","i.imgur.com/dHCotWt.png","i.imgur.com/0RkmhQO.png","i.imgur.com/usyxxWv.png","i.imgur.com/BrjQ2As.jpg "];
var imgArray={
    'img':[]
};    
for(var i=0;i<stringImgArray.length;i++){      
    imgArray.img.push({"link":"http://"+stringImgArray[i]});
    var imgDOM=document.createElement("img");
    imgDOM.src=imgArray.img[i].link;
    imgDOM.style.maxHeight="400px";
    sliderDiv.appendChild(imgDOM);
    //document.getElementById("div2").appendChild(imgDOM);
}

var slider = new IdealImageSlider.Slider({
    selector: '#slider',
    height: 700, // Required but can be set by CSS
    interval: 4000,
});
slider.start(); 