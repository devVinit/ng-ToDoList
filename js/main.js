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
    
    $scope.addaToDo = function(toDoTitle , toDoDetail){
        $scope.ListOfToDo.push({ title :toDoTitle , details : toDoDetail});
    }
    
    $scope.deleteaToDo = function(title , details){
        console.log('chal ra h ');
        $scope.ListOfToDo.splice($scope.ListOfToDo.indexOf({title , details}) , 1);
    }
});