//fadein fadeout

var search=document.getElementsByClassName('search');
search.onclick=function(){
  search.style.display="block";
}



var indicator = document.getElementById('red-indicator').children;
var relatedProjectSlider = document.getElementById('related-projects-slide').children;
var something = document.getElementById('indicators');

var currentRelatedProject = relatedProjectSlider[0];
var indicatorList = indicator[0].children; 

var ulCounter = 0;
var counter = 0;
var relatedCounter =0;
var currentIndicator = indicatorList[0];

// -------------------fade----------
function fade(direction){
	fadeout(currentRelatedProject);
		relatedCounter += direction;
	if(direction == -1 && relatedCounter<0){
		relatedCounter = relatedProjectSlider.length-1;
	}
	if(direction == 1 && relatedCounter> relatedProjectSlider.length-1)
	{
		relatedCounter = 0;
	}
	currentRelatedProject = relatedProjectSlider[relatedCounter];
	//unfade(currentRelatedProject);
  setTimeout(function(){ currentRelatedProject.classList.add("active");
	 currentRelatedProject.style.opacity=1;
	 currentRelatedProject.style.display="block";
}, 1000);

}

// fade arrow keys
document.getElementById('left-fade').addEventListener('click', function () {
    	fade(-1);
    });
document.getElementById('right-fade').addEventListener('click', function () {
    	fade(1);
    });

function fadeout(element) {
    var op = 1; 
    var newelement = element; // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
        	currentRelatedProject.classList.remove("active");

            clearInterval(timer);
            newelement.style.display="none";
        }
        element.style.opacity = op;
        op -= op * 0.12;
    }, 50);

}

// image slider----------------------------------------------------

var that=this;
  var leftSlideControl = document.getElementById('leftControl');
  var rightSlideControl = document.getElementById('rightControl');
  var leftSlideContent = document.getElementById('left-slide-content');
  var rightSlideContent = document.getElementById('right-slide-content');
    var donec = document.getElementById('donec');




const IMAGE_WIDTH = 1170;
const TRANSITION_SPEED = 2;
const MAX_SLIDER_TYPE = 2;
const MIN_SLIDER_TYPE = 0;



// javascript objects-----------------------------

var sliderContent = {
  0: {
    'title': 'Donec faucibus ultricies congue',
    'images': ['mountain (1).jpg','mountain (2).jpg','mountain (3).jpg']
  },

  1: {
    'title': "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    'images': ['bird1.jpg', 'bird2.jpg']
  }
}

// slider---------------------------

var slider=document.getElementById("slider");
slider.style.position="relative";
slider.width=IMAGE_WIDTH+"px";
slider.style.overflow="hidden";

// imageslider-----------------------------

var imageSlider=document.getElementById("imageSlider");
imageUl=document.createElement('ul');
imageUl.id="imageUl";
imageUl.position="absolute";
imageUl.style.width=IMAGE_WIDTH*3+"px";
imageSlider.appendChild(imageUl);

// addChild----------------------------------
addChild(0);

var count=0;
function addChild(arrayValue){

  j=arrayValue;
  donec.innerHTML=sliderContent[j]["title"];
  
  for(i=0; i<sliderContent[j]["images"].length;i++){    
    imgName=sliderContent[j].images[i];
    image = document.createElement('img');
    image.src='images/'+imgName;
    image.style.width=IMAGE_WIDTH+"px";

       image.style.float="left";

    imageUl.appendChild(image);
   
  }
}

// left arroow click image
leftSlideControl.onclick=function(){
    animateFunction(0);
  }

// // right arroow click image
rightSlideControl.onclick=function(){
    animateFunction(1);
  }

// right aroor donem 
rightSlideContent.onclick=function(){

  while (imageUl.hasChildNodes()) {
      imageUl.removeChild(imageUl.lastChild);
    }
  addChild(1);

}

// left arrow donem
leftSlideContent.onclick=function(){
  while (imageUl.hasChildNodes()) {
      imageUl.removeChild(imageUl.lastChild);
    }
  addChild(0);
}


var shiftprecent=1;
function animateFunction(direction){
  if(count<1 && direction==1){
    count=count+1;
    var counterPercent=1;
    var time=setInterval(function(){
      counterPercent=counterPercent+0.5;
      shiftPercent=shiftprecent*counterPercent;
      that.imageUl.style.marginLeft="-"+counterPercent+"%";
      if(counterPercent==100){
        clearInterval(time);
      }
    },1);
  }
  if(count>=0 && direction==0){
    count=count-1;
    var counterPercent=100;
    var time=setInterval(function(){
     
      counterPercent=counterPercent-0.5;
      shiftPercent=shiftprecent*counterPercent;
      that.imageUl.style.marginLeft="-"+counterPercent+"%";
      if(counterPercent==0){
        clearInterval(time);
      }
    },1);
  }
}


function showNav(value){
  animateFunction(value);


}

  
