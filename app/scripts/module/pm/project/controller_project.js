var Objeks = [];
var chace = {};

var appProject = angular.module('v3App');
appProject.controller('project',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/project',data)
    .then(function(respons){
        $scope.projects = respons;
        debugData(respons);
    });

}]);

app.controller('project.add',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    $scope.project ={};
    $scope.paket ={};

    service_perusahaan.getProvinsi()
    .then(function(respons){
        $scope.provinsis = respons.data;
    });

    $scope.update_kabkot = function()
    {
        $scope.project.id_kabkot=null;
        service_perusahaan.getKabkot($scope.project.id_prov)
        .then(function(respons){
            $scope.kabkots = respons.data;
        });
    }

    //jenis project
    myHelp.getDetail('/master/jenis_project')
    .then(function(respons){
        $scope.jenis_project = respons.data;
    });

    //list perusahaan
    var data = {};
    var Perusahaans;
    myHelp.getParam('/perusahaan/master',data)
    .then(function(respons){
        Perusahaans = respons.data;
    });


    //paket project
    myHelp.getParam('/project/paket',{status_lock:'no'})
    .then(function(respons){
        $scope.pakets = respons.data;

        $scope.ambilPaket = function functionName() {
            myHelp.getParam('/project/paket/' + $scope.project.id_project_paket)
            .then(function(responsPaket){
                $scope.paket = responsPaket.data;

                //set id_kontraktor /supervisi
                $scope.project.id_kontraktor = responsPaket.data.ID_KONTRAKTOR_PAKET;
                $scope.project.id_supervisi = responsPaket.data.ID_SUPERVISI_PAKET;
                $scope.project.pangu_anggaran = responsPaket.data.PAGU_ANGGARAN_PAKET;
                $scope.perusahaans = Perusahaans;
            });
        }

    });

    //Perusahaan


     $scope.submitForm = function(isValid) {
         console.log($scope.project);
         if (isValid)
         {
            myHelp.postParam('/project/add', $scope.project)
            .then(function mySuccesresponse()
            {
               $state.go("project",{}, { reload: true })

            }
            , function myError()
            {
               errorView("error paja tu");
            });
        }

     };

}]);

app.controller('project.edit',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_perusahaan,myHelp)
{
    //paket project
    myHelp.getParam('/project/paket',{})
    .then(function(respons){
        $scope.pakets = respons.data;
    });
    service_perusahaan.getProvinsi()
    .then(function(respons){
        $scope.provinsis = respons.data;
    });

    myHelp.getDetail('/project/detail_lite/'+ $stateParams.id_project)
    .then(function(respons){
        $scope.project = respons.data;

        //list perusahaan
        var data = {};
        var Perusahaans;
        myHelp.getParam('/perusahaan/master',data)
        .then(function(respons){
            Perusahaans = respons.data;
        });

        $scope.ambilPaket = function () {
            ambilPaket();
        };

        ambilPaket();
        //list kabkot
        service_perusahaan.getKabkot($scope.project.id_prov)
        .then(function(respons){
            $scope.kabkots = respons.data;
        });


    });

    function ambilPaket()
    {
        myHelp.getParam('/project/paket/' + clearInt($scope.project.id_project_paket))
        .then(function(responsPaket){
            $scope.paket = responsPaket.data;

            //set id_kontraktor /supervisi
            $scope.project.id_kontraktor = responsPaket.data.ID_KONTRAKTOR_PAKET;
            $scope.project.id_supervisi = responsPaket.data.ID_SUPERVISI_PAKET;
            $scope.project.pangu_anggaran = responsPaket.data.PAGU_ANGGARAN_PAKET;
            $scope.perusahaans = Perusahaans;
        });
    }



    $scope.update_kabkot = function()
    {
        $scope.project.id_kabkot=null;
        service_perusahaan.getKabkot(clearInt($scope.project.id_prov))
        .then(function(respons){
            $scope.kabkots = respons.data;
        });
    }

    //jenis project
    myHelp.getDetail('/master/jenis_project')
    .then(function(respons){
        $scope.jenis_project = respons.data;
    });

    //list perusahaan
    var data = {};
    var Perusahaans;
    myHelp.getParam('/perusahaan/master',data)
    .then(function(respons){
        Perusahaans = respons.data;
    });


    //Perusahaan


     $scope.submitForm = function(isValid) {
         var Param = clearObj($scope.project)
         if (isValid)
         {
            myHelp.postParam('/project/edit/' + $scope.project.id_project, Param)
            .then(function mySuccesresponse()
            {
               $state.go("project",{}, { reload: true })

            }
            , function myError()
            {
               errorView("error paja tu");
            });
        }

     };

}]);

appProject.controller('project_detail',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var id_project = $stateParams.id_project;
    myHelp.getDetail('/project/' + id_project)
    .then(function(respons){
        $scope.project = respons.data;
        debugData(respons);

        chace.id_kabkot = respons.data.ID_KABKOT;
    });

    myHelp.getDetail('/project/lokasi/' + id_project)
    .then(function(respons){
        $scope.lokasis = respons.data;
        debugData(respons);
    });

}]);

appProject.controller('project_paket',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    myHelp.getDetail('/project/paket')
    .then(function(respons){
        $scope.pakets = respons.data;
        debugData(respons);
    });

}]);

appProject.controller('project_paket.detail',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var id_paket = $stateParams.id_paket;
    myHelp.getDetail('/project/paket/' + id_paket)
    .then(function(respons){
        $scope.paket = respons.data;
        debugData(respons);
    });

}]);
app.controller('project_paket.add',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/perusahaan/master',data)
    .then(function(respons){
        $scope.perusahaans = respons.data;
        debugData(data);
    });

     $scope.submitForm = function() {
         console.log($scope.paket);
         myHelp.postParam('/project/paket/add', $scope.paket)
         .then(function mySuccesresponse()
         {
            $state.go("project_paket",{}, { reload: true })

         }
         , function myError()
         {
            errorView("error paja tu");
         });
     };

}]);

app.controller('project_paket.edit',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/perusahaan/master',data)
    .then(function(respons){
        $scope.perusahaans = respons.data;
    });

    //jenis project
    var select;
    myHelp.getDetail('/project/paket_lite/' + $stateParams.id_paket)
    .then(function(respons){
        $scope.paket = respons.data;
    });


     $scope.submitForm = function() {
         var Param = clearObj($scope.paket)
         myHelp.postParam('/project/paket/edit',Param)
         .then(function mySuccesresponse()
         {
            $state.go("project_paket",{}, { reload: true })

         }
         , function myError()
         {
            errorView("error paja tu");
         });
     };

}]);

//LOKASI

appProject.controller('project_detail.lokasi_add',['$http','$scope','$state','$stateParams','myHelp','service_perusahaan',function($http,$scope,$state,$stateParams,myHelp,service_perusahaan)
{
    $scope.lokasi={};
    var id_project = $stateParams.id_project;
    myHelp.getDetail('/project/detail_lite/' + id_project)
    .then(function(respons){
        $scope.project_lite = respons.data;
        $scope.lokasi.id_project = id_project;

        service_perusahaan.getKecematan(respons.data.id_kabkot)
        .then(function(respons){
            $scope.kecematans = respons.data;
        });

    });

    $scope.updateKel = function()
    {
        console.log("asdsada");
        var id_kec = clearInt($scope.lokasi.id_kec);
        service_perusahaan.getKelurahan(id_kec)
        .then(function(respons){
            $scope.kelurahans = respons.data;
        });
    }

    $scope.submitFormLokasi = function() {
        var Param = clearObj($scope.lokasi)

        myHelp.postParam('/project/lokasi/add',Param)
        .then(function mySuccesresponse()
        {
           $state.go("project_detail",{}, { reload: true })
        }
        , function myError()
        {
           errorView("error paja tu");
        });
    };


}]);

appProject.controller('project_detail.lokasi_edit',['$http','$scope','$state','$stateParams','myHelp','service_perusahaan',function($http,$scope,$state,$stateParams,myHelp,service_perusahaan)
{

    $scope.lokasi={};
    var id_project = $stateParams.id_project;
    myHelp.getDetail('/project/detail_lite/' + id_project)
    .then(function(respons){
        $scope.project_lite = respons.data;
        $scope.lokasi.id_project = id_project;

        service_perusahaan.getKecematan(respons.data.id_kabkot)
        .then(function(respons){
            $scope.kecematans = respons.data;
        });

    });

    $scope.lokasi={};
    var id_lokasi = $stateParams.id_lokasi;
    myHelp.getDetail('/project/lokasi/detail_lite/' + id_lokasi)
    .then(function(respons){
        $scope.lokasi = respons.data;
        $scope.updateKel();
    });

    $scope.updateKel = function()
    {
        console.log("asdsada");
        var id_kec = clearInt($scope.lokasi.id_kec);
        service_perusahaan.getKelurahan(id_kec)
        .then(function(respons){
            $scope.kelurahans = respons.data;
        });
    }

    $scope.submitFormLokasi = function() {
        var Param = clearObj($scope.lokasi)

        myHelp.postParam('/project/lokasi/edit',Param)
        .then(function mySuccesresponse()
        {
           $state.go("project_detail",{}, { reload: true })
        }
        , function myError()
        {
           errorView("error paja tu");
        });
    };


}]);

//MODULE

appProject.controller('project_detail.rekap',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var id_project = $stateParams.id_project;
    myHelp.getDetail('/project/modul/' + id_project)
    .then(function(respons){
        $scope.modules = respons.data;
        debugData(respons);
    });

}]);
app.controller('project_detail.rekap.add',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var id_project = $stateParams.id_project;
    myHelp.getDetail('/project/modul/pre_add/' + id_project)
    .then(function(respons){
        $scope.pre = respons.data;
    });

     $scope.submitForm = function() {
         $scope.modul.id_project = $stateParams.id_project;

         myHelp.postParam('/project/modul/add', $scope.modul)
         .then(function mySuccesresponse()
         {
            $state.go("project_detail.rekap",{}, { reload: true })

         }
         , function myError()
         {
            errorView("error paja tu");
         });
     };

}]);

app.controller('project_detail.rekap.edit',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{

    myHelp.getDetail('/project/modul/detail_lite/' + $stateParams.id_modul)
    .then(function(respons){
        $scope.modul = respons.data;
        var progres = respons.data.modul_progres;

        myHelp.getDetail('/project/modul/pre_add/' + respons.data.id_project)
        .then(function(respons){
            $scope.pre = respons.data; 
            $scope.pre.TOTAL = respons.data.TOTAL - progres;
        });
    });

     $scope.submitForm = function() {
        // $scope.modul.id_project = $stateParams.id_project;

         myHelp.postParam('/project/modul/edit', $scope.modul)
         .then(function mySuccesresponse()
         {
            $state.go("project_detail.rekap",{}, { reload: true })

         }
         , function myError()
         {
            errorView("error paja tu");
         });
     };

}]);
