/**
 * Created by sobolrr on 03.10.16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }
})();
