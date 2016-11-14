var BASE_URL = 'http://localhost:8081/pm';

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
      .state('project.add', {
              url: '/add',
              templateUrl: 'views/pm/project/data.add.html',
              controller :'taskContAdd'
          })

      .state('project_detail',{
          url: '/pm/project/detail/:id',
          templateUrl: 'views/pm/project/detail.html'
        //   controller: 'projectCont',
        //   resolve: {
        //     Projects: ['$stateParams', 'ProjectsService',
        //             function($stateParams,ProjectsService) {
        //                 return ProjectsService.getProject($stateParams.id);
        //             }],
        //     Project: function() { return {}; }
        //     }
      })

      .state('project_detail.rekap', { // MODULE_TASK
          url: '/rekap',
          templateUrl: 'views/pm/project/rekap.html'
      })

    // TASK------------------------------------------------------------
      .state('project_detail.task', {
              url: '/task',
              templateUrl: 'views/pm/project/task.html'
            //   controller :'taskCont',
            //   resolve: {
            //       Tasks: ['$stateParams', 'TasksService',
            //               function($stateParams,TasksService) {
            //                   return TasksService.getTasks($stateParams.id);
            //               }],
            //       Task: function() { return {}; }
            //       }
          })

      .state('project_detail.task.add', {
          url: '/add',
          templateUrl: 'views/pm/project/task.add.html'
          //controller :'taskContAdd'
      })

      //TIMELINE
      .state('project_detail.timeline', {
          url: '/timeline',
          templateUrl: 'views/pm/project/timeline.html'
          //controller :'taskContAdd'
      })
      //KURVA
      .state('project_detail.kurva', {
          url: '/kurva',
          templateUrl: 'views/pm/project/kurva.html'
          //controller :'taskContAdd'
      })
      .state('project_detail.document', {
          url: '/document',
          templateUrl: 'views/pm/project/document.html'
          //controller :'taskContAdd'
      })



  }])
  .run( ['$rootScope', '$state', '$stateParams',
  	function ($rootScope,   $state,   $stateParams) {
  		$rootScope.$state = $state;
  		$rootScope.$stateParams = $stateParams;
  	}
  ]);
