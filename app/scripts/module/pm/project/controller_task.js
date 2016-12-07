appProject.controller('project_detail.task',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/pm/project/task/' + $stateParams.id_project,data)
    .then(function(respons){
        $scope.tasks = respons.data;
        debugData(respons);
    });

}]);


appProject.controller('project_detail.task.add',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    $scope.task={};
    var data = {};
    myHelp.getDetail('/pm/project/modul/list_lite/' + $stateParams.id_project)
    .then(function(respons){
        $scope.moduls = respons.data;
        debugData(respons);
    });

    $scope.ambilModul = function()
    {
        myHelp.getDetail('/pm/project/task/detail_pre_add/' + $scope.task.id_modul)
        .then(function(respons){
            $scope.modul = respons.data;
            debugData(respons);
        });
    }


    $scope.submitForm = function(isValid) {
        var Param = clearObj($scope.task)
        if (isValid)
        {
           myHelp.postParam('/pm/project/task/add', Param)
           .then(function mySuccesresponse()
           {
              $state.go("project_detail.task",{}, { reload: true })

           }
           , function myError()
           {
              errorView("error paja tu");
           });
       }

    };
}]);

appProject.controller('project_detail.task.edit',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    $scope.task={};
    var data = {};
    myHelp.getDetail('/pm/project/modul/list_lite/' + $stateParams.id_project)
    .then(function(respons){
        $scope.moduls = respons.data;
        debugData(respons);
    });

    //load TASK
    myHelp.getDetail('/pm/project/task/detail_lite/' + $stateParams.id_task)
    .then(function(respons){
        $scope.task = respons.data;
        var task_progress = respons.data.task_progress;


        myHelp.getDetail('/pm/project/task/detail_pre_add/' + $scope.task.id_modul)
        .then(function(respons){
            $scope.modul = respons.data;
            $scope.modul.TOTAL_PROGRESS = $scope.modul.TOTAL_PROGRESS -task_progress;
            debugData(respons);
        });

        $scope.ambilModul = function()
        {
            myHelp.getDetail('/pm/project/task/detail_pre_add/' + $scope.task.id_modul)
            .then(function(respons){
                $scope.modul = respons.data;
                debugData(respons);
            });
        }

    });



    $scope.submitForm = function(isValid) {
        var Param = clearObj($scope.task)
        if (isValid)
        {
           myHelp.postParam('/pm/project/task/edit', Param)
           .then(function mySuccesresponse()
           {
              $state.go("project_detail.task",{}, { reload: true })

           }
           , function myError()
           {
              errorView("error paja tu");
           });
       }

    };
}]);

//SUB TASK DETAIL
appProject.controller('task_detail',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    //$scope.dataChart = [];
    myHelp.getDetail('/pm/project/task/detail/' + $stateParams.id_task)
    .then(function(respons){
        $scope.task = respons.data.task;
        $scope.report_rekap = respons.data.report_rekap;
        $scope.check_rangkum = respons.data.check_rangkum;
        $scope.perusahaan = respons.data.perusahaan;

        $scope.lamaKerja = count_hari(respons.data.task.task_start, respons.data.task.task_end );

        var sisaHari = count_hari(new Date(), respons.data.task.task_end );
        var Status = "Close";
        if(respons.data.task.task_progress_realisasi < 99)
        {
            $scope.sisaHari = sisaHari;
            $scope.Status = "Open";
        }
        else
        {
            $scope.sisaHari = 0;
        }

        //panggil grafik report
        myHelp.getDetail('/pm/project/task/report/' + $stateParams.id_task)
        .then(function(respons){
            var laporan = respons.data;
            $scope.reports = laporan;
            debugData(respons);

            $scope.dataChart = [ ];
            var hasilLaporan =[];
            for (var i = 0; i < laporan.length; i++) {
                var sub = {};
                sub.y = laporan[i].TGL_LAPORAN;
                sub.item1 = laporan[i].TOTAL_PROGRESS;
                hasilLaporan.push(sub);
                console.log(laporan[0]);
            }

            $scope.dataChart =hasilLaporan;



            //   {y: '2012-01-01', item1: 10},
            //   {y: '2012-02-01', item1: 23},
            //   {y: '2012-03-01', item1: 45},
            //   {y: '2012-04-01', item1: 57},
            //   {y: '2012-05-01', item1: 68},
            //   {y: '2012-06-01', item1: 69},
            //   {y: '2012-07-01', item1: 82},
            //   {y: '2012-08-01', item1: 90},
            //   {y: '2012-09-01', item1: 100}




        });

    });

    // myHelp.getDetail('/pm/project/task/report/detail_report/' + $stateParams.id_task)
    // .then(function(respons){
    //     $scope.report = respons.data;
    // });

}]);
appProject.controller('task_detail.rincian',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    myHelp.getDetail('/pm/project/check/' + $stateParams.id_task)
    .then(function(respons){
        $scope.checks = respons.data;
        debugData(respons);
    });

}]);



appProject.controller('task_detail.rincian.add',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    $scope.check={};
     $scope.check.id_task =  $stateParams.id_task;

     $scope.submitForm = function() {
         var Param = clearObj($scope.check)

        myHelp.postParam('/pm/project/check/add', Param)
        .then(function mySuccesresponse()
        {
           $state.go("task_detail.rincian",{}, { reload: true })

        }
        , function myError()
        {
           errorView("error paja tu");
        });

     };

}]);

appProject.controller('task_detail.rincian.edit',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    myHelp.getDetail('/pm/project/check/detail/' + $stateParams.id_check)
    .then(function(respons){
        $scope.check = respons.data;
        debugData(respons);
    });

    $scope.submitForm = function() {
        var Param = clearObj($scope.check)

       myHelp.postParam('/pm/project/check/edit', Param)
       .then(function mySuccesresponse()
       {
          $state.go("task_detail.rincian",{}, { reload: true })

       }
       , function myError()
       {
          errorView("error paja tu");
       });

    };

}]);


//laporan
appProject.controller('task_detail.laporan',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{


}]);
appProject.controller('task_detail.laporan.add',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    $scope.report= {};
    $scope.report.id_task=$stateParams.id_task;
    $scope.report.report_status=0;
    $scope.report.id_perusahaan_pegawai=1;


    $scope.submitForm = function(isValid) {
        var Param = clearObj($scope.report)
        if (isValid)
        {
            myHelp.postParam('/pm/project/task/report/add', {"laporan" : Param })
           .then(function mySuccesresponse()
           {
              $state.go("task_detail.laporan",{}, { reload: true })

           }
           , function myError()
           {
              errorView("error paja tu");
           });
       }

    };

}]);


appProject.controller('task_detail.laporan.detail',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
   myHelp.getDetail('/pm/project/task/report/detail/' + $stateParams.id_report)
   .then(function(respons){
       $scope.report = respons.data.report;
       $scope.media = respons.media;
       debugData(respons);
   });

}]);

//MEDIA
appProject.controller('task_detail.media',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
   myHelp.getDetail('/pm/project/task/media/' + $stateParams.id_report)
   .then(function(respons){
       $scope.media = respons.media;
       debugData(respons);
   });
}]);


//KONTRAKTOR
appProject.controller('task_detail.kontraktor',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    //aal pegawai http://localhost:8081/pm/project/task/detail_id_id/1
    myHelp.getDetail('/pm/project/task/detail_id_id/' + $stateParams.id_task)
    .then(function(respons){
        $scope.task_id = respons.data;

        myHelp.getDetail('/pm/perusahaan/'+ respons.data.ID_KONTRAKTOR +'/pegawai_lite')
        .then(function(respons){
            $scope.pegawais = respons.data;
            debugData(respons);
        });
    });



    //pm/perusahaan/{id_perusahaan}/pegawai_lite
    function load()
    {
        var data = {jenis:"kontraktor"};
        myHelp.getParam('/pm/project/task/team/' + $stateParams.id_task, data)
        .then(function(respons){
            $scope.kontraktors = respons.data;
            debugData(respons);
        });
    }

    load();


    //tambah
    $scope.submitForm = function() {
        var Param = clearObj($scope.kontraktor)
        Param.jenis="kontraktor";
        Param.team_status=1;
        Param.id_task=$stateParams.id_task;

       myHelp.postParam('/pm/project/task/team/add', Param)
       .then(function mySuccesresponse()
       {
          load();

       }
       , function myError()
       {
          errorView("error paja tu");
       });

    };

    //hapus
    $scope.hapus = function(id_task_team){
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm){
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");

                myHelp.getDetail('/pm/project/task/team/hapus/' + id_task_team)
                .then(function(respons){
                     load();
                });

            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    };



}]);



//KONTRAKTOR
appProject.controller('task_detail.supervisi',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    //aal pegawai http://localhost:8081/pm/project/task/detail_id_id/1
    myHelp.getDetail('/pm/project/task/detail_id_id/' + $stateParams.id_task)
    .then(function(respons){
        $scope.task_id = respons.data;

        myHelp.getDetail('/pm/perusahaan/'+ respons.data.ID_SUPERVISI +'/pegawai_lite')
        .then(function(respons){
            $scope.pegawais = respons.data;
            debugData(respons);
        });
    });



    //pm/perusahaan/{id_perusahaan}/pegawai_lite
    function load()
    {
        var data = {jenis:"supervisi"};
        myHelp.getParam('/pm/project/task/team/' + $stateParams.id_task, data)
        .then(function(respons){
            $scope.supervisis = respons.data;
            debugData(respons);
        });
    }

    load();


    //tambah
    $scope.submitForm = function() {
        var Param = clearObj($scope.supervisi)
        Param.jenis="supervisi";
        Param.team_status=1;
        Param.id_task=$stateParams.id_task;

       myHelp.postParam('/pm/project/task/team/add', Param)
       .then(function mySuccesresponse()
       {
          load();

       }
       , function myError()
       {
          errorView("error paja tu");
       });

    };

    //hapus
    $scope.hapus = function(id_task_team){
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm){
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");

                myHelp.getDetail('/pm/project/task/team/hapus/' + id_task_team)
                .then(function(respons){
                     load();
                });

            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    };



}]);
