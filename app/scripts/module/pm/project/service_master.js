var app = angular.module('v3App');
app.service('service_master', ['$http', function($http) {

    this.getJenisProject = function() {
        return $http.get(BASE_URL + '/master/jenis_project');
    };

    this.getModule = function(id,perusahaan) {
        return $http.get(BASE_URL + '/tasks/pegawai/all/' + id + '/' + perusahaan);
    };

    this.getPegawaiPerusahaan = function(id,perusahaan) {
        return $http.get(BASE_URL + '/tasks/pegawai/all/' + id + '/' + perusahaan);
    };

}]);
