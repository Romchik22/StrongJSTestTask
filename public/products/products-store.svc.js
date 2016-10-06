/**
 * Created by sobolrr on 03.10.16.
 */
/**
 * This service for work with something like "storage on client side".
 */

(function () {
    'use strict';

    angular
        .module('myApp.products')
        .factory('productsStoreSvc', Service);

    function Service($http) {

        var factory = {};



        factory.remove = function (id) {
            factory.products = factory.products.filter(function(obj) {
                return obj.id !== id;
            });

            return factory.products;
        };

        factory.add = function (product) {

            factory.products.push(angular.copy(product));

            return factory.products;
        };

        factory.edit = function (product) {

            for (var i in factory.products) {
                if (factory.products[i].id == product.id) {
                    factory.products[i].name = product.name;
                    factory.products[i].price = product.price;
                    break;
                }
            }

            return factory.products;
        };
        factory.setData = function (data) {
            factory.products = data;
        };

        return factory;

    }

})();


