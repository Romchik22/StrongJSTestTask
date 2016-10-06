/**
 * Created by sobolrr on 03.10.16.
 */
/**
 * This service for work with something like "storage on client side".
 */

(function () {
    'use strict';

    angular
        .module('myApp.invoices')
        .factory('invoicesStoreSvc', Service);

    function Service($http) {

        var factory = {};



        factory.remove = function (id) {
            factory.invoices = factory.invoices.filter(function(obj) {
                return obj.id !== id;
            });

            return factory.invoices;
        };

        factory.add = function (invoiceItem) {

            factory.invoices.push(angular.copy(invoiceItem));

            return factory.invoices;
        };

        factory.edit = function (invoiceItem) {

            for (var i in factory.invoices) {
                if (factory.invoices[i].index == invoiceItem.index) {
                    factory.invoices[i].invoice_id = invoiceItem.invoice_id;
                    factory.invoices[i].product_id = invoiceItem.product_id;
                    factory.invoices[i].quantity = invoiceItem.quantity;
                    break;
                }
            }

            return factory.invoices;
        };
        factory.setData = function (data) {
            factory.invoices = data;
        };

        return factory;

    }

})();


