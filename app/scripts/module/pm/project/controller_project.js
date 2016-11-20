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
    service_perusahaan.getProvinsi()
    .then(function(respons){
        $scope.provinsi = respons.data;
    });

    //jenis project
    myHelp.getDetail('/master/jenis_project')
    .then(function(respons){
        $scope.jenis_project = respons.data;
    });

    //paket project
    
    //Perusahaan


     $scope.submitForm = function() {
         console.log($scope.perusahaan);
         myHelp.postParam('/perusahaan/add', $scope.perusahaan)
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

appProject.controller('project_detail',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var id_project = $stateParams.id_project;
    myHelp.getDetail('/project/' + id_project)
    .then(function(respons){
        $scope.project = respons.data;
        debugData(respons);
    });

}]);
