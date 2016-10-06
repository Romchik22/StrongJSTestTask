/**
 * Created by sobolrr on 03.10.16.
 */
(function () {
    'use strict';

    angular
        .module('myApp.invoices')
        .controller('invoices.ctrl', Controller);
    function Controller($scope, invoicesSvc, invoicesStoreSvc, $location, $routeParams) {
        $scope.invoiceId = $routeParams.id;
        console.log($routeParams.id + " " + $scope.invoiceId);
        invoicesSvc.getInvoices()
            .success(function (data) {
                $scope.collection = data;
            });

        $scope.go = function (id) {
            $location.path("invoices/" + id);
        };
        $scope.check = function (item){ item.readonly = !item.readonly };

        invoicesSvc.getInvoiceById($routeParams.id)
            .success(function (data) {
                $scope.collectionItem = data;
                invoicesStoreSvc.setData(data);
            });

    $scope.removeInvoiceItem = function (id, itemId) {
            $scope.collectionItem.splice(id, 1);
            invoicesSvc.remove($routeParams.id, itemId);
        };

        $scope.editInvoiceItem = function (index) {
            if(!$scope.tempInvoiceItem.readonly) {
                $scope.collectionItem = invoicesStoreSvc.edit($scope.tempInvoiceItem);
                invoicesSvc.edit($routeParams.id, $scope.tempInvoiceItem)
            }
        };

        $scope.addInvoiceItem = function () {
            invoicesSvc.add($routeParams.id, $scope.tempInvoiceItem)
            $scope.collectionItem = invoicesStoreSvc.add($scope.tempInvoiceItem);
            

            $scope.tempInvoiceItem = {};
        };

        $scope.tempInvoiceItem = {};

    }
})();
