// https://raw.githubusercontent.com/syxolk/euro2016/master/tools/euro2016.json
var onePlayerController = function($scope, $http, Config, $routeParams) {
    $scope.players = [];
    $scope.serverError = '';

    $http.get(Config.apiServer+'/players')
        .then(function(serverResponse) {
            for (var k in serverResponse.data) {
                if (serverResponse.data[k].id == $routeParams.id) {
                    $scope.player = serverResponse.data[k];
                }
            }
            console.log(serverResponse);
        });

    // Update player.
    $scope.updatePlayer = function() {
        $http.post(Config.apiServer+'/players/'+$scope.player.id, $scope.player)
            .then(function(serverResponse) {
                console.log(serverResponse);
            });
    };

};
onePlayerController.$inject = ['$scope', '$http', 'Config', '$routeParams'];
ihr.controller('onePlayerController', onePlayerController);
