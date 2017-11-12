bodies=document.getElementById("parent");
bodies.style.width="1000px";
bodies.style.height="1000px";

//creating a div to hold list of images
var idiv=document.createElement("div");
idiv.setAttribute("id","idiv");

idiv.style.width="1000px";
idiv.style.height="200px";
bodies.appendChild(idiv);


//creating a div absolute
var imageabsolute=document.createElement("div");
imageabsolute.setAttribute("id","alone");
imageabsolute.style.position="relative";
imageabsolute.style.width="200px";
imageabsolute.style.height="200px";
imageabsolute.style.opacity="1";
imageabsolute.style.background="red";
imageabsolute.style.overflow="hidden";
idiv.appendChild(imageabsolute);


//creating ul
var divul=document.createElement("div");
divul.setAttribute("id","divul");
divul.style.position="absolute";
divul.style.top="-15px";
divul.style.left="-43px";
divul.style.width="700px";
divul.style.height="200px";
imageabsolute.appendChild(divul);
var imageul=document.createElement("ul");

divul.appendChild(imageul);
counter=1;
a=["a","b","c"]
imagelist=["url(images/a.jpg)","url(images/b.jpeg)","url(images/c.jpeg)"];
for(i=0;i<3;i++){
	var imageli=document.createElement("li");
	imageli.setAttribute("id",a[i]);
	imageli.style.backgroundImage=imagelist[i];
	imageli.style.width="200px";
	imageli.style.height="200px";
	imageli.style.float="left";	
	imageli.style.listStyle="none";
	imageli.style.opacity="1";
	imageul.appendChild(imageli);
}


var div = document.getElementById("alone");
butonright=document.createElement('button');
butonright.style.width="100px";
butonright.setAttribute("value","previous");
butonright.style.height="50px";
butonright.innerHTML="PREVIOUS";
bodies.appendChild(butonright);

//for button
buton=document.createElement('button');
buton.style.width="100px";
buton.setAttribute("value","next");
buton.style.height="50px";
buton.innerHTML="NEXT";
bodies.appendChild(buton);
var counter=0;
var piccount=0;
var counts=1;



var shift=400;
butonright.onclick=function(){
	if (piccount<=0){

		piccount=2;
		shift=400;
		divul.style.marginLeft=-400+"px";
		var beforeposition=400;
		z=2
	}
	else{
		if(z==2){
			z=0;
			var beforeposition=400;
		}
		
		piccount=piccount-1;
		var carry=1;
		counts=1
		counterPromise=setInterval(function(){
			b=carry++;
			a=counts++;
			shift=(a*5);
			newshift=beforeposition-shift

			divul.style.marginLeft="-"+newshift+"px";
			if(shift==200) {
				clearInterval(counterPromise)
			}
			if (b==40){
				b=1
				carry=1;
			}
		},100);
		beforeposition=shift
	}
}

shifts=0
var piccount=0;
buton.onclick=function(){
	var pp=0
	if (piccount>=2){

		piccount=0;
		divul.style.marginLeft=0+"px";
		beforeposition=0;
		z=1
		shifts=0
	}
	else{
		if(z=1){
			z=0
			beforeposition=0;
		}
		piccount=piccount+1;
		var carry=1;
		counts=1
		counterPromise=setInterval(function(){
			b=carry++;
			a=counts++;
			shifts=(a*5);
			newshift=beforeposition+shifts
			divul.style.marginLeft="-"+newshift+"px";
			if(shifts==200) {
				clearInterval(counterPromise)
			}
			if (b==40){
				b=1
				carry=1;
			}
		},100);
		beforeposition=shifts
	}
}


