mainApp.controller('ItemController',
    function ItemController($scope, $http, $rootScope, $routeParams, itemService) {
        $scope.item={};
        $scope.gallery=[];
        $scope.errors = [];
        $scope.message = '';

/*        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
            language: 'ru',
            componentRestrictions: {country: 'ru'}
        });*/

        for( var i=0;i<$rootScope.centerData.catalog.length;i++ ){
            if( $rootScope.centerData.catalog[i].id == $routeParams.id ) {
                $scope.item = $rootScope.centerData.catalog[i];
            }
        }

        for( var i=0;i<$rootScope.centerData.gallery.length;i++ ){
            if( $rootScope.centerData.gallery[i].item == $routeParams.id ) {
                $scope.gallery.push( $rootScope.centerData.gallery[i] );
            }
        }

        $scope.category = ( id )=>{
            return itemService.getCategory(id);
        };

        $scope.saveForm = ( form )=>{
            $scope.errors = [];
            if( form ) {
                if(!form.email ) $scope.errors.push('E-mail field is a required');
                else {
                    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if(reg.test(form.email) == false) {
                        $scope.errors.push('Incorrect E-mail');
                    }
                }
                if( !form.name ) $scope.errors.push('Name field is a required');
                if( form.vk ) {
                    var reg = /^https:\/\/vk.com\/(.+)?$/;
                    if(reg.test(form.vk) == false) $scope.errors.push('Incorrect VK link');
                }
            }
                else $scope.errors.push('E-mail and NAME fields are a required');

            if( $scope.errors.length == 0 ){
                $scope.message = "Your order was sent";
            }
        }
    }
)
