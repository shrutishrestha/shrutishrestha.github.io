var details = {
	name:"Shruti Shrestha",
	location:"Newroad",
	education:"Advanced College of Engineering and Management",
	phone: 9860229907,
	interest: ["Riding", "Travelling"],
	current:"Leapfrog Technology (Intern)",
	email:"srutsth@gmail.com",
	projects:["online voting ","FOREX market prediction"]
	
};

var mainwrapper=document.getElementById("mainwrapper");
mainwrapper.style.background="#FDF5E6";


var head=document.createElement("div");
mainwrapper.appendChild(head);


var header = document.createElement("h1");
header.innerHTML=details.name;
header.style.textAlign="center";
head.appendChild(header);


var maincontent=document.createElement("div");
mainwrapper.appendChild(maincontent)

var detailsul=document.createElement("ul");
maincontent.appendChild(detailsul);

detailKeys=Object.keys(details);
for(i=0;i<detailKeys.length;i++)
{
	
	var key=detailKeys[i];
	console.log("-----"+details[key]);
	var detailsli=document.createElement("li");
	detailsli.style.background="#FFFAFA";
	detailsli.style.listStyle="none";
	detailsli.style.padding="15px 0px";
	detailsli.style.margin="2px";
	detailsli.style.textAlign="center";
	detailsli.style.listStyle="none";
	detailsli.style.listStyle="none";
	detailsli.innerHTML=key+" : "+details[key];
	detailsul.appendChild(detailsli);
}





