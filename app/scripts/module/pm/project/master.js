var app = angular.module('v3App');

app.service('PmMaster', ['$http', function($http) {

    this.getModule = function(id,perusahaan) {
        return $http.get(BASE_URL + '/tasks/pegawai/all/' + id + '/' + perusahaan);
    };

    this.getPegawaiPerusahaan = function(id,perusahaan) {
        return $http.get(BASE_URL + '/tasks/pegawai/all/' + id + '/' + perusahaan);
    };

}]);
