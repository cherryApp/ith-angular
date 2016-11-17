// User controller.
var userController = function($http) {
    
    console.log($http);
    
    // User data.
    var self = this;
    this.user = {
        name: {
            first: 'Vér',
            last: 'Pistike'
        },
        job: 'programmer',
        age: 33
    };
    
    // Handle submit.
    this.regUser = function($event) {
        $event.preventDefault();
        console.log(self.user);
    };
};
userController.$inject = ['$http'];
ihr.controller('userController', userController);
