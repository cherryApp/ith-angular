ihr.controller('bodyController', ['$scope', function($scope) {
    $scope.currentPage = 'index';
    $scope.getCurrentPage = function(name) {
        return 'templates/'+$scope.currentPage+'.html';  
    };
}]);