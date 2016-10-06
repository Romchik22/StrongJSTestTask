/**
 * Created by sobolrr on 03.10.16.
 */
(function () {
    'use strict';

    angular
        .module('myApp.products')
        .controller('products.ctrl', Controller);
    function Controller($scope, productsSvc, productsStoreSvc) {
        productsSvc.getProducts()
            .success(function (data) {
                $scope.collection = data;
                productsStoreSvc.setData(data);

            });

        $scope.removeProduct = function (id, itemId) {
            $scope.collection.splice(id, 1);
            productsSvc.remove(itemId);
        };

        $scope.editProduct = function () {
            $scope.collection = productsStoreSvc.edit($scope.tempProduct);
            console.log($scope.tempProduct);
            productsSvc.edit($scope.tempProduct);
        };

        $scope.addProduct = function () {
            $scope.collection = productsStoreSvc.add($scope.tempProduct);
            productsSvc.add($scope.tempProduct);
            $scope.tempProduct = {};
        };

        $scope.tempProduct = {};

    }
})();