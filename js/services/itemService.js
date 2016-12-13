angular.module("mainApp").factory( 'itemService', function( $rootScope ){
    return {
        getCategory : function ( id ) {
            for( var i=0;i< $rootScope.centerData.category.length;i++){
                if( $rootScope.centerData.category[i].sub.length >0 ){
                    for( var n=0;n< $rootScope.centerData.category[i].sub.length;n++){
                        if( $rootScope.centerData.category[i].sub[n].id == id )return $rootScope.centerData.category[i].sub[n];
                    }
                }
            }
            return {};
        }
    }
});