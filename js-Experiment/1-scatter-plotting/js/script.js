var data=[
{top:"5",left:"5"},
{top:"15",left:"15"},
{top:"22",left:"13"},
{top:"41",left:"19"},{top:"50",left:"50"}]

var dataids=["a","b","c","d","e"];

var scatterlist=[]

var el=document.createElement("ul");
var body=document.getElementById("parent");

body.style.width="500px";
body.style.height="500px";
body.style.backgroundColor="red";
body.style.position="relative";
bodies=document.getElementsByTagName("body")[0];
for (i=0;i<data.length;i++){
	body.appendChild(el);
	parentul=document.getElementsByTagName("ul")[0];

	var newElement=document.createElement('div');
	newElement.setAttribute('id',dataids[i]);
	newElement.style.height="10px";
	newElement.style.width="10px";
	newElement.style.position="absolute";

	/**/var x = Math.floor((Math.random() * 300) + 1);
	var y = Math.floor((Math.random() * 300) + 1);
	newElement.style.top=String(x)+"px";
	newElement.style.left=String(y)+"px";
	newElement.style.backgroundColor="black";
	body.appendChild(newElement);	
	newElement.onclick=function(){
		body.removeChild(this);
		var lists=document.createElement("li");
		lists.innerHTML="top="+this.style.top+" "+"left="+this.style.left;
		bodies.appendChild(lists);
	}

}
