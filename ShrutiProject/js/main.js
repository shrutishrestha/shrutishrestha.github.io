


function MainIndex(){
  this.mainElement=null;
  //#ROUTE
   this.fragmentId=null;
    var userRoutes={};
    var that=this;

  // #DATABIND
  this.scope = {};
  this.element=null;
  var that=this;

  //REPEAT
  this.wholeBody=null;
  this.elements=[];
  this.element=null;
  var count=0;
  

  this.initialize=function(){
    

    
    this.mainElement=document.querySelector('[application]');
    // ROUTE
    var routeProvider=new RouteProvider(userRoutes);
    var routeFunction=new RouteFunction(routeProvider);
    
        that.route=function(routeCallback){
            routeCallback(routeProvider);
            }

        if(!location.hash) {
        location.hash="#home";
        routeProvider.check();
        }
   


    // DATA 
    var databind=new DataBind();
    databind.arrayModelsValues();


      var repeat = new Repeating();
      repeat.initial();

      window.onload = function (){
           routeProvider.check();
      }
      window.addEventListener('hashchange' , routeProvider.check , false); //update the view if url is changed


     
  }

   

    }

 function DataBind(){
  var models=[];
  var ngvalues=[];
  var modelList=[];
  var valueList=[];

  var that=this;

  this.arrayModelsValues=function(){
       mainIndex.elements=mainIndex.mainElement.querySelectorAll('[ngcontroller]');

      for(element=0; element<mainIndex.elements.length; element++){

        mainIndex.element=mainIndex.elements[element];


    modelList=mainIndex.element.querySelectorAll('[ngmodel]');
    valueList=mainIndex.element.querySelectorAll('[ngvalue]');

    modelList.forEach(model=>{
      models.push(model.getAttribute('ngmodel'));
    })
  
    valueList.forEach(value=>{
      ngvalues.push(value.getAttribute('ngvalue'));
    })
      that.dataBindingFunction();
  }
}

  this.dataBindingFunction=function(){
    models.forEach(model=> {
      var index=models.indexOf(model);
      elements=modelList[index];
      elements.onkeyup = function () {
        key=model;
        value=modelList[models.indexOf(key)].value;
        mainIndex.scope[key]=value;
        ngvalues.forEach(ngvalue=> {
          var indexValue=ngvalues.indexOf(ngvalue);
          if(mainIndex.scope.hasOwnProperty(ngvalue)){
            valueList[indexValue].value=mainIndex.scope[ngvalue];
            valueList[indexValue].innerHTML=mainIndex.scope[ngvalue];
          }
        });
      };
    });
  }
}


function Repeating(){
    var controller;
    var tempScope;
    var initQuery  =  [];
    var collectionName;
    var collectionData;
    var ngrepeatQuery = [];
    var ngdetailQuery = [];
    var init;
    var currentDetailName=[];
    var currentDetailQuery;

    var initAttribute =[];
    var ngrepeatAttribute=[];
    var ngdetailAttribute=[];

    var repeatAttributeArray =[];
    var userLoopVariable;
    var equal;
    var text;


    var that = this;

    this.initial  =  function(){
      mainIndex.elements=mainIndex.mainElement.querySelectorAll('[ngcontroller]');

      for(element=0; element<mainIndex.elements.length; element++){

        mainIndex.element=mainIndex.elements[element];


        controller  =  mainIndex.element.getAttribute('ngcontroller');

        mainIndex.scope[controller] = {};
        tempScope = mainIndex.scope[controller];

        initQuery  =  mainIndex.element.querySelectorAll('[init]');
        ngrepeatQuery  =  mainIndex.element.querySelectorAll('[ngrepeat]');
        initQuery.forEach(init =>{
            initAttribute.push(init.getAttribute('init'));

        })

        ngrepeatQuery.forEach(ngrepeat =>{
            ngrepeatAttribute.push(ngrepeat.getAttribute('ngrepeat'));
            
        })

        that.seperateString();
        that.seperateRepeatAttribute();
        that.setView();


    }
}
    this.seperateString  =  function(){   //seperateString for init
        var key;
        var value;
        var tag;
        var parentNode;
        

        for(initPosition = 0 ; initPosition<initAttribute.length ; initPosition++){
            equal  =  initAttribute[initPosition].indexOf("=");
            collectionName  =  initAttribute[initPosition].substr(0,equal);//friends
            value1  =  initAttribute[initPosition].substr(equal+1,initAttribute[initPosition].length);
            collectionData = JSON.parse(JSON.stringify(eval("("+value1+")")));
            tempScope[collectionName] = collectionData;
        }
    }

      this.seperateRepeatAttribute = function(){//friend in friends

        for(ngrepeatPosition = 0 ; ngrepeatPosition<ngrepeatAttribute.length ; ngrepeatPosition++){
            currentRepeatAttribute = ngrepeatAttribute[ngrepeatPosition];
            attributes = currentRepeatAttribute.split('in');
            userLoopVariable = attributes[0].trim();//friend
            collectionName = attributes[1].trim();  //friends   
            repeatAttributeArray[collectionName] = userLoopVariable;
        }
    }

    this.setView = function(){
        var key;

        for( i = 0; i<ngrepeatQuery.length ; i++) {
            parentNode = ngrepeatQuery[i];    //parentNode array name
            currentRepeat = ngrepeatQuery[i];
            currentDetailQuery = currentRepeat.querySelectorAll('[ngdetail]');
            

            for( j=0; j<tempScope[collectionName].length; j++) {
                for ( k = 0; k<currentDetailQuery.length; k++){
                    currentDetailName = currentDetailQuery[k].getAttribute('ngdetail');
                    key=this.renderKey(currentDetailName);
                    if( tempScope[collectionName][i].hasOwnProperty(key) );
                    that.replicateNode( parentNode,currentDetailQuery[k],j,key );
                }
            }
        }
    }

    this.replicateNode=function( parentNode,childNode,index,key ){
        tagName = childNode.tagName;
        childNode.style.display = "none";
        childDuplicateNode = document.createElement(tagName);
        childDuplicateNode.innerHTML = tempScope[collectionName][index][key];
        parentNode.appendChild(childDuplicateNode);
    }

    this.renderKey=function(currentDetailName){//friend.name
        attribute = currentDetailName.split(".");
        userVariable = attribute[0];
        actualKey = attribute[1];


        if(userVariable===userLoopVariable){

            return (actualKey);
        }

    }
}
   

function RouteProvider(userRoutes,routeFunction){
    var browserUrl;
    var templateUrl;
    var templateObject=[];
    var templateKey;
    var templateKeyArray=[];
    var routeUrl;
    var routeUrlName;
    var that=this;
    var routeFunction=new RouteFunction();
   
    this.when=function(value,url){
        browserUrl = value;
        templateUrl = url
        userRoutes[browserUrl] = templateUrl;

        
        }
        
    this.check=function(){   
     
        mainIndex.fragmentId = location.hash.substr(1);
        keyUserRoute=Object.keys(userRoutes);
       if(keyUserRoute[0]==null){
        console.log("user routes empty")
        routeFunction.navigate(mainIndex.fragmentId);
       }
      
      
        else if(userRoutes.hasOwnProperty(mainIndex.fragmentId)){
          
            templateObject = userRoutes[mainIndex.fragmentId];
            templateKeyArray = Object.keys(templateObject);
            templateKey = templateKeyArray.toString();  
            routeUrl = templateObject[templateKey];
            routeUrlName = that.routeUrlSplit(routeUrl);
            routeFunction.navigate(routeUrlName);
           
            }
    }

    this.otherwise=function(url){
        templateUrl = url;
        templateObjectKey = Object.keys(url);
        routeUrl = templateUrl[templateObjectKey];
        routeUrlName = that.routeUrlSplit(routeUrl);
 

        routeFunction.navigate(routeUrlName);

    }

    this.routeUrlSplit=function(routeUrl){
        var splitingUrl;
        splitingUrl = routeUrl.split(".");
        return splitingUrl[0];

      }
  }

function RouteFunction(routeProvider){
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

    mainIndex.initialize();//initialize==2way binding
  });

  that.setActiveLink(routeUrlName);
}





}



var mainIndex=new MainIndex();
mainIndex.initialize();

















