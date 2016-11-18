ihr.controller('bodyController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.currentPage = 'soccer';
    $scope.getCurrentPage = function(name) {
        return 'templates/'+$scope.currentPage+'.html';  
    };
    
    // Change page.
    $scope.changePage = function($event) {
        $event.preventDefault();
        console.log($event.currentTarget.getAttribute('href'));
        $scope.currentPage = $event.currentTarget.getAttribute('href').replace('#', '');
    };
    
    // Check page.
    $scope.checkPage = function(name) {
        return location.hash === '#/'+name;
    };
}]);