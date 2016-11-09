var BASE_URL = 'http://arivin.xyz/data_pdam/public/api/pelanggan';

angular.module('v3App',['ui.router']).config(['$stateProvider', function($stateProvider) {
  $stateProvider
      .state('project', {
          url: '/pm/project',
          templateUrl: 'views/pm/project/data.html',
          controller :'projectCont',
          resolve: {
            Projects: ['ProjectsService',
                    function(ProjectsService) {
                        return ProjectsService.getProjects();
                    }],
            Project: function() { return {}; }
            }
      })
      .state('project_detail',{
          url: '/pm/project/detail/:id',
          templateUrl: 'views/pm/project/detail.html',
          controller: 'projectCont',
          resolve: {
            Projects: ['$stateParams', 'ProjectsService',
                    function($stateParams,ProjectsService) {
                        return ProjectsService.getProject($stateParams.id);
                    }],
            Project: function() { return {}; }
            }
      })


    // TASK------------------------------------------------------------
      .state('project_detail.task', {
              url: '/task',
              templateUrl: 'views/pm/project/detail.task.html',
              controller :'taskCont',
              resolve: {
                  Tasks: ['$stateParams', 'TasksService',
                          function($stateParams,TasksService) {
                              return TasksService.getTasks($stateParams.id);
                          }],
                  Task: function() { return {}; }
                  }
          })

      .state('project_detail.task.add', {
              url: '/add',
              templateUrl: 'views/pm/project/detail.task.add.html',
              controller :'taskContAdd'
          })


  }])
  .run( ['$rootScope', '$state', '$stateParams',
  	function ($rootScope,   $state,   $stateParams) {
  		$rootScope.$state = $state;
  		$rootScope.$stateParams = $stateParams;
  	}
  ]);
