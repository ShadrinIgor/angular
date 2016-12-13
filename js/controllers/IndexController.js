mainApp.controller('IndexController',
    function IndexController($scope, $http, $rootScope) {

        $scope.filter = {price_1: 0, price_2: 0, category: 0, name: ''};

        $scope.filterItems = function( item ) {
            var cout = true;

            if( cout && $scope.filter.price_1 > 0 && item.price < $scope.filter.price_1 )cout = false;

            if( cout && $scope.filter.price_2 > 0 && item.price > $scope.filter.price_2 )cout = false;
            
            if( cout && $scope.filter.category > 0 && item.category != $scope.filter.category )cout = false;

            return cout;
        }
        
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