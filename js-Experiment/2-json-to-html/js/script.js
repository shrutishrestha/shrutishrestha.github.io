var data = [
{
 tagName: 'div',
 className: 'test-class',
 styles: {
   width: "100px",
   height: "100px",
   backgroundColor: 'red'
 },
 children: [
 {
   tagName: 'div',
   className: 'box',
   styles: {
     width: "50px",
     height: "50px",
     backgroundColor: 'blue'
   },
 },
 {
   tagName: 'div',
   className: 'box',
   styles: {
     width: "50px",
     height: "50px",
     backgroundColor: 'brown',
     float: 'right'
   },
 }
 ]
}
];



function displayData() {
  for(var i=0;i<data.length;i++) {
    var mainWrapper = document.createElement(data[i].tagName);
    mainWrapper.className = data[i].className;

    styl=data[i].styles
    // setCssAttributes(mainWrapper, data[i].styles);
    var keys = Object.keys(styl);

    for(var k=0;k<keys.length; k++) {
      mainWrapper.style[keys[k]] = styl[keys[k]];
    }

    document.body.appendChild(mainWrapper);

    if(data[i].children) {
      var dataChildren = data[i].children;
      
      for(var j=0; j<dataChildren.length; j++) {
        var childWrapper = document.createElement(dataChildren[j].tagName);
        childWrapper.className = dataChildren[j].className;
        sty=dataChildren[j].styles
        var key = Object.keys(sty);

        for(var k=0;k<key.length; k++) {
          childWrapper.style[key[k]] = sty[key[k]];
        }



        mainWrapper.appendChild(childWrapper);
      }
    }

  }
}



displayData()