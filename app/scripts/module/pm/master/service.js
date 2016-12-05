var app = angular.module('v3App');

app.service('MasterService', ['$http', function($http) {

    this.getPerusahaans = function() {
        return $http.get(BASE_URL + '/pm/perusahaan');
    };


}]);
