function MainIndex() {
  var repeat;
  var databind;
  this.scope = {};
  var that = this;
  var routeProvider;
  var routeFunction;
  var customDirective;
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
    console.log("1");
    that.mainElement = document.querySelector('[application]');
    mainIndex.elements = mainIndex.mainElement.querySelectorAll('[ngcontroller]');
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
      console.log("all controllers");
      console.log(that.userController);
    }

    that.directive = function(directiveName, directiveFunction){
      console.log("directive calling =============")
      var nameDirective;
      nameDirective=customDirective.renderDirectiveName(directiveName);//my-custom-url
      functionDirective=directiveFunction();//object returned from function
    
      customDirective.setDirective(nameDirective,functionDirective,repeat,routeFunction,routeProvider);
      
      
    }

            
    if (!location.hash) {
      console.log("6")
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
    }
  
    window.addEventListener('hashchange' , that.updateService , false);
  }
      
    this.updateService = function() {
      routeProvider.check();
      databind.arrayModelsValues();
      setTimeout(repeat.initial,10);
    }
}


function CustomDirective(){
  var a;
  var nameDirective;

  this.renderDirectiveName = function(directiveName){
    console.log("directuvdsvds----------"+directiveName)
    nameDirective=directiveName;
     console.log("nameDirective----------"+nameDirective)
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
   

    directive = document.getElementsByTagName(nameDirective)[0];
    parentOfDirective = directive.parentElement;
    controllerName = parentOfDirective.getAttribute('ngcontroller');
    currentControllerObject = mainIndex.userController[controllerName];
    keys = Object.keys(currentControllerObject);
    console.log("keys");
    console.log(keys);
  
    if(mainIndex.userController.hasOwnProperty(controllerName)){
      refracterString=routeProvider.routeUrlSplit(functionDirective["templateUrl"])
      routeFunction.getContent(refracterString, function (content) {
        console.log("refracterString");
        console.log(refracterString);
        directive.innerHTML=content;
        for(keyCount=0; keyCount<keys.length; keyCount++){
          directive.innerHTML = directive.innerHTML.replace('{{' + keys[keyCount] + '}}' , currentControllerObject[keys[keyCount]]);
        }
    
    });

      

      }

    }
  }


















function DataBind() {
  var that = this;
  var models = [];
  var ngvalues = [];
  var modelList = [];
  var valueList = [];

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
        that.dataBindingFunction();
      }
    }
  }

  this.dataBindingFunction = function() {
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

  this.initial = function() {
   
    
    for (element=0; element < mainIndex.elements.length; element++) {

      mainIndex.element = mainIndex.elements[element];
      controller=mainIndex.currentController;
      console.log("repeating-------")
      console.log(controller);
      checkChild = mainIndex.element.querySelectorAll('[ngrepeat]');
      console.log("checkChild");
      console.log(checkChild);
      if(checkChild[0]!=null){
        console.log("m inside repeat")
      
        collectionName = Object.keys(mainIndex.userController[controller])//customer
        console.log("collectionName");
        console.log(collectionName);
        mainIndex.mainScope[controller] = {};
        tempmainScope = mainIndex.mainScope[controller];
        if (mainIndex.userController.hasOwnProperty(controller)) {
          console.log("chiryooooooooooooooooo");
          currentController = mainIndex.userController[controller];
          tempmainScope = currentController;
        }
        ngrepeatQuery = mainIndex.element.querySelectorAll('[ngrepeat]');
        ngrepeatQuery.forEach(ngrepeat => {
        ngrepeatAttribute.push(ngrepeat.getAttribute('ngrepeat'));
        })
        that.seperateRepeatAttribute();
        that.setView();
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
      parentNode = ngrepeatQuery[i];   
      currentRepeat = ngrepeatQuery[i];
      currentDetailQuery = currentRepeat.querySelectorAll('[ngdetail]');
      for (j=0; j < tempmainScope[collectionName].length; j++) {
        for (k = 0; k < currentDetailQuery.length; k++){
          currentDetailName = currentDetailQuery[k].getAttribute('ngdetail');
          key=this.renderKey(currentDetailName);
          if (tempmainScope[collectionName][i].hasOwnProperty(key)) {
            that.replicateNode( parentNode,currentDetailQuery[k],j,key );
          }
        }
      }
    }
  }

  this.replicateNode = function(parentNode, childNode, index, key) {
    tagName = childNode.tagName;
    childNode.style.display = "none";
    childDuplicateNode = document.createElement(tagName);
    childDuplicateNode.innerHTML = tempmainScope[collectionName][index][key];
    parentNode.appendChild(childDuplicateNode);
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
  var currentRouteInfo;
  var templateControllerObject = [];
  var templateControllerKeyArray = [];
  var routeFunction = new RouteFunction();
  
  this.when = function(value, valueObj) {
    browserUrl = value;
    valueObject = valueObj;//{ templateUrl,controller  }
    userRoutes[browserUrl] = valueObject;//0->templateURl,,,1->controller
  }
        
  this.check = function() {   
    console.log("7");
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
    console.log("9-navigate")
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

















