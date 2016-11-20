var app = angular.module('v3App');
app.service('service_perusahaan', ['$http', function($http) {


    this.getProvinsi = function() {
        return $http.get(MASTER + '/provinsi');
    };

    this.getKabkot = function(id) {
        return $http.get(MASTER + '/kabkot/' + id);
    };

    this.getKecematan = function(id) {
        return $http.get(MASTER + '/kecematan/' + id);
    };

    this.getKelurahan = function(id) {
        return $http.get(MASTER + '/kelurahan/' + id);
    };



    this.getKategoriPerusahaan = function() {
        return $http.get(BASE_URL + '/master/kategori_perusahaan');
    };

    this.getPerusahaans = function(query) {
        return $http.get(BASE_URL + '/perusahaan', query);
    };


}]);
