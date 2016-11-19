// https://raw.githubusercontent.com/syxolk/euro2016/master/tools/euro2016.json
var playerController = function($scope, $http, Config) {
    $scope.players = [];
    $scope.serverError = '';

    $http.get(Config.apiServer+'/players')
        .then(function(serverResponse) {
            $scope.players = serverResponse.data;
            console.log(serverResponse);
        });

};
playerController.$inject = ['$scope', '$http', 'Config'];
ihr.controller('playerController', playerController);
