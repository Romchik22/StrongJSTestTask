/**
 * Created by sobolrr on 03.10.16.
 */
/**
 * This service for work with External storage.
 */

(function () {
    'use strict';

    angular
        .module('myApp.products')
        .factory('productsSvc', Service);

    function Service($http) {

        var factory = {};

        factory.getProducts= function ()  {
            return  $http.get('api/products')
                .success(function(data) {
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });

        };

        factory.remove = function (id) {
            return  $http.delete('api/products/' + id)
                .success(function(data) {
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };
        factory.add = function (products) {
            return $http.post('/api/products', products);

        };
        factory.edit = function (product) {
            console.log(product.id);
            return $http.put('/api/products/' + product.id, product);
        };

        return factory;

    }

})();