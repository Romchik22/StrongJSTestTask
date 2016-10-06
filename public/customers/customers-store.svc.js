/**
 * Created by sobolrr on 03.10.16.
 */
/**
 * This service for work with something like "storage on client side".
 */

(function () {
    'use strict';

    angular
        .module('myApp.customers')
        .factory('customersStoreSvc', Service);

    function Service($http) {

        var factory = {};



        factory.remove = function (id) {
            factory.customers = factory.customers.filter(function(obj) {
                return obj.id !== id;
            });

            return factory.customers;
        };

        factory.add = function (customer) {

            factory.customers.push(angular.copy(customer));

            return factory.customers;
        };

        factory.edit = function (customer) {

            for (var i in factory.customers) {
                if (factory.customers[i].id == customer.id) {
                    factory.customers[i].name = customer.name;
                    factory.customers[i].address = customer.address;
                    factory.customers[i].phone = customer.phone;
                    break;
                }
            }

            return factory.customers;
        };
        factory.setData = function (data) {
            factory.customers = data;
        };

        return factory;

    }

})();


