var app = angular.module('v3App');
app.service('myHelp', ['$http', function($http) {

    this.GET = function(data) {
        var query = {
             params: data,
             headers : {'Accept' : 'application/json'}
            };

        return $http.get(BASE_URL + '/perusahaan', query);
    };

}]);
