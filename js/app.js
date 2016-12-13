var mainApp = angular.module('mainApp', ["ngRoute"])
    .config(($routeProvider)=>{
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
    .run( ($http, $rootScope)=>{
        $http({method: 'GET', url: 'data.json'})
            .then(
                (result)=>{
                    $rootScope.centerData = result.data;
                },
                (data, status, headers, config)=>{
                    alert( "Have a http error" );
                }
            );
    } );


