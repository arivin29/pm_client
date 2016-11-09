var DATA;

var app = angular.module('v3App');
 app.controller('perusahaanCont', ['$scope','$state','$stateParams', 'MasterService' ,
     function($scope,$state,$stateParams, MasterService) {
         MasterService.getPerusahaans()
         .then(function(data){
             $scope.perusahaans = data;
             console.log(data);
             DATA=data;
         });
    }])
