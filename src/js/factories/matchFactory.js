// Handle matches.
ihr.factory('matchFactory', ['$q', '$http', 'Config', function($q, $http, Config) {
    return {
        url: Config.apiServer + '/matches',
        getMatches: function() {
            var deferred = $q.defer();
            $http.get(this.url)
                .then(function(responseData){
                    if (!responseData.data) {
                        deferred.reject('bad object');
                    } else {
                        deferred.resolve(responseData.data);
                    }
                }, function(err) {
                    deferred.reject('Error in request: '+err.statusText);
                });

            return deferred.promise;
        },
        updateMatch: function(match) {
            var deferred = $q.defer();
            $http.post(this.url+'/'+match.id, match)
                .then(function(res) {
                    if (res.data.success) {
                        deferred.resolve(true);
                    } else {
                        deferred.reject(res.data.error);
                    }
                }, function(err) {
                    deferred.reject('Error in request: '+err.statusText);
                });

            return deferred.promise;
        }
    }
}]);





