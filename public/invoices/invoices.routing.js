/**
 * Created by sobolrr on 03.10.16.
 */
(function () {
    'use strict';

    angular
        .module('myApp.customers')
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.when('/invoices', {
            templateUrl: 'invoices.html',
            controller: 'invoices.ctrl'

        }),
            $routeProvider.when('/invoices/:id', {
                templateUrl: 'invoice.html',
                controller: 'invoices.ctrl'
            })
    }

})();
