ihr.directive('matchRow', [function(){
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/matchRow.html',
        scope: {
            matches: '='
        },
        controller: ['$scope', '$http', function($scope, $http) {
            // Check input data.
            if (typeof $scope.matches !== 'undefined') {
                if (!Array.isArray($scope.matches)) {
                    console.error('A megadott matches attribútum nem tömb.');
                    $scope.matches = [];
                }                
            }
            
            // Update or delete rows.
            $scope.updateRow = function(match) {
                var index = $scope.matches.indexOf(match);
                $http.post('http://localhost:3000/matches/'+index, match)
                    .then(function(res) {
                        if (res.data.success) {
                            console.info('update success');
                        }
                    });
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