function MainIndex() {
  var repeat;
  var databind;
  this.scope = {};
  var that = this;
  var routeProvider;
  var routeFunction;
  var customDirective;
  var nameDirective;
  var  functionDirective;
  this.routeParam ={};
  this.elements = [];
  this.userRoutes = {};
  this.tempScope = {};
  this.element = null;
  this.controllerName;
  this.mainScope = {}; 
  this.fragmentId = null;  
  this.mainElement = null;
  this.userController = {};
  this.currentController;
  
  this.initialize = function() {
    that.mainElement = document.querySelector('[application]');
    that.elements = that.mainElement.querySelectorAll('[ngcontroller]');
    routeProvider = new RouteProvider(that.userRoutes);
    routeFunction = new RouteFunction(routeProvider);
    customDirective = new CustomDirective();
    repeat = new Repeating();
    var scope = {}

    that.route = function(routeCallback) {
      routeCallback(routeProvider);
    }

    that.controller = function(controllerName, controllerCallbackFunction) {
      that.scope[controllerName]={};
      controllerCallbackFunction(that.scope[controllerName]);
      that.userController[controllerName] = that.scope[controllerName];
      that.tempScope = that.userController[controllerName];
     
    }

    that.directive = function(directiveName, directiveFunction){
    
      nameDirective=customDirective.renderDirectiveName(directiveName);//my-custom-url
      functionDirective=directiveFunction();//object returned from function
      customDirective.setDirective(nameDirective,functionDirective,repeat,routeFunction,routeProvider);
    }

            
    if (!location.hash) {
      location.hash = "#home";
      that.fragmentId = location.hash.substr(1);
      routeProvider.check();
    }
     
    databind = new DataBind();
    databind.arrayModelsValues();
      

    window.onload = function() {
      routeProvider.check();
      routeFunction.currentRouteInfo();
      setTimeout(repeat.initial,10);
       setTimeout(repeat.doDetail,10)
    }
  
    window.addEventListener('hashchange' , that.updateService , false);
  }
      
    this.updateService = function() {
      routeProvider.check();
      routeFunction.currentRouteInfo();

      
      
      databind.arrayModelsValues();
      setTimeout(repeat.initial,10);
       setTimeout(repeat.doDetail,10)
    }
}


function CustomDirective(){
  var a;
  var nameDirective;

  this.renderDirectiveName = function(directiveName){
    nameDirective=directiveName;
   for(i = 0; i < nameDirective.length; i++){
      a = nameDirective.charAt(i);
      if(a == a.toUpperCase()){
        nameDirective = nameDirective.replace(a,"-"+ a.toLowerCase());
      }
    }
      return (nameDirective);
  }

  this.setDirective=function(nameDirective,functionDirective,repeat,routeFunction,routeProvider){
    var directive;
    var parentOfDirective;
    var currentControllerObject;
    var keys;
   
    for (element=0; element < mainIndex.elements.length; element++) {
      mainIndex.element=mainIndex.elements[element];
      pageController=mainIndex.element.getAttribute('ngcontroller');
      realController=mainIndex.currentController;
     
    
      checkChild = document.getElementsByTagName(nameDirective);
      if(checkChild!=null){
        directive = document.getElementsByTagName(nameDirective)[0];
        parentOfDirective = directive.parentElement;
        controllerName = parentOfDirective.getAttribute('ngcontroller');
        currentControllerObject = mainIndex.userController[controllerName];
        keys = Object.keys(currentControllerObject);
       
        if(mainIndex.userController.hasOwnProperty(controllerName)){
          refracterString=routeProvider.routeUrlSplit(functionDirective["templateUrl"])
          routeFunction.getContent(refracterString, function (content) {
            directive.innerHTML=content;
            for(keyCount=0; keyCount<keys.length; keyCount++){
              directive.innerHTML = directive.innerHTML.replace('{{' + keys[keyCount] + '}}' , currentControllerObject[keys[keyCount]]);
            }
          });
        }
      }
    }
  }
}


function DataBind() {
  var that = this;
  var models = [];
  var ngvalues = [];
  var modelList = [];
  var valueList = [];
  var parent;

  this.arrayModelsValues = function() {
    
    for (element = 0; element < mainIndex.elements.length; element++) {
      mainIndex.element = mainIndex.elements[element];
      checkChild = mainIndex.element.querySelectorAll('[ngmodel]');
      if (checkChild[0] != null){
       
        modelList = mainIndex.element.querySelectorAll('[ngmodel]');
        valueList = mainIndex.element.querySelectorAll('[ngvalue]');
        modelList.forEach(model=> {
          models.push(model.getAttribute('ngmodel'));
        })
        valueList.forEach(value=> {
          ngvalues.push(value.getAttribute('ngvalue'));
        })
        console.log("ngvalues"+ngvalues);
        that.dataBindingFunction(mainIndex.element);
      }
    }
  }

  this.dataBindingFunction = function(melement) {
    models.forEach(model=> {
      var index = models.indexOf(model);
      elements = modelList[index];
      elements.onkeyup = function () {
        key = model;
        value = modelList[models.indexOf(key)].value;
        mainIndex.mainScope[key] = value;
        ngvalues.forEach(ngvalue=> {
          var indexValue = ngvalues.indexOf(ngvalue);
          if (mainIndex.mainScope.hasOwnProperty(ngvalue)) {
            valueList[indexValue].value = mainIndex.mainScope[ngvalue];
            valueList[indexValue].innerHTML = mainIndex.mainScope[ngvalue];
          }
        });
      };
    });
  }


}


function Repeating() {
  var text;
  var equal;
  var controller;
  var that = this;
  var tempmainScope;
  var collectionName;
  var collectionData;
  var userLoopVariable;
  var initAttribute = [];
  var currentDetailQuery;
  var ngrepeatQuery = [];
  var ngdetailQuery = [];
  var currentDetailName = [];
  var ngrepeatAttribute = [];
  var ngdetailAttribute = [];
  var repeatAttributeArray = {};
  var count=0;

  this.initial = function() {
    for (element=0; element < mainIndex.elements.length; element++) {
      mainIndex.element = mainIndex.elements[element];
      controller=mainIndex.currentController;
      checkChild = mainIndex.element.querySelectorAll('[ngrepeat]');
        
      if(checkChild[0]!=null){
        mainIndex.userController[controller]
       
        collectionName = Object.keys(mainIndex.userController[controller])
        mainIndex.mainScope[controller] = {};
        tempmainScope = mainIndex.mainScope[controller];

        if (mainIndex.userController.hasOwnProperty(controller)) {
          currentController = mainIndex.userController[controller];
          tempmainScope = currentController;
        }
        ngrepeatQuery = mainIndex.element.querySelectorAll('[ngrepeat]');
        ngrepeatQuery.forEach(ngrepeat => {
          ngrepeatAttribute.push(ngrepeat.getAttribute('ngrepeat'));
        })
        that.seperateRepeatAttribute();
        that.setView();
        that.doDetail(); 
      }
    }
  }

  this.doDetail = function(){
    var currentDetail;
    var innerBinds;
    var attributes;
    var allDetails;
    var bindAttr;
    var index;
    var key;
         for (elem=0; elem < mainIndex.elements.length; elem++) {
        

      mainIndex.element = mainIndex.elements[elem];
      controller=mainIndex.currentController;
    
      allDetails = mainIndex.element.querySelectorAll('[ngdetail-all]');
    
    if(allDetails!=null){
    
      for(var i=0;i<allDetails.length;i++){
        currentDetail = allDetails[i];
        attributes = (currentDetail.getAttribute('ngdetail-all')).split('in');
        collectionName = attributes[1].trim();
        userVariable = attributes[0].split('.') 
        key = userVariable[1].trim();     //key is property 
        index = mainIndex.routeParam[key].trim(); //specific key that is provided by user
        controllerName = mainIndex.currentController;
        tempScope = mainIndex.mainScope[controllerName];
     
        if (mainIndex.userController.hasOwnProperty(controllerName)) {
          tempScope = mainIndex.userController[controllerName];
        }
       
        if(tempScope.hasOwnProperty(collectionName)){ 
          for(var i=0;i<tempScope[collectionName].length;i++){
          var la=tempScope[collectionName][i];
         
            if(tempScope[collectionName][i][key] == index){
              innerBinds = currentDetail.querySelectorAll('[ngdetail]');
              that.removeElements(currentDetail,innerBinds);

              for(var noOfBinds=0;noOfBinds<innerBinds.length;noOfBinds++){

                bindAttribute = (innerBinds[noOfBinds].getAttribute('ngdetail')).split(".");
                userLoopVariable=bindAttribute[0];
                bindAttr = bindAttribute[1];
                
                if(tempScope[collectionName][i].hasOwnProperty(bindAttr)){ 
                  that.replicateNode(currentDetail , innerBinds[noOfBinds] , i , bindAttr);
                }
              }
            }
          } 
        }
      }
    }
  }
}


  this.seperateRepeatAttribute = function() {
    
    for (ngrepeatPosition = 0 ; ngrepeatPosition<ngrepeatAttribute.length ; ngrepeatPosition++) {
      currentRepeatAttribute = ngrepeatAttribute[ngrepeatPosition];
      attributes = currentRepeatAttribute.split('in');
      userLoopVariable = attributes[0].trim();
      collectionName = attributes[1].trim();  
      repeatAttributeArray[collectionName] = userLoopVariable;
    }
  }

  this.setView = function() {
  
    var key;
    for (i = 0; i < ngrepeatQuery.length; i++) {
      currentRepeat = ngrepeatQuery[i];   
      parentNode=currentRepeat;
      controllerName = mainIndex.currentController
      currentRepeat = ngrepeatQuery[i];
      tempScope = mainIndex.scope[controllerName];
      
      if(tempScope.hasOwnProperty(collectionName)){       
      currentDetailQuery = currentRepeat.querySelectorAll('[ngdetail]');
      that.removeElements(parentNode,currentDetailQuery);
        for(var j=0;j<tempScope[collectionName].length;j++){
          for(var noOfBinds=0; noOfBinds<currentDetailQuery.length; noOfBinds++) {
            bindAttribute = (currentDetailQuery[noOfBinds].getAttribute('ngdetail')).trim();
            bindAttr=that.renderKey(bindAttribute);
          
            if(tempScope[collectionName][j].hasOwnProperty(bindAttr)){ 
              that.replicateNode(parentNode , currentDetailQuery[noOfBinds] , j , bindAttr);
            }
          }
        }
      }
    }
  }

  this.removeElements = function(parent , child){
    for(var i=0;i<child.length;i++){
      parent.removeChild(child[i]);
    }
  }



  this.replicateNode = function(parentNode, childNode, index, key) {
    var stringImg;
    childNode = childNode.cloneNode();
    childNode.removeAttribute('ngdetail');
    tagName = childNode.tagName;
    
    if(tagName === "IMG"){
    stringImg=childNode.getAttribute('src');
    stringImg=stringImg.replace( userVariable[0]+"."+key , tempScope[collectionName][index][key]);
    childNode.setAttribute('src',stringImg);
    }
   
    childNode.innerHTML = tempScope[collectionName][index][key];
    parentNode.appendChild(childNode);
    parentHTML=parentNode.innerHTML
    parentNode.innerHTML = parentNode.innerHTML.replace( userVariable+"."+key,  tempScope[collectionName][index][key]);

    
  }
 

  this.renderKey = function(currentDetailName) {
    attribute = currentDetailName.split(".");
    userVariable = attribute[0];
    actualKey = attribute[1];
   
    if (userVariable === userLoopVariable) {
      return (actualKey);
    }
  }
}
   

function RouteProvider(userRoutes, routeFunction) {
  var routeUrl;
  var browserUrl;
  var templateKey;
  var templateUrl;
  var that = this;
  var routeUrlName;
  var currentRoute;
  var userRoutes;
  var currentRouteInfo;
  var userRoutesLength;
  var templateControllerObject = [];
  var templateControllerKeyArray = [];
  var routeFunction = new RouteFunction();
  
  this.when = function(value, valueObj) {
    browserUrl = value;
    valueObject = valueObj;//{ templateUrl,controller  }
    userRoutes[browserUrl] = valueObject;//0->templateURl,,,1->controller
   
    if(userRoutes!=null){
      userRoutesLength = Object.keys(userRoutes).length;
    }
  }

  this.parseStr = function(str,delimiter){ 
    return str.split(delimiter);
  }
        
  this.check = function() {   
    mainIndex.fragmentId = location.hash.substr(1);
    keyUserRoute = Object.keys(userRoutes);
    if (Object.keys(userRoutes).length === 0) {
      routeFunction.navigate(mainIndex.fragmentId);
    }
    else if (userRoutes.hasOwnProperty(mainIndex.fragmentId)) {
      templateControllerObject = userRoutes[mainIndex.fragmentId];
      templateControllerKeyArray = Object.keys(templateControllerObject);
      templateKey = templateControllerKeyArray[0].toString();  
      routeUrl = templateControllerObject[templateKey];
      routeUrlName = that.routeUrlSplit(routeUrl);
      routeFunction.navigate(routeUrlName);
    }
    else{
      renderFragmentId=that.parseStr(mainIndex.fragmentId , '/');  //[user ,shruti]
      
    if(userRoutes!=null){
      userRouteKeys=Object.keys(userRoutes);
      userRouteKeyLength=Object.keys(userRoutes).length;
      for(userRoutesCount=0; userRoutesCount<userRouteKeyLength; userRoutesCount++){
        renderFragmentId = that.parseStr(mainIndex.fragmentId , '/');  //[user ,shruti]
        userDefinedRouteKey = userRouteKeys[userRoutesCount];
        userDefinedBrowserUrl = that.parseStr(userDefinedRouteKey , '/');  //[user ,shruti]
        if(renderFragmentId.length == userDefinedBrowserUrl.length){
          fragmentUserName=renderFragmentId[1];//shruti%20%kc
          templateControllerObject=userRoutes[userDefinedRouteKey];
          mainIndex.fragmentId=userDefinedRouteKey;
          templateControllerKeyArray = Object.keys(templateControllerObject);
          templateKey = templateControllerKeyArray[0].toString(); 
          fragmentUserName=that.replaceFunction(fragmentUserName);
          mainIndex.routeParam[userDefinedBrowserUrl[1]] = fragmentUserName.trim();
          routeUrl = templateControllerObject[templateKey];
          routeUrlName = that.routeUrlSplit(routeUrl);
          routeFunction.navigate(routeUrlName);
        }
      }
    }
  }
}
  this.replaceFunction=function(fragmentUserName){
    for(i=0;i<fragmentUserName.length;i++){
     fragmentUserName=fragmentUserName.replace("%20"," ");
    }
    return fragmentUserName;
  }

  this.otherwise = function(url) {
    templateUrl = url;
    templateObjectKey = Object.keys(url);
    routeUrl = templateUrl[templateObjectKey];
    routeUrlName = that.routeUrlSplit(routeUrl);
    routeFunction.navigate(routeUrlName);
  }

  this.routeUrlSplit = function(routeUrl) {
      var splitingUrl;
      splitingUrl = routeUrl.split(".");
      return splitingUrl[0];
  }
}

function RouteFunction(routeProvider) {
  var request;
  var that = this;
  this.partialsCache = {}
  
  this.fetchFile = function(path, callback) {
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    }
    else
      { throw new Error('Ajax is not supported by your browser'); }
    
    request.onload = function () {
      callback(request.response);
    };

    request.open("GET", path);
    request.send(null);
  }

  this.getContent = function(fragmentId, callback) {
    
    if (that.partialsCache[fragmentId]) {
      callback(that.partialsCache[fragmentId]);
    } 
    else {
      that.fetchFile(fragmentId + ".html", function(content) {
        that.partialsCache[fragmentId] = content;
        callback(content);
      });
    }
  
     that.currentRouteInfo();
  }

  this.currentRouteInfo=function(){
    var currentRouteInfo={};
    currentRoute=mainIndex.userRoutes;
    currentRouteInfo=currentRoute[mainIndex.fragmentId];
   
    if(currentRouteInfo!=null){
      mainIndex.currentController=currentRouteInfo["controller"]
    }
  }

  this.setActiveLink = function(fragmentId) {
    var navbarDiv = document.getElementById("navbar"),
    links = navbarDiv.children,i, link, pageName;
    for (i = 0; i < links.length; i++) {
      link = links[i];
      pageName = link.getAttribute("href").substr(1);
      if (pageName === fragmentId) {
        link.setAttribute("class", "active");
      } else {
        link.removeAttribute("class");
      }
    }
  }

  this.navigate = function(routeUrlName) {
    var contentDiv = document.getElementById("content");
    that.getContent(routeUrlName, function (content) {
      contentDiv.innerHTML = content;
      mainIndex.initialize();
    });
    that.setActiveLink(routeUrlName);
  }
}

var mainIndex = new MainIndex();
mainIndex.initialize();

















