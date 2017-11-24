mainIndex.route(function(routeProvider){
    
 
    routeProvider.when("home", {templateUrl : "home.html"})

    routeProvider.when("pageData", {templateUrl : "2WayDataBinding.html"})

    routeProvider.when("pageRepeat", {templateUrl : "repeat.html"})

    routeProvider.otherwise({templateUrl:"home.html"})



});