// https://raw.githubusercontent.com/syxolk/euro2016/master/tools/euro2016.json
var soccerController = function($http) {
    var url = 'https://raw.githubusercontent.com/syxolk/euro2016/master/tools/euro2016.json';
    var self = this;
    
    this.soccer = {};
    
    $http.get(url).then(function(responseData) {
        console.log(responseData); 
        self.soccer = responseData.data;
    });
};
soccerController.$inject = ['$http'];
ihr.controller('soccerController', soccerController);