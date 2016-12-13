var mainApp = angular.module('mainApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/index',
            {
                templateUrl:'views/index.html',
                controller:'IndexController'
            })
            .when('/item/:id',
                {
                    templateUrl:'views/item.html',
                    controller:'ItemController'
                });
        $routeProvider.otherwise({redirectTo: '/index'});
    })
    .run( function($http, $rootScope){
        $http({method: 'GET', url: 'data.json'})
            .then(
                function (result) {
                    $rootScope.centerData = result.data;
                },
                function (data, status, headers, config) {
                    alert( "Have a http error" );
                }
            );
    } );


