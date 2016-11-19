ihr.directive('matchRow', [function(){
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/matchRow.html',
        scope: {
            matches: '=',
            serverError: '='
        },
        controller: [
            '$scope',
            '$http',
            'Config',
            'matchFactory',
            function(
                $scope,
                $http,
                Config,
                matchFactory) {
            
            // Update or delete rows.
            $scope.updateRow = function(match) {
                matchFactory.updateMatch(match);
            };
            $scope.deleteRow = function(match) {
                if (!confirm('Biztosan törli a '+match.home+' és '+match.away+" meccset?")) {
                    return;
                }
                var index = $scope.matches.indexOf(match);
                $http.delete('http://localhost:3000/matches/'+index)
                    .then(function(res) {
                        if (res.data.success) {
                            $scope.matches.splice(index, 1);
                        }
                    });
            };
            
            
        }]
    };
}]);
