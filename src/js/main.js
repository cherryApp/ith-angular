var ihr = angular.module('ihr', []);

ihr.controller('greetController', ['$scope', '$http', function($scope, $http) {
    $scope.greet = 'hola'; 

    $scope.$watch('greet', function(newData, oldData) {
        console.log(newData, oldData); 
        if (newData.indexOf('pityu') < 0) {
            $scope.greet = 'pityu';
        }
    });
}]); 


               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               