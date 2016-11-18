var app = angular.module('v3App');
app.service('service_perusahaan', ['$http', function($http) {

    this.getKategoriPerusahaan = function() {
        return $http.get(BASE_URL + '/master/kategori_perusahaan');
    };

    this.getPerusahaans = function(query) {
        return $http.get(BASE_URL + '/perusahaan', query);
    };
 

}]);
