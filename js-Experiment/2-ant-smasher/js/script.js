var parent=document.getElementById("parent");
parent.style.width="1290px";
parent.style.height="595px";
parent.style.position="relative";
parent.style.backgroundImage="url(images/Environment.jpg)";
parent.style.top="0px";
parent.style.left="0px";




var randomNumberGenerator=function(){
	return Math.floor((Math.random() * (10) + 1));
}

var positionGenerator=function(){
	return Math.floor((Math.random() * (500) + (1)));
}


var play=document.createElement("div");
play.style.position="absolute";
play.style.backgroundImage="url(images/ant.jpg)";
play.style.width=parent.style.width;
play.style.height=parent.style.height;
parent.appendChild(play);

playBtn=document.createElement('button');
playBtn.style.backgroundColor="#f7f3f2";
playBtn.style.color="#af2401";
playBtn.style.width="200px";
playBtn.style.height="100px";
playBtn.style.fontSize="30px";
playBtn.style.fontWeight="bold";
playBtn.style.marginLeft="650px";
playBtn.style.marginTop="430px";
playBtn.style.borderRadius="20px";
playBtn.innerHTML="Start Game";
play.appendChild(playBtn);



function Ant(parent){

	var that = this;

	this.element=document.createElement('div');
	this.parent=document.getElementById(parent);
	this.x=positionGenerator();
	this.y=positionGenerator();
	this.dx =1;
	this.dy = 1;
	this.width="50px";
	this.height="50px";

	

	this.create=function(){
		
		this.element.style.width = this.width;
		this.element.style.height= this.height;
		this.element.style.position='absolute';
		this.element.style.backgroundImage="url(images/ant.png)";
		
		this.element.style.left=this.x+"px";
		this.element.style.top=this.y+"px";
		this.parent.appendChild(this.element);
		
	}

	this.update=function(){

		this.x=parseInt(this.element.style.left);
		this.y=parseInt(this.element.style.top);

		
	
			if(this.y>=(parseInt(this.parent.style.height)-parseInt(this.element.style.height)))
			{
				this.dy=-this.dy;
			}
			if(this.y==0)
			{
				this.dy=-this.dy;
			}
			this.y=this.y+this.dy;
			this.element.style.top=this.y+"px";
			if(this.x>=(parseInt(this.parent.style.width)-parseInt(this.element.style.width)))
			{
				this.dx=-this.dx;
			}
			if(this.x==0)
			{
				this.dx=-this.dx;
			}
			this.x=this.x+this.dx;
			this.element.style.left=this.x+"px";
	}
}



function changeDirection(antA,antB){
	antA.dx=-(antA.dx);
	antB.dx=-(antB.dx);
	antA.dy=-(antA.dy);
	antB.dy=-(antB.dy);
	}

function collisionDetection(antA,antB){
	w=parseInt(antA.x);
	x=parseInt(antA.width);
	y=parseInt(antA.y);
	z=parseInt(antA.height);
	m=parseInt(antB.x);
	n=parseInt(antB.width);
	o=parseInt(antB.y);
	p=parseInt(antB.height);

	rightEdgeA=w+x;
	leftEdgeA=w;
	topEdgeA=y;
	bottomEdgeA=y+z;
	rightEdgeB=m+n;
	leftEdgeB=m;
	topEdgeB=o;
	bottomEdgeB=o+p;

	if( ( rightEdgeA>leftEdgeB )&&(leftEdgeA<rightEdgeB)&&(bottomEdgeA>topEdgeB)&&(topEdgeA<bottomEdgeB) ){
		return true;
	}
}

	
	endBtn=document.createElement('button');
	restartBtn=document.createElement('button');

function EndGame(){
	var play=document.createElement("div");
	play.style.position="absolute";
	play.style.backgroundImage="url(images/giphy.gif)";
	play.style.width=parent.style.width;
	play.style.height=parent.style.height;
	parent.appendChild(play);

	endBtn.style.backgroundColor="green";
	endBtn.style.color="black";
	endBtn.style.width="200px";
	endBtn.style.height="100px";
	endBtn.style.fontSize="30px";
	endBtn.style.fontWeight="bold";
	endBtn.style.marginLeft="50px";
	endBtn.style.marginTop="430px";
	endBtn.style.borderRadius="20px";
	endBtn.innerHTML="End Game";
	play.appendChild(endBtn);

	restartBtn.style.backgroundColor="green";
	restartBtn.style.color="black"
	restartBtn.style.width="200px";
	restartBtn.style.height="100px";
	restartBtn.style.fontSize="30px";
	restartBtn.style.fontWeight="bold";
	restartBtn.style.marginLeft="50px";
	restartBtn.style.marginTop="430px";
	restartBtn.style.borderRadius="20px";
	restartBtn.innerHTML="Restart";
	play.appendChild(restartBtn);

restartBtn.onclick=function(){
	start();
}
}

playBtn.onclick=function(){

	start();
} 

var i=0;
function start(){
	var antArray=[];

	for(var i=0;i<10;i++){
		var ant=new Ant("parent");
		antArray.push(ant);
		ant.create();
	}
	

 
for(var i=0;i<parent.children.length;i++) {
	 counter=0;

		 parent.children[i].onclick =function(){
		 parent.removeChild(this); 
		counter=counter+1;
	
 		 if(counter==antArray.length+1)
			{	
				EndGame();
			}
 		 
 	}
}

setInterval(function(){
	for(i = 0 ; i < 10 ; i++ ){
		antArray[i].update();
		var antA = antArray[i];
		for(j=0;j<10;j++){
			if (j !== i) {
				var antB=antArray[j];
				
				if(collisionDetection(antA,antB)){
					changeDirection(antA,antB);
						}
				
			}

		}

	}		
},50);

}










