console.log(angular);

var ToDo = angular.module('ng-ToDo' , []);

ToDo.controller('mainController' ,function($scope){
    console.log($scope);
    $scope.ListOfToDo = [
        {
            title : "Do my Homework" ,
            details : "I must do my homework"
        },
        {
            title : "Do my Homework" ,
            details : "I must do my homework"
        },
        {
            title : "Do my Homework" ,
            details : "I must do my homework"
        },
        {
            title : "Do my Homework" ,
            details : "I must do my homework"
        },
        {
            title : "Do my Homework" ,
            details : "I must do my homework"
        }
    ];
    
});