var ihr = angular.module('ihr', ['ngRoute']);
ihr.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){

    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common.Token = 'szupertoken';

    $routeProvider.when('/soccer', {
        controller: 'soccerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/soccer.html'
    }).when('/register', {
        controller: 'userController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/register.html'
    }).when('/players', {
        controller: 'playerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/directives/playerRow.html'
    }).when('/players/:id', {
        controller: 'onePlayerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/onePlayer.html'
    }).otherwise({
        controller: 'soccerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/soccer.html'
    });
}]);

// Constant.
ihr.constant('Config', {
    apiServer: 'http://localhost:3000'
});


               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
