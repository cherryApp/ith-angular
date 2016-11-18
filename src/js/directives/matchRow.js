ihr.directive('matchRow', [function(){
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/matchRow.html',
        scope: {
            matches: '='
        },
        controller: ['$scope', function($scope) {
            // Check input data.
            if (typeof $scope.matches !== 'undefined') {
                if (!Array.isArray($scope.matches)) {
                    console.error('A megadott matches attribútum nem tömb.');
                    $scope.matches = [];
                }                
            }
            
            // Update or delete rows.
            $scope.updateRow = function() {
                
            };
            $scope.deleteRow = function(match) {
                if (!confirm('Biztosan törli a '+match.home+' és '+match.away+" meccset?")) {
                    return;
                }
                var index = $scope.matches.indexOf(match);
                $scope.matches.splice(index, 1);
                // $http.delete('matches/'+index);
            };
            
            
        }]
    };
}]);