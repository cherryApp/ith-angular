var ihr = angular.module('ihr', ['ngRoute']);
ihr.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){

    $httpProvider.defaults.withCredentials = true;

    $routeProvider.when('/soccer', {
        controller: 'soccerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/soccer.html'
    }).when('/register', {
        controller: 'userController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/register.html'
    }).otherwise({
        controller: 'soccerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/soccer.html'
    });
}]);

ihr.controller('greetController', ['$scope', '$http', function($scope, $http) {
    $scope.greet = 'hola'; 

    $scope.$watch('greet', function(newData, oldData) {
        console.log(newData, oldData); 
        if (newData.indexOf('pityu') < 0) {
            $scope.greet = 'pityu';
        }
    });
}]); 


               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               