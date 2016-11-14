var app = angular.module('v3App');
app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
      .state('perusahaan', {
          url: '/pm/perusahaan',
          templateUrl: 'views/pm/perusahaan/data.html',
          controller :'perusahaanCont'
      })
      .state('perusahaan_detail', {
          url: '/pm/perusahaan/detail/{id}',
          templateUrl: 'views/pm/perusahaan/detail.html'
        //   controller :'perusahaanCont'
      })
      .state('perusahaan.add', {
          url: '/add',
          templateUrl: 'views/pm/perusahaan/add.html',
          controller :'perusahaanCont'
      })



  }])
  .run( ['$rootScope', '$state', '$stateParams',
  	function ($rootScope,   $state,   $stateParams) {
  		$rootScope.$state = $state;
  		$rootScope.$stateParams = $stateParams;
  	}
  ]);
