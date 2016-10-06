/**
 * Created by sobolrr on 03.10.16.
 */
(function () {
    'use strict';

    angular
        .module('myApp.customers')
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.when('/customers', {
            templateUrl: 'customers.html',
            controller: 'customers.ctrl'
        })
    }
 
})();
