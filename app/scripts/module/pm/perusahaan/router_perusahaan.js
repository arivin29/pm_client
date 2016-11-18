var app = angular.module('v3App');
app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
      .state('perusahaan', {
          url: '/pm/perusahaan',
          templateUrl: 'views/pm/perusahaan/data.html',
          controller :'perusahaan'
      })
      .state('perusahaan_kategori',{
          url: '/pm/perusahaan_kategori',
          templateUrl: 'views/pm/perusahaan/kategori.html',
          controller : 'perusahaan_kategori'
      })
      .state('perusahaan_jabatan',{
          url: '/pm/perusahaan_jabatan',
          templateUrl: 'views/pm/perusahaan/jabatan.html'
      })


      .state('perusahaan.add', {
          url: '/add',
          templateUrl: 'views/pm/perusahaan/add.html',
          controller :'perusahaanCont'
      })

      .state('perusahaan_detail', {
          url: '/pm/perusahaan/detail/{id}',
          templateUrl: 'views/pm/perusahaan/detail.html'
        //   controller :'perusahaanCont'
      })

      //Pegawai
      .state('perusahaan_detail.pegawai', {
          url: '/pegawai',
          templateUrl: 'views/pm/perusahaan/pegawai.html'
        //   controller :'perusahaanCont'
      })
      .state('perusahaan_detail.pegawai.add', {
          url: '/add',
          templateUrl: 'views/pm/perusahaan/pegawai.add.html'
        //   controller :'perusahaanCont'
      })

      //projek
      .state('perusahaan_detail.project', {
          url: '/project',
          templateUrl: 'views/pm/perusahaan/project.html'
        //   controller :'perusahaanCont'
      })

      //projek
      .state('perusahaan_detail.document', {
          url: '/document',
          templateUrl: 'views/pm/project/document.html'
        //   controller :'perusahaanCont'
      })



  }])
  .run( ['$rootScope', '$state', '$stateParams',
  	function ($rootScope,   $state,   $stateParams) {
  		$rootScope.$state = $state;
  		$rootScope.$stateParams = $stateParams;
  	}



  ]);
