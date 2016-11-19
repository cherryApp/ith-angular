// https://raw.githubusercontent.com/syxolk/euro2016/master/tools/euro2016.json
var soccerController = function($http) {
    var url = 'http://localhost:3000/matches';
    var self = this;
    
    this.matches = {};
    
    $http.get(url).then(function(responseData) {
        console.log(responseData); 
        self.matches = responseData.data;
    });
};
soccerController.$inject = ['$http'];
ihr.controller('soccerController', soccerController);