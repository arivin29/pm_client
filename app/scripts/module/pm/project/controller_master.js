var app = angular.module('v3App');
app.controller('project_jenis',['$scope','$state','$stateParams','service_master',function($scope,$state,$stateParams,service_master)
{
    service_master.getJenisProject()
    .then(function(data){
        $scope.datas = data;

        if(DEBUG==true)
        {
            console.log(data);
            DATA=data;
        }

    });
}]);
