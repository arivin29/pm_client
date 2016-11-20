var app = angular.module('v3App');
app.controller('perusahaan',['$scope','$state','$stateParams','service_perusahaan','myHelp',function($scope,$state,$stateParams,service_master,myHelp)
{
    var data = {nama:1};
    myHelp.getParam('/project',data)
    .then(function(data){
        $scope.datas = data;
        debugData(data);
    });

}]);
