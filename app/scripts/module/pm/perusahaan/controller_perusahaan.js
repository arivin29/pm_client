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
    myHelp.getParam('/perusahaan',data)
    .then(function(data){
        $scope.datas = data;
        debugData(data);
    });

}]);

app.controller('perusahaan.add',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_master,myHelp)
{
     $scope.submitForm = function() {

         myHelp.postParam('/perusahaan/add', $scope.perusahaan)
         .then(function mySuccesresponse()
         {
            console.log("simpan form" + $scope.perusahaan);
         }, function myError()
         {
            errorView("error paja tu");
         });
     };

}]);

app.controller('perusahaan_detail',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_master,myHelp)
{
    myHelp.getDetail('/perusahaan/detail/',$stateParams.id)
    .then(function(data){
        $scope.data = data.data;
        debugData(data);
    });

}]);

app.controller('perusahaan_detail_kontraktor',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_master,myHelp)
{
    myHelp.getDetail('/project?id_kontraktor=',$stateParams.id)
    .then(function(data){
        $scope.perusahaans = data.data;
        debugData(data);
    });

}]);

app.controller('perusahaan_detail_supervisi',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_master,myHelp)
{
    myHelp.getDetail('/project?id_supervisi=',$stateParams.id)
    .then(function(data){
        $scope.perusahaans = data.data;
        debugData(data);
    });

}]);
