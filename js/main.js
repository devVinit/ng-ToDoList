console.log(angular);

var ToDo = angular.module('ng-ToDo' , []);

ToDo.controller('mainController' ,function($scope){
    console.log($scope);
});