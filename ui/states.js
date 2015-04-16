/**
 * Created by aaga36 on 4/15/2015.
 */

define([
   'angular',
    'app'
], function(angular, app) {
    'use strict';

    app.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$ocLazyLoadProvider',
        'Constants',
        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, constants) {

            $ocLazyLoadProvider.config({
                asyncLoader: require
            });

            var lazyLoadModules = function(moduleName, moduleUrl) {
                return ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: moduleName,
                        files: [moduleUrl]
                    });
                }];
            };


        }
    ]);
});