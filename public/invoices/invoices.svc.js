/**
 * Created by sobolrr on 03.10.16.
 */
/**
 * This service for work with External storage.
 */

(function () {
    'use strict';

    angular
        .module('myApp.invoices')
        .factory('invoicesSvc', Service);

    function Service($http) {

        var factory = {};

        factory.getInvoices = function ()  {
            return  $http.get('api/invoices')
                .success(function(data) {
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });

        };
        
        factory.getInvoiceById = function (id) {
            return  $http.get('api/invoices/' + id + '/items')
                .success(function(data) {
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });

        };

        factory.remove = function (id, itemId) {
            return  $http.delete('/api/invoices/' + id + '/items/' + itemId)
                .success(function(data) {
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };
        factory.add = function (invoiceId, invoiceItem) {
            return $http.post('/api/invoices/' + invoiceId + '/items', invoiceItem);

        };
        factory.edit = function (invoiceId, InvoiceItem) {
            console.log(InvoiceItem);
            return $http.put('/api/invoices/' + invoiceId + '/items/'+ InvoiceItem.id, InvoiceItem);
        };

        return factory;

    }

})();