function MainIndex(){
  var scope;
  var repeat;
  var databind;
  this.scope={};
  var that=this;
  this.elements=[];
  var userRoutes={};
  this.tempScope={};
  var routeProvider;
  var routeFunction;
  this.element=null;
  this.controllerName;
  this.mainScope = {}; // #DATABIND
  this.fragmentId=null;  //#ROUTE
  this.mainElement=null;
  this.userController={};
  
  this.initialize=function(){
    that.mainElement=document.querySelector('[application]');
 
    routeProvider=new RouteProvider(userRoutes);
    routeFunction=new RouteFunction(routeProvider);
    scope={}
    
    that.route=function(routeCallback){
      routeCallback(routeProvider);
    }
    
    that.controller=function(controllerName,controllerCallbackFunction){
      controllerCallbackFunction(scope);//scope=object
      that.userController[controllerName]=scope;//
      that.tempScope=that.userController[controllerName];//scope
    }
            
    if(!location.hash) {
      location.hash="#home";
      routeProvider.check();
    }
     
    databind=new DataBind();
    databind.arrayModelsValues();


    repeat = new Repeating();

    window.onload = function(){
      routeProvider.check();
      setTimeout(repeat.initial,10);
    }
  
    window.addEventListener('hashchange' , that.updateService , false); //update the view if url is changed
  }
      
    this.updateService =function(){
      routeProvider.check();
      databind.arrayModelsValues();
      setTimeout(repeat.initial,10);
    }
}

function DataBind(){
  var that=this;
  var models=[];
  var ngvalues=[];
  var modelList=[];
  var valueList=[];

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
        mainIndex.mainScope[key]=value;
        ngvalues.forEach(ngvalue=> {
          var indexValue=ngvalues.indexOf(ngvalue);
          if(mainIndex.mainScope.hasOwnProperty(ngvalue)){
            valueList[indexValue].value=mainIndex.mainScope[ngvalue];
            valueList[indexValue].innerHTML=mainIndex.mainScope[ngvalue];
          }
        });
      };
    });
  }
}


function Repeating(){
  var text;
  var equal;
  var controller;
  var that = this;
  var tempmainScope;
  var collectionName;
  var collectionData;
  var userLoopVariable;
  var initAttribute =[];
  var currentDetailQuery;
  var ngrepeatQuery = [];
  var ngdetailQuery = [];
  var currentDetailName=[];
  var ngrepeatAttribute=[];
  var ngdetailAttribute=[];
  var repeatAttributeArray ={};

  this.initial  =  function(){
    mainIndex.elements=mainIndex.mainElement.querySelectorAll('[ngcontroller]');
    for(element=0; element<mainIndex.elements.length; element++){
      mainIndex.element=mainIndex.elements[element];
      controller  =  mainIndex.element.getAttribute('ngcontroller');//repeating
      collectionName=Object.keys(mainIndex.userController[controller])//customer
      mainIndex.mainScope[controller] = {};
      tempmainScope = mainIndex.mainScope[controller];
      if(mainIndex.userController.hasOwnProperty(controller)){
        currentController=mainIndex.userController[controller];
        tempmainScope=currentController;
      }
      ngrepeatQuery  =  mainIndex.element.querySelectorAll('[ngrepeat]');
      ngrepeatQuery.forEach(ngrepeat =>{
      ngrepeatAttribute.push(ngrepeat.getAttribute('ngrepeat'));
      })
      that.seperateRepeatAttribute();
      that.setView();
    }
  }

  this.seperateRepeatAttribute = function(){
    for(ngrepeatPosition = 0 ; ngrepeatPosition<ngrepeatAttribute.length ; ngrepeatPosition++){
      currentRepeatAttribute = ngrepeatAttribute[ngrepeatPosition];
      attributes = currentRepeatAttribute.split('in');
      userLoopVariable = attributes[0].trim();
      collectionName = attributes[1].trim();  
      repeatAttributeArray[collectionName] = userLoopVariable;
    }
  }

  this.setView = function(){
    var key;
    for( i = 0; i<ngrepeatQuery.length ; i++) {
      parentNode = ngrepeatQuery[i];   
      currentRepeat = ngrepeatQuery[i];
      currentDetailQuery = currentRepeat.querySelectorAll('[ngdetail]');
      for( j=0; j<tempmainScope[collectionName].length; j++) {
        for ( k = 0; k<currentDetailQuery.length; k++){
          currentDetailName = currentDetailQuery[k].getAttribute('ngdetail');
          key=this.renderKey(currentDetailName);
          if( tempmainScope[collectionName][i].hasOwnProperty(key)){
            that.replicateNode( parentNode,currentDetailQuery[k],j,key );
          }
        }
      }
    }
  }

  this.replicateNode=function( parentNode,childNode,index,key ){
    tagName = childNode.tagName;
    childNode.style.display = "none";
    childDuplicateNode = document.createElement(tagName);
    childDuplicateNode.innerHTML = tempmainScope[collectionName][index][key];
    parentNode.appendChild(childDuplicateNode);
  }

  this.renderKey=function(currentDetailName){
    attribute = currentDetailName.split(".");
    userVariable = attribute[0];
    actualKey = attribute[1];
    if(userVariable===userLoopVariable){
      return (actualKey);
    }
  }
}
   

function RouteProvider(userRoutes,routeFunction){
  var routeUrl;
  var that=this;
  var browserUrl;
  var templateKey;
  var templateUrl;
  var routeUrlName;
  var templateObject=[];
  var templateKeyArray=[];
  var routeFunction=new RouteFunction();
  
  this.when=function(value,url){
    browserUrl = value;
    templateUrl = url
    userRoutes[browserUrl] = templateUrl;
  }
        
  this.check=function(){   
    mainIndex.fragmentId = location.hash.substr(1);
    keyUserRoute=Object.keys(userRoutes);
    if(Object.keys(userRoutes).length === 0){
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
  var that=this;
  this.partialsCache = {}
  
  this.fetchFile=function(path, callback){
    if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
    }
    else
      {throw new Error('Ajax is not supported by your browser');}
    
    request.onload = function () {
      callback(request.response);
    };

    request.open("GET", path);
    request.send(null);
  }

  this.getContent=function(fragmentId, callback){
    if(that.partialsCache[fragmentId]) {
      callback(that.partialsCache[fragmentId]);
    } 
    else {
      that.fetchFile(fragmentId + ".html", function (content) {
        that.partialsCache[fragmentId] = content;
        callback(content);
      });
    }
  }

  this.setActiveLink=function(fragmentId){
    var navbarDiv = document.getElementById("navbar"),
    links = navbarDiv.children,i, link, pageName;
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

















