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

        $scope.lamaKerja = count_hari(respons.data.task.task_start, respons.data.task.task_end );
        $scope.sisaHari = count_hari(new Date(), respons.data.task.task_end );
        debugData(respons);
    });

}]);
