

	var parent=document.getElementById("parent");
	parent.style.width="580px";
	parent.style.height="595px";
	parent.style.position="relative";
	parent.style.backgroundColor="red"
	parent.style.overflow="hidden";
	parent.style.backgroundImage="url(images/background.png)";



	var zzz=0;

	var randomNumberGenerator=function(){
		return Math.floor((Math.random() * (400) + 1));
	}
	var positionGenerator=function(){
		return Math.floor((Math.random() * (500) + (1)));
	}

	function Car(parent){
		this.car=document.createElement('div');
		this.x=0;
		this.dx =30;//car
		this.dy=0;//parent
		this.width="100px";
		this.height="100px";
		this.image="url(images/rocket.png)";

		this.create=function(){
			this.car.style.width = 100+"px";
			this.car.style.height= 100+"px";
			this.car.style.position='absolute';
			this.car.style.left=this.x+"px";
			this.car.style.bottom="0px";
			this.car.style.backgroundImage=this.image;
			this.car.style.backgroundRepeat="no-repeat";
			this.car.id="car";
			parent.appendChild(this.car);
			}
		this.updateBackground=function(){
			this.dy=this.dy+1
			parent.style.backgroundPosition = "center " + this.dy + "px";
		}
		this.moveLeft=function(){
			if(this.x<=0){
				this.car.style.left="0px";
			}
			else{
				this.x=this.x-this.dx;
			this.car.style.left=this.x+"px";
			}
		}
		this.moveRight=function(){
				if(this.x>=236*2){
				this.car.style.left=this.x+"px";
			}
			else{
				this.x=this.x+this.dx;
			
			this.car.style.left=this.x+"px";
			 zzz=parseInt(this.car.style.left);
		}
		}
	}


	function Obstacles(parent){
		this.dy=6;
		this.height=80;
		this.obstacle=document.createElement('div');
		this.obstacle.style.width="80px";
		this.obstacle.style.height=this.height+"px";
		this.obstacle.style.position="absolute";
		this.top=0;
		that=this;
		this.obstacle.style.left=randomNumberGenerator()+"px";
		this.obstacle.style.backgroundImage="url(images/obstacle.png)";
		parent.appendChild(this.obstacle);
		this.updatePosition=function(){
			// if(this.top>500){
				
			// 	obstacleArray.shift();
			// 	parent.removeChild(that);
				
			// 	}
			this.top=this.top+this.dy;
			this.obstacle.style.top=this.top+"px";
		}
			
		this.collisionDetection=function(car1){
			

	w=parseInt(this.obstacle.style.left);
	x=parseInt(this.obstacle.style.width);
	y=parseInt(this.obstacle.style.top);
	z=parseInt(this.obstacle.style.height);
	m=parseInt(car1.x);
	n=100;
	o=parseInt(parent.style.height)-100;
	p=100;

	rightEdgeA=w+x;
	leftEdgeA=w;
	topEdgeA=y;
	bottomEdgeA=y+z;
	rightEdgeB=m+n;
	leftEdgeB=m;
	topEdgeB=o;
	bottomEdgeB=o+p;

	if( ( rightEdgeA>leftEdgeB )&&(leftEdgeA<rightEdgeB)&&(bottomEdgeA>topEdgeB)&&(topEdgeA<bottomEdgeB) ){
		console.log(":::::");
		return true;
	}
		}

		this.collisionDetection1=function(antA,antB){
		console.log("checkcollision"+antA);
		console.log("checkcollision"+antA.bottom);
		console.log("checkcollision"+antA.height);
		y=parseInt(antA.bottom);
		z=parseInt(antA.height);
		o=parseInt(antB.top);
		p=parseInt(antB.height);
		topEdgeA=y;
		bottomEdgeA=y+z;
		
		topEdgeB=o;
		bottomEdgeB=o+p;

		console.log("mmmmmm"+bottomEdgeA);
		console.log("mmmmmm"+bottomEdgeB)

		if( (bottomEdgeA>bottomEdgeB) ){
			console.log("yoyomannnnnnnnnnnnn")
			parent.removeChild(this);
			return true;
		}
	}


	}

	obstacleArray=[]

	function Bullet(){
		this.dy=6;
		this.bullet=document.createElement('div');
		this.bottom=100;
		this.height=20;
		this.bullet.style.width="20px";
		this.bullet.style.height=this.height+"px";
		this.bullet.style.backgroundColor="red";
		this.bullet.style.position="absolute";
		this.bullet.style.bottom=this.bottom+"px";
		this.bullet.style.left=zzz+42+"px";
		parent.appendChild(this.bullet);
		this.updateBullet=function(){
			this.bottom=this.bottom+this.dy
				this.bullet.style.bottom=this.bottom+"px";
				console.log("++++++++++="+	this.bullet.style.bottom)
		}
	}


	function CarGame(parent){
		var that = this;
		this.car=document.createElement('div');
		parent=document.getElementById(parent);
		
		
		this.init=function(){
			var car1=new Car(parent);
			car1.create();
			var bullet=new Bullet();
			var obstacle=new Obstacles(parent);
			obstacleArray.push(obstacle)
			var count=0;
			var bulletfire=0;
		
				setInterval(function(){
				count=count+1
				if(count==30){
					count=0;
					var obstacle=new Obstacles(parent);
					obstacleArray.push(obstacle);
				}
						
				for(i = 0 ; i < obstacleArray.length ; i++ ){
			obstacleArray[i].updatePosition();
			}
				car1.updateBackground();
				document.onkeydown=function(event){
				if(event.keyCode==37){
					car1.moveLeft();
				}
				
				if(event.keyCode==39){
					car1.moveRight();
				}
				if(event.keyCode==65){
					bulletfire=1;
				}
				}
			if(bulletfire==1){
				bullet.updateBullet();
			
			for(j=0;j<obstacleArray.length;j++){

					var antB=obstacleArray[j];

					
					if(collisionDetection1(bullet,antB)){
						remove(antB);


							}
				}
		}		
			
			for(i=0;i<obstacleArray.length;i++){
				obstacle1=obstacleArray[i]
				if(obstacle1.collisionDetection(car1)){
					if(document.getElementById("car")){
					document.getElementById("car").remove();
					EndGame();
					}
				return true;
				}
			}

		},50);


		}

	}


		var endBtn=document.createElement("button");

	function EndGame(){
		var end=document.createElement("div");
		end.style.position="absolute";
		end.style.backgroundImage="url(images/frontpage.jpg)";
		end.style.width=parent.style.width;
		end.style.height=parent.style.height;
		parent.appendChild(end);

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
		endBtn.style.float="left";
		end.appendChild(endBtn);

		var restartBtn=document.createElement("button");

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
		restartBtn.style.float="right";
		end.appendChild(restartBtn);

	restartBtn.onclick=function(){
		start();
	}
	}



	var i=0;
	function start(){

			var carGame=new CarGame('parent');
			carGame.init();
			// carGame.play();
		}


	



	start();


