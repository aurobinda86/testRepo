/**
 * Created by aaga36 on 4/7/2015.
 */

define([
    'angular',
    '../module',
    '../services'
], function(angular, lazyModule, service){
    'use strict';
    lazyModule.controller('TodoController', [
        '$scope',
        '$http',
        'TodoService',
        function ($scope, $http, todoService) {
            console.log(todoService);
            $scope.todoList = todoService.getTodos();
        }
    ]);
});
