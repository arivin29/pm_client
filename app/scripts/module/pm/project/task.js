// var app = angular.module('v3App');
//     // app.controller('task',  ['$scope','$http', function($scope,$http){
//     //     $scope.button = 'Save';
//     //
//     //   $http.get('http://arivin.xyz/data_pdam/public/api/pelanggan/task').
//     //   then(function(response) {
//     //     $scope.datas = response.data.data;
//     //   });
//
//       app.controller('taskCont', ['$scope','$state','$stateParams', 'TasksService', 'Tasks', 'Task' ,function($scope,$state,$stateParams, TasksService, Tasks, Task) {
//
//         this.Task = Task.data;
//
//         this.TaskQuery = $state.params.query;
//
//         this.Tasks = Tasks.data.data;
//         $scope.Tasks =Tasks.data;
//         console.log(Tasks.data);
//
//
//         this.saveTask = function() {
//             TasksService.saveTask(this.Task)
//                 .then(function() {
//                     $state.go('Tasks');
//                 });
//         };
//
//         this.searchTasks = function(query) {
//             if (!query.length) return $state.go('Tasks');
//
//             $state.go('search', {query: query});
//         };
//     }]);
//
//     app.controller('taskContAdd',['$scope','$state','$stateParams','PmMaster',function($scope,$state,$stateParams, PmMaster){
//         $scope.wlebar = "wd40";
//         $scope.pegawaiKontraktor = [];
//         $scope.pegawaiSupervisi = [];
//         PmMaster.getPegawaiPerusahaan($stateParams.id, 'kontraktor')
//         .then(function (data) {
//             $scope.pegawaiKontraktor=data;
//             console.log(data);
//         })
//         PmMaster.getPegawaiPerusahaan($stateParams.id, 'supervisi')
//         .then(function (data) {
//             $scope.pegawaiSupervisi=data;
//             console.log(data);
//         })
//
//     } ]);
//
// // app.module('v3App')
//     app.service('TasksService', ['$http', function($http) {
//         this.saveTask = function(Task) {
//             return $http.post(BASE_URL + '/tasks', Task);
//         };
//
//         this.searchTasks = function(query) {
//             return $http.get('/tasks/search/' + query);
//         };
//
//         this.getTasks = function() {
//             return $http.get(BASE_URL + '/tasks');
//         };
//
//         this.getTask = function(id) {
//             return $http.get(BASE_URL + '/tasks/' + id);
//         };
//
//
//     }]);
