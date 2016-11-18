var app = angular.module('v3App');
app.controller('perusahaan_kategori',['$scope','$state','$stateParams','service_perusahaan',function($scope,$state,$stateParams,service_master)
{
    service_master.getKategoriPerusahaan()
    .then(function(data){
        $scope.datas = data;

        if(DEBUG==true)
        {
            console.log(data);
            DATA=data;
        }

    });
}]);

app.controller('perusahaan',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_master,myHelp)
{
    var data = {nama:1};
    myHelp.GET(data)
    .then(function(data){
        $scope.datas = data;
        if(DEBUG==true)
        {
            console.log(data);
            DATA=data;
        }
    });

}]);
