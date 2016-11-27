appProject.controller('project_detail.task',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/project/task/' + $stateParams.id_project,data)
    .then(function(respons){
        $scope.tasks = respons.data;
        debugData(respons);
    });

}]);


appProject.controller('project_detail.task.add',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    $scope.task={};
    var data = {};
    myHelp.getDetail('/project/modul/list_lite/' + $stateParams.id_project)
    .then(function(respons){
        $scope.moduls = respons.data;
        debugData(respons);
    });

    $scope.ambilModul = function()
    {
        myHelp.getDetail('/project/task/detail_pre_add/' + $scope.task.id_modul)
        .then(function(respons){
            $scope.modul = respons.data;
            debugData(respons);
        });
    }


    $scope.submitForm = function(isValid) {
        var Param = clearObj($scope.task)
        if (isValid)
        {
           myHelp.postParam('/project/task/add', Param)
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
    myHelp.getDetail('/project/modul/list_lite/' + $stateParams.id_project)
    .then(function(respons){
        $scope.moduls = respons.data;
        debugData(respons);
    });

    //load TASK
    myHelp.getDetail('/project/task/detail_lite/' + $stateParams.id_task)
    .then(function(respons){
        $scope.task = respons.data;

        myHelp.getDetail('/project/task/detail_pre_add/' + $scope.task.id_modul)
        .then(function(respons){
            $scope.modul = respons.data;
            debugData(respons);
        });

        $scope.ambilModul = function()
        {
            myHelp.getDetail('/project/task/detail_pre_add/' + $scope.task.id_modul)
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
           myHelp.postParam('/project/task/edit', Param)
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
    myHelp.getDetail('/project/task/detail/' + $stateParams.id_task)
    .then(function(respons){
        $scope.task = respons.data.task;
        $scope.report_rekap = respons.data.report_rekap;
        $scope.check_rangkum = respons.data.check_rangkum;
        $scope.perusahaan = respons.data.perusahaan;

        $scope.lamaKerja = count_hari(respons.data.task.task_start, respons.data.task.task_end );
        $scope.sisaHari = count_hari(new Date(), respons.data.task.task_end );
        debugData(respons);
    });

    // myHelp.getDetail('/project/task/report/detail_report/' + $stateParams.id_task)
    // .then(function(respons){
    //     $scope.report = respons.data;
    // });

}]);
appProject.controller('task_detail.rincian',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    myHelp.getDetail('/project/check/' + $stateParams.id_task)
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

        myHelp.postParam('/project/check/add', Param)
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
    myHelp.getDetail('/project/check/detail/' + $stateParams.id_check)
    .then(function(respons){
        $scope.check = respons.data;
        debugData(respons);
    });

    $scope.submitForm = function() {
        var Param = clearObj($scope.check)

       myHelp.postParam('/project/check/edit', Param)
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
   myHelp.getDetail('/project/task/report/' + $stateParams.id_task)
   .then(function(respons){
       $scope.reports = respons.data;
       debugData(respons);
   });

}]);


appProject.controller('task_detail.laporan.detail',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
   myHelp.getDetail('/project/task/report/detail/' + $stateParams.id_report)
   .then(function(respons){
       $scope.report = respons.data.report;
       $scope.media = respons.media;
       debugData(respons);
   });

}]);

//MEDIA
appProject.controller('task_detail.media',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
   myHelp.getDetail('/project/task/media/' + $stateParams.id_report)
   .then(function(respons){
       $scope.media = respons.media;
       debugData(respons);
   });
}]);


//KONTRAKTOR
appProject.controller('task_detail.kontraktor',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    //aal pegawai http://localhost:8081/pm/project/task/detail_id_id/1
    myHelp.getDetail('/project/task/detail_id_id/' + $stateParams.id_task)
    .then(function(respons){
        $scope.task_id = respons.data;

        myHelp.getDetail('/perusahaan/'+ respons.data.ID_KONTRAKTOR +'/pegawai_lite')
        .then(function(respons){
            $scope.pegawais = respons.data;
            debugData(respons);
        });
    });



    //pm/perusahaan/{id_perusahaan}/pegawai_lite
    function load()
    {
        var data = {jenis:"kontraktor"};
        myHelp.getParam('/project/task/team/' + $stateParams.id_task, data)
        .then(function(respons){
            $scope.kontraktors = respons.data;

        });
    }
    load();


    //tambah
    $scope.submitForm = function() {
        var Param = clearObj($scope.kontraktor)
        Param.jenis="kontraktor";
        Param.team_status=1;
        Param.id_task=$stateParams.id_task;

       myHelp.postParam('/project/task/team/add', Param)
       .then(function mySuccesresponse()
       {
          load();

       }
       , function myError()
       {
          errorView("error paja tu");
       });

    };





}]);
