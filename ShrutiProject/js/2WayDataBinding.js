function Main() {
  this.scope = {};
  this.element=null;
  var that=this;
  this.initialize=function(){
    this.element=document.querySelector('[ngcontroller]');
    var databind=new DataBind();
    databind.arrayModelsValues();
    databind.dataBindingFunction();
  }
}

var DataBind=function(){
  var models=[];
  var ngvalues=[];
  var modelList=[];
  var valueList=[];

  var that=this;

  this.arrayModelsValues=function(){
    modelList=mainTwoWay.element.querySelectorAll('[ngmodel]');
    valueList=mainTwoWay.element.querySelectorAll('[ngvalue]');

    modelList.forEach(model=>{
      models.push(model.getAttribute('ngmodel'));
    })
  
    valueList.forEach(value=>{
      ngvalues.push(value.getAttribute('ngvalue'));
    })
  }

  this.dataBindingFunction=function(){
    models.forEach(model=> {
      var index=models.indexOf(model);
      elements=modelList[index];
      elements.onkeyup = function () {
        key=model;
        value=modelList[models.indexOf(key)].value;
        mainTwoWay.scope[key]=value;
        ngvalues.forEach(ngvalue=> {
          var indexValue=ngvalues.indexOf(ngvalue);
          if(mainTwoWay.scope.hasOwnProperty(ngvalue)){
            valueList[indexValue].value=mainTwoWay.scope[ngvalue];
            valueList[indexValue].innerHTML=mainTwoWay.scope[ngvalue];
          }
        });
      };
    });
  }
}


var mainTwoWay=new Main();
mainTwoWay.initialize();