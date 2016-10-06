/**
 * Created by sobolrr on 03.10.16.
 */
(function () {
    'use strict';

    angular
        .module('myApp.products')
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.when('/products', {
            templateUrl: 'products.html',
            controller: 'products.ctrl'
        })
    }

})();
