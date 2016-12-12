var mainApp = angular.module('mainApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/index',
            {
                templateUrl:'views/index.html',
                controller:'IndexController'
            });
        $routeProvider.otherwise({redirectTo: '/index'});
    });


