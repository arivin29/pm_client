var app = angular.module('v3App');
app.controller('perusahaan_kategori',['$scope','$state','$stateParams','service_perusahaan',function($scope,$state,$stateParams,service_perusahaan)
{
    service_perusahaan.getKategoriPerusahaan()
    .then(function(data){
        $scope.datas = data;

        if(DEBUG==true)
        {
            console.log(data);
            DATA=data;
        }

    });
}]);

app.controller('perusahaan',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    var data = {nama:1};
    myHelp.getParam('/pm/perusahaan',data)
    .then(function(data){
        $scope.datas = data;
        debugData(data);
    });

}]);

//perusahaan jabatan
app.controller('perusahaan_jabatan',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    myHelp.getDetail('/pm/perusahaan/jabatan')
    .then(function(respons){
        $scope.perusahaans = respons.data;
        debugData(respons);
    });

}]);

app.controller('perusahaan.add',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    $scope.perusahaan= {};
    service_perusahaan.getKategoriPerusahaan()
    .then(function(data){
        $scope.perusahaan_kategori = data.data;
    });

    service_perusahaan.getProvinsi()
    .then(function(data){
        $scope.provinsi = data.data;
    });

    $scope.eventKabkot= function() {
        service_perusahaan.getKabkot(clearInt($scope.perusahaan.id_prov))
        .then(function(data){
            $scope.kabkot = data.data;
        });
    }

    $scope.eventKec= function() {
        service_perusahaan.getKecematan(clearInt($scope.perusahaan.id_kabkot))
        .then(function(data){
            $scope.kecematan = data.data;
        });
    }

    $scope.eventKel= function() {
        service_perusahaan.getKelurahan(clearInt($scope.perusahaan.id_kec))
        .then(function(data){
            $scope.kelurahan = data.data;
        });
    }


     $scope.submitForm = function() {
         console.log($scope.perusahaan);
         var Param = clearObj($scope.perusahaan);
         myHelp.postParam('/pm/perusahaan/add', Param)
         .then(function mySuccesresponse()
         {
            $state.go("perusahaan",{}, { reload: true })

         }
         , function myError()
         {
            errorView("error paja tu");
         });
     };

}]);

app.controller('perusahaan_detail',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    myHelp.getDetail('/pm/perusahaan/detail/' + $stateParams.id)
    .then(function(data){
        $scope.data = data.data;
        debugData(data);
    });

}]);

app.controller('perusahaan_detail_kontraktor',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    myHelp.getDetail('/pm/project?id_kontraktor=' + $stateParams.id)
    .then(function(data){
        $scope.perusahaans = data.data;
        debugData(data);
    });

}]);

app.controller('perusahaan_detail_supervisi',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    myHelp.getDetail('/pm/project?id_supervisi=' + $stateParams.id)
    .then(function(data){
        $scope.perusahaans = data.data;
        debugData(data);
    });

}]);


app.controller('perusahaan_detail.pegawai',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    myHelp.getDetail('/pm/perusahaan/' + $stateParams.id + '/pegawai')
    .then(function(respons){
        $scope.pegawais = respons.data;
        debugData(respons);
    });

}]);

app.controller('perusahaan_detail.pegawai.add',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    myHelp.getDetail('/pm/master/jabatan_perusahaan/')
    .then(function(respons){
        $scope.jabatan = respons.data;
    });

    $scope.pegawai = {id_perusahaan : $stateParams.id};

     $scope.submitForm = function() {
         console.log($scope.pegawai);
         myHelp.postParam('/pm/perusahaan/'+ $stateParams.id +'/pegawai/add', $scope.pegawai)
         .then(function mySuccesresponse()
         {
             $state.go("perusahaan_detail.pegawai",{}, { reload: true })
         }
         , function myError()
         {
            errorView("error paja tu");
         });
     };

}]);

app.controller('perusahaan_detail.pegawai.edit',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    myHelp.getDetail('/pm/perusahaan/'+ $stateParams.id +'/pegawai/' + $stateParams.id_perusahaan_pegawai)
    .then(function(respons){
        $scope.pegawai = respons.data;
    });

    myHelp.getDetail('/pm/master/jabatan_perusahaan/')
    .then(function(respons){
        $scope.jabatan = respons.data;
    });

    $scope.pegawai = {id_perusahaan : $stateParams.id};

     $scope.submitForm = function() {
         console.log($scope.pegawai);
         myHelp.postParam('/pm/perusahaan/'+ $stateParams.id +'/pegawai/edit/' + $scope.pegawai.id_perusahaan_pegawai, $scope.pegawai)
         .then(function mySuccesresponse()
         {
             $state.go("perusahaan_detail.pegawai",{}, { reload: true })
         }
         , function myError()
         {
            errorView("error paja tu");
         });
     };

}]);
