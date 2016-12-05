var app = angular.module('v3App');
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/user");
  $stateProvider
      .state('user', {
          url: '/user',
          templateUrl: 'views/user/data.html',
          controller :'user'
      })
      .state('user.add', {
          url: '/add',
          templateUrl: 'views/user/data.add.html',
          controller :'user.add'
      })
      .state('user.edit', {
          url: '/edit/:id_user',
          templateUrl: 'views/user/data.edit.html',
          controller :'user.edit'
      })

      //group
      .state('group', {
          url: '/group',
          templateUrl: 'views/user/group.html',
          controller :'group'
      })
      .state('group.add', {
          url: '/add',
          templateUrl: 'views/user/group.add.html',
          controller :'group.add'
      })
      .state('group.edit', {
          url: '/edit/:id_group',
          templateUrl: 'views/user/group.edit.html',
          controller :'group.edit'
      })

      //Level akses
      .state('level_akses', {
          url: '/level_akses',
          templateUrl: 'views/user/level_akses.html',
          controller :'level_akses'
      })
      .state('level_akses.add', {
          url: '/add',
          templateUrl: 'views/user/level_akses.add.html',
          controller :'level_akses.add'
      })
      .state('level_akses.edit', {
          url: '/edit/:id_akses',
          templateUrl: 'views/user/level_akses.edit.html',
          controller :'level_akses.edit'
      })

      //Modul
      .state('modul', {
          url: '/modul',
          templateUrl: 'views/user/modul.html',
          controller :'modul'
      })
      .state('modul.add', {
          url: '/add',
          templateUrl: 'views/user/modul.add.html',
          controller :'modul.add'
      })
      .state('modul.edit', {
          url: '/edit/:id_modul',
          templateUrl: 'views/user/modul.edit.html',
          controller :'modul.edit'
      })

  }]);
