var app = angular.module('v3App');
app.controller('user',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/acl/user',data)
    .then(function(respons){
        $scope.users = respons;
        debugData(respons);
    });

}]);
app.controller('user.edit',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    myHelp.getDetail('/acl/user/detail_lite/' + $stateParams.id_user)
    .then(function(respons){
        $scope.user = respons.data;
        debugData(respons);
    });

    $scope.submitForm = function() {
        var Param = clearObj($scope.user);
        var pss = $scope.user.password;
            if(pss.length < 3 )
            {
                delete Param.password;
            }
           myHelp.postParam('/acl/user/edit', Param)
           .then(function mySuccesresponse()
           {
              $state.go("user",{}, { reload: true })

           }
           , function myError()
           {
              errorView("error paja tu");
           });


    };

}]);


//GROUP
app.controller('group',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/acl/group',data)
    .then(function(respons){
        $scope.groups = respons.data;
        debugData(respons);
    });

}]);

app.controller('group.add',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    $scope.submitForm = function() {
        var Param = clearObj($scope.group);

       myHelp.postParam('/acl/group/add', Param)
       .then(function mySuccesresponse()
       {
          $state.go("group",{}, { reload: true })

       }
       , function myError()
       {
          errorView("error paja tu");
       });
    };

}]);

app.controller('group.edit',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/acl/group/detail/' + $stateParams.id_group,data)
    .then(function(respons){
        $scope.group = respons.data;
        debugData(respons);
    });

    $scope.submitForm = function() {
        var Param = clearObj($scope.group);

       myHelp.postParam('/acl/group/edit', Param)
       .then(function mySuccesresponse()
       {
          $state.go("group",{}, { reload: true })

       }
       , function myError()
       {
          errorView("error paja tu");
       });
    };

}]);

//AKSES

app.controller('level_akses',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/acl/level_akses',data)
    .then(function(respons){
        $scope.level_aksess = respons.data;
        debugData(respons);
    });

}]);

app.controller('level_akses.add',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/acl/modul',data)
    .then(function(respons){
        $scope.moduls = respons.data;
        debugData(respons);
    });

    $scope.submitForm = function() {
        var Param = clearObj($scope.level_akses);

       myHelp.postParam('/acl/level_akses/add', Param)
       .then(function mySuccesresponse()
       {
          $state.go("level_akses",{}, { reload: true })

       }
       , function myError()
       {
          errorView("error paja tu");
       });
    };

}]);

app.controller('level_akses.edit',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/acl/level_akses/detail/' + $stateParams.id_akses,data)
    .then(function(respons){
        $scope.level_akses = respons.data;
        debugData(respons);
        //Modul
        var data = {};
        myHelp.getParam('/acl/modul',data)
        .then(function(respons){
            $scope.moduls = respons.data;
            debugData(respons);
        });

    });

    $scope.submitForm = function() {
        var Param = clearObj($scope.level_akses);

       myHelp.postParam('/acl/level_akses/edit', Param)
       .then(function mySuccesresponse()
       {
          $state.go("level_akses",{}, { reload: true })
       }
       , function myError()
       {
          errorView("error paja tu");
       });
    };

}]);


//MODUL
app.controller('modul',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/acl/modul',data)
    .then(function(respons){
        $scope.moduls = respons.data;
        debugData(respons);
    });

}]);

app.controller('modul.add',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    $scope.submitForm = function() {
        var Param = clearObj($scope.modul);

       myHelp.postParam('/acl/modul/add', Param)
       .then(function mySuccesresponse()
       {
          $state.go("modul",{}, { reload: true })

       }
       , function myError()
       {
          errorView("error paja tu");
       });
    };

}]);

app.controller('modul.edit',['$scope','$state','$stateParams','myHelp',function($scope,$state,$stateParams,myHelp)
{
    var data = {};
    myHelp.getParam('/acl/modul/detail/' + $stateParams.id_modul,data)
    .then(function(respons){
        $scope.modul = respons.data;
        debugData(respons);
    });

    $scope.submitForm = function() {
        var Param = clearObj($scope.modul);

       myHelp.postParam('/acl/modul/edit', Param)
       .then(function mySuccesresponse()
       {
          $state.go("modul",{}, { reload: true })

       }
       , function myError()
       {
          errorView("error paja tu");
       });
    };

}]);
