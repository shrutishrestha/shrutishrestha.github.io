mainIndex.route(function(routeProvider){
 
    routeProvider.when("home", { templateUrl : "home.html",controller : ""})

    routeProvider.when("pageData", { templateUrl : "2WayDataBinding.html" , controller : "2WayController"})

    routeProvider.when("pageRepeat", { templateUrl : "repeat.html" , controller : "repeatController"})

    routeProvider.when("user/name",{templateUrl : "trainee-detail.html" , controller:"repeatController"})


    routeProvider.otherwise({templateUrl:"home.html"})



});


mainIndex.controller('repeatController',function(scope){


var req = new XMLHttpRequest();
    req.open( "GET", "js/trainee.js", false);
 
    req.onreadystatechange = function()
    { 
        if( req.readyState == 4 && req.status == 200 )
        { 
            scope.students = JSON.parse(req.response);  
            scope.students.sort(function(a, b) {
              return (a.roll - b.roll);
        });
      }
    }
    req.send(null);
    });

// 

mainIndex.controller('CustomDirectiveController',function(scope){ 
    scope.company="Leapfrog Technology Inc",
    scope.username = 'Shruti Shrestha',
    scope.date="30th november"
  
    
    
});

    
mainIndex.directive('myCustomUrl', function () {
        return {
            templateUrl: 'header.html'
        };
    });






