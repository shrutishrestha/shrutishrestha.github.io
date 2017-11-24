index.route(function(routeProvider){
    console.log("yo--");
 
    routeProvider.when("", {templateUrl : "home.html"})

    routeProvider.when("pageData", {templateUrl : "2WayDataBinding.html"})

    routeProvider.when("pageRepeat", {templateUrl : "repeat.html"})

  

});