function Main(){
  this.scope = {};
  this.wholeBody=null;
  this.elements=[];
  this.element=null;
  this.firstFunction = function() {
      this.elements = document.querySelectorAll('[ngcontroller]');

      var repeat = new Repeating();
      repeat.initial();
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
      for(element=0; element<main.elements.length; element++){

        main.element=main.elements[element];


        controller  =  main.element.getAttribute('ngcontroller');

        main.scope[controller] = {};
        tempScope = main.scope[controller];

        initQuery  =  main.element.querySelectorAll('[init]');
        ngrepeatQuery  =  main.element.querySelectorAll('[ngrepeat]');
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




var main = new Main();
main.firstFunction();