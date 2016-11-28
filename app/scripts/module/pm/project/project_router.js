var app = angular.module('v3App');
app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
      .state('project_jenis', { // MODULE_TASK
          url: '/pm/project_jenis',
          templateUrl: 'views/pm/project/project_jenis.html',
          controller: 'project_jenis'
      })
      .state('project_paket', { // MODULE_TASK
          url: '/pm/project_paket',
          templateUrl: 'views/pm/project/project_paket.html',
          controller:'project_paket'
      })
      .state('project_paket.detail', {
          url: '/detail/:id_paket',
          templateUrl: 'views/pm/project/project_paket.detail.html',
          controller:'project_paket.detail'
      })
      .state('project_paket.add', { // MODULE_TASK
          url: '/add',
          templateUrl: 'views/pm/project/project_paket.add.html',
          controller:'project_paket.add'
      })
      .state('project_paket.edit', { // MODULE_TASK
          url: '/edit/:id_paket',
          templateUrl: 'views/pm/project/project_paket.edit.html',
          controller:'project_paket.edit'
      })

      .state('project', {
          url: '/pm/project',
          templateUrl: 'views/pm/project/data.html',
          controller :'project'
      })
      .state('project.add', {
          url: '/add',
          templateUrl: 'views/pm/project/data.add.html',
          controller :'project.add'
      })

      .state('project_detail',{
          url: '/pm/project/detail/:id_project',
          templateUrl: 'views/pm/project/detail.html',
          controller: 'project_detail'
      })
      .state('project_detail.edit', {
            url: '/edit',
            templateUrl: 'views/pm/project/data.edit.html',
            controller :'project.edit'
        })

      .state('project_detail.rekap', { // MODULE_TASK
          url: '/rekap',
          templateUrl: 'views/pm/project/rekap.html',
          controller: 'project_detail.rekap'
      })
      .state('project_detail.rekap.add', { // MODULE_TASK
          url: '/add',
          templateUrl: 'views/pm/project/rekap.add.html',
          controller: 'project_detail.rekap.add'
      })
      .state('project_detail.rekap.edit', { // MODULE_TASK
          url: '/edit/:id_modul',
          templateUrl: 'views/pm/project/rekap.edit.html',
          controller: 'project_detail.rekap.edit'
      })

      //LOKASI --------------------------------------------------------

      .state('project_detail.lokasi_add', {
          url: '/lokasi_add',
          templateUrl: 'views/pm/project/lokasi_add.html',
          controller :'project_detail.lokasi_add'
      })

      .state('project_detail.lokasi_edit', {
          url: '/lokasi_edit/:id_lokasi',
          templateUrl: 'views/pm/project/lokasi.edit.html',
          controller :'project_detail.lokasi_edit'
      })

    // TASK------------------------------------------------------------
      .state('project_detail.task', {
              url: '/task',
              templateUrl: 'views/pm/project/task.html',
              controller :'project_detail.task'
          })

      .state('project_detail.task.add', {
          url: '/add',
          templateUrl: 'views/pm/project/task.add.html',
          controller :'project_detail.task.add'
      })
      .state('project_detail.task.edit', {
          url: '/edit/:id_task',
          templateUrl: 'views/pm/project/task.edit.html',
          controller :'project_detail.task.edit'
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

      .state('project_detail.cair', {
          url: '/cair',
          templateUrl: 'views/pm/project/cair.html',
          controller :'project_detail.cair'
      })

      .state('project_detail.cair.add', {
          url: '/add',
          templateUrl: 'views/pm/project/cair.add.html',
          controller :'project_detail.cair.add'
      })

      .state('project_detail.cair.edit', {
          url: '/edit/:id_cair',
          templateUrl: 'views/pm/project/cair.edit.html',
          controller :'project_detail.cair.edit'
      })

      .state('project_detail.cair.acc', {
          url: '/acc/:id_cair',
          templateUrl: 'views/pm/project/cair.acc.html',
          controller :'project_detail.cair.acc'
      })


      //TASK Detail     =====================================================================================
      .state('task_detail', {
          url: '/pm/project/task/:id_task',
          templateUrl: 'views/pm/project/task.detail.html',
          controller :'task_detail'
      })
      .state('task_detail.rincian', {
          url: '/rincian',
          templateUrl: 'views/pm/project/task.detail.rincian.html',
          controller :'task_detail.rincian'
      })
      .state('task_detail.rincian.add', {
          url: '/add',
          templateUrl: 'views/pm/project/task.detail.rincian.add.html',
          controller :'task_detail.rincian.add'
      })
      .state('task_detail.rincian.edit', {
          url: '/edit/:id_check',
          templateUrl: 'views/pm/project/task.detail.rincian.edit.html',
          controller :'task_detail.rincian.edit'
      })


      .state('task_detail.kontraktor', {
          url: '/kontraktor',
          templateUrl: 'views/pm/project/task.detail.kontraktor.html',
          controller :'task_detail.kontraktor'
      })
      .state('task_detail.supervisi', {
          url: '/supervisi',
          templateUrl: 'views/pm/project/task.detail.supervisi.html'
          //controller :'taskContAdd'
      })
      .state('task_detail.laporan', {
          url: '/laporan',
          templateUrl: 'views/pm/project/task.detail.laporan.html',
          controller :'task_detail.laporan'
      })

      .state('task_detail.laporan.detail', {
          url: '/detail/:id_report',
          templateUrl: 'views/pm/project/task.detail.laporan.detail.html',
          controller :'task_detail.laporan.detail'
      })


      //END TASK Detail laporan=====================================================================================

      .state('task_detail.media', {
          url: '/media',
          templateUrl: 'views/pm/project/task.detail.media.html',
          controller :'task_detail.media'
      })


  }]);
  app.run( ['$rootScope', '$state', '$stateParams',
  	function ($rootScope,   $state,   $stateParams) {
  		$rootScope.$state = $state;
  		$rootScope.$stateParams = $stateParams;
  	}
  ]);
