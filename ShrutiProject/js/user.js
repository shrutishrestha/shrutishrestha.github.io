mainIndex.route(function(routeProvider){
    console.log("2");
 
    routeProvider.when("home", { templateUrl : "home.html",controller : "CustomDirectiveController"})

    routeProvider.when("pageData", { templateUrl : "2WayDataBinding.html" , controller : "2WayController"})

    routeProvider.when("pageRepeat", { templateUrl : "repeat.html" , controller : "repeatController"})


    routeProvider.otherwise({templateUrl:"home.html"})



});


mainIndex.controller('repeatController',function(scope){
  console.log("scope");

  scope.customer=[
    { name : " John Smith " , city : " Phoenix "},
    { name : "John Doe" , city : "New York"},
    { name : "John Doe" , city :"Nepal" }
  ];
    console.log(scope);
});

// 

mainIndex.controller('CustomDirectiveController',function(scope){ 
  scope.username = 'nishma',
  scope.address = 'sanepa'
    
    
});

    
mainIndex.directive('myCustomUrl', function () {
        return {
            templateUrl: 'tableu.html'
        };
    });






