/**
 * Created by sobolrr on 03.10.16.
 */
/**
 * This service for work with External storage.
 */

(function () {
    'use strict';

    angular
        .module('myApp.customers')
        .factory('customersSvc', Service);

    function Service($http) {

        var factory = {};

        factory.getCustomers = function ()  {
           return  $http.get('api/customers')
                 .success(function(data) {
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        };

        factory.remove = function (id) {
                return  $http.delete('api/customers/' + id)
                    .success(function(data) {
                        console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
        };
        factory.add = function (customer) {
                return $http.post('/api/customers', customer);
            
        };
        factory.edit = function (customer) {
            console.log(customer.id);
            return $http.put('/api/customers/' + customer.id, customer);
        };

        return factory;

    }

})();