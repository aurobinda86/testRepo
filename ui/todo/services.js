/**
 * Created by aaga36 on 4/13/2015.
 */

define([
    'angular',
    './module'
], function(angular, lazyModule){
    'use strict';

    lazyModule.service('TodoService',[
        '$http',
        function($http) {
            var self = this;
            self.getTodos = function() {
                return [
                    {name: 'Master HTML/CSS/Javascript', completed: true},
                    {name: 'Learn AngularJS', completed: false},
                    {name: 'Build NodeJS backend', completed: false},
                    {name: 'Get started with ExpressJS', completed: false},
                    {name: 'Setup MongoDB database', completed: false},
                    {name: 'Be awesome!', completed: false}
                ]
            }
        }
    ]);
});
