// https://raw.githubusercontent.com/syxolk/euro2016/master/tools/euro2016.json
var soccerController = function($scope, $http, Config, matchService) {
    var self = this;
    this.matches = [];
    this.serverError = '';
    
    $scope.$watch(
        function(){
            return matchService.cache.matches;
        }, function(newValue, oldValue) {
            console.log('matches', newValue);
            if (newValue) {
                self.matches = newValue;
            }
        });

    matchService.get();

};
soccerController.$inject = ['$scope', '$http', 'Config', 'matchService'];
ihr.controller('soccerController', soccerController);
