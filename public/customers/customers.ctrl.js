/**
 * Created by sobolrr on 03.10.16.
 */
(function () {
    'use strict';

    angular
        .module('myApp.customers')
        .controller('customers.ctrl', Controller);
    function Controller($scope, customersSvc, customersStoreSvc) {
        customersSvc.getCustomers()
            .success(function (data) {
                $scope.collection = data;
                customersStoreSvc.setData(data);
                
            });

        $scope.removeCustomer = function (id, itemId) {
            $scope.collection.splice(id, 1);
            customersSvc.remove(itemId);
        };

        $scope.editCustomer = function (index) {
            $scope.collection = customersStoreSvc.edit($scope.tempCustomer);
            console.log($scope.tempCustomer);
            customersSvc.edit($scope.tempCustomer);
        };

        $scope.addCustomer = function () {
            $scope.collection = customersStoreSvc.add($scope.tempCustomer);
            customersSvc.add($scope.tempCustomer);
            $scope.tempCustomer = {};
        };

        $scope.tempCustomer = {};

    }
})();