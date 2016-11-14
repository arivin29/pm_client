var app = angular.module('v3App');

app.service('PmMaster', ['$http', function($http) {

    this.getModule = function(id,perusahaan) {
        return $http.get(BASE_URL + '/tasks/pegawai/all/' + id + '/' + perusahaan);
    };

    this.getPegawaiPerusahaan = function(id,perusahaan) {
        return $http.get(BASE_URL + '/tasks/pegawai/all/' + id + '/' + perusahaan);
    };

}]);

app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

app.filter('dateNow',['$filter',  function($filter) {
    return function() {
        return $filter('date')(new Date(), 'yyyy-MMMM-dd');
    };
}])
