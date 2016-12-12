mainApp.controller('IndexController',
    function IndexController($scope, $http, $rootScope) {

        $http({method: 'GET', url: 'data.json'})
            .then(
                function (result) {
                    $scope.centerData = result.data;
                },
                function (data, status, headers, config) {
                    alert( "Have a http error" );
                }
            );

    }
)