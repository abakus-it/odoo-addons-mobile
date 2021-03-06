'use strict';


angular.module('scan_to_inventory').controller(
        'SelectQuantityCtrl',
        ['$scope', '$rootScope', 'jsonRpc', '$state', 'StockInventoryModel', '$translate',
        function ($scope, $rootScope, jsonRpc, $state, StockInventoryModel, $translate) {

    $scope.data = {
        'qty': '',
    };

    $scope.$on(
            '$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
        if ($state.current.name === 'select_quantity') {
            // Set Focus
            angular.element(document.querySelector('#input_quantity'))[0].focus();
            $scope.data.qty = '';
            // Get Product Data
            $scope.product = $rootScope.ProductListByEan13[toParams['ean13']];
        }
    });

    $scope.submit = function () {
        if ($scope.data.qty != null && !isNaN($scope.data.qty)){
            if ($scope.data.qty < 1000000){
                if ($scope.data.qty > 0){
                    StockInventoryModel.AddInventoryLine(
                            $rootScope.currentInventoryId,
                            $rootScope.currentLocationId, $scope.product.id,
                            $scope.data.qty, 'ask').then(function (res){
                        if (res['state'] == 'write_ok'){
                            angular.element(document.querySelector('#sound_quantity_selected'))[0].play();
                            setTimeout(function(){
                                $state.go('select_product_product');
                            }, 300);
                        }else {
                            if (res['state'] == 'duplicate'){
                                $state.go('confirm_quantity', {
                                    product_id: $scope.product.id,
                                    current_qty: res['qty'],
                                    new_qty: $scope.data.qty});
                            } else {
                                $scope.errorMessage = $translate.instant("Too Many Duplicate Lines");
                                angular.element(document.querySelector('#sound_user_error'))[0].play();
                            }
                        }
                    }, function(reason) {
                        $scope.errorMessage = $translate.instant("Something Wrong Happened");
                    });
                }else{
                    $scope.errorMessage = $translate.instant("Too Small Quantity");
                    angular.element(document.querySelector('#sound_user_error'))[0].play();
                }
            }else{
                $scope.errorMessage = $translate.instant("Too Big Quantity");
                angular.element(document.querySelector('#sound_user_error'))[0].play();
            }
        }
        else{
            $scope.errorMessage = $translate.instant("Incorrect Quantity");
            angular.element(document.querySelector('#sound_user_error'))[0].play();
        }
    };

}]);
