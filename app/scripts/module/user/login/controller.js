var app = angular.module("v3App");
app.controller('login',['$window','$scope','$state','$stateParams','myHelp',function($window,$scope,$state,$stateParams,myHelp)
{
    console.log("SAdsa");
     $scope.submitForm = function() {
         console.log($scope.user);

         $window.location.href = '/pm.html';
        //  myHelp.postParam('/project/paket/add', $scope.paket)
        //  .then(function mySuccesresponse()
        //  {
        //     $state.go("project_paket",{}, { reload: true })
         //
        //  }
        //  , function myError()
        //  {
        //     errorView("error paja tu");
        //  });
     };

}]);
