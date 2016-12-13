mainApp.controller('IndexController',
    function IndexController($scope, $rootScope, $location, itemService) {

        $scope.filter = {price_1: 0, price_2: 0, category: 0, name: ''};

        $scope.filterItems = ( item )=>{
            var cout = true;
            if( cout && $scope.filter.price_1 > 0 && item.price < $scope.filter.price_1 )cout = false;
            if( cout && $scope.filter.price_2 > 0 && item.price > $scope.filter.price_2 )cout = false;
            if( cout && $scope.filter.category > 0 && item.category != $scope.filter.category )cout = false;
            return cout;
        }

        $scope.getItemDescription = ( item )=>{
            $location.path( '/item/'+item.id )
        }

        $scope.category = ( id )=>{
            return itemService.getCategory(id);
        }
    }
)
