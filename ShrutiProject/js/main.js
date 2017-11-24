


function MainIndex(){
    this.fragmentId=null;
    var userRoutes={};
    var that=this;

    this.begin=function(){
    
        var routeProvider=new RouteProvider(userRoutes);
        var routeFunction=new RouteFunction();
    
        that.route=function(routeCallback){
            routeCallback(routeProvider);
            }

        window.addEventListener("hashchange", function(){
            routeProvider.check(routeFunction);
        });
        }
    }

function RouteProvider(userRoutes){
    var browserUrl;
    var templateUrl;
    var templateObject=[];
    var templateKey;
    var templateKeyArray=[];
    var routeUrl;
    var routeUrlName;
    var that=this;
   
    this.when=function(value,url){
        browserUrl = value;
        templateUrl = url
        userRoutes[browserUrl] = templateUrl;

        
        }
        
    this.check=function(routeFunction){   
        index.fragmentId = location.hash.substr(1);
       
        if(userRoutes.hasOwnProperty(index.fragmentId)){
            templateObject = userRoutes[index.fragmentId];
            templateKeyArray = Object.keys(templateObject);
            templateKey = templateKeyArray.toString();  
            routeUrl = templateObject[templateKey];
            routeUrlName = that.routeUrlSplit(routeUrl);
            routeFunction.navigate(routeUrlName);
           
            }
    }

    this.routeUrlSplit=function(routeUrl){
        var splitingUrl;
        splitingUrl = routeUrl.split(".");
        return splitingUrl[0];

      }
  }

function RouteFunction(){
    var request;
    //ajax calls

    this.partialsCache = {}
    var that=this;

    this.fetchFile=function(path, callback){
        if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
      }
        else 
         {
          throw new Error('Ajax is not supported by your browser');}
     
        request.onload = function () {
      
        callback(request.response);
        };

    request.open("GET", path);
    request.send(null);
    }

this.getContent=function(fragmentId, callback){

  if(that.partialsCache[fragmentId]) {

    callback(that.partialsCache[fragmentId]);

  } else {
      that.fetchFile(fragmentId + ".html", function (content) {

      that.partialsCache[fragmentId] = content;

      callback(content);
    });
  }
}

this.setActiveLink=function(fragmentId){
  var navbarDiv = document.getElementById("navbar"),
  links = navbarDiv.children,
  i, link, pageName;
  for(i = 0; i < links.length; i++){
    link = links[i];
    pageName = link.getAttribute("href").substr(1);
    if(pageName === fragmentId) {
      link.setAttribute("class", "active");
    } else {
      link.removeAttribute("class");
    }
  }
}

this.navigate=function(routeUrlName){

  var contentDiv = document.getElementById("content");



  that.getContent(routeUrlName, function (content) {
    contentDiv.innerHTML = content;

    mainTwoWay.initialize();//initialize==2way binding
    main.firstFunction();//==>repeat
  });

  that.setActiveLink(routeUrlName);
}

if(!location.hash) {

  location.hash = "#home";
}




//ajax finish





}



var index=new MainIndex();
index.begin();

















