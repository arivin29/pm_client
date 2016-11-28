'use strict';
var DEBUG=true;
var BASE_URL = 'http://localhost:8081/pm';

  angular.module('v3App', [
              'ngResource',
              'angular-loading-bar',
              'ngAnimate',
              'ngTouch',
              'ui.router',
              'ui.utils.masks'
          ])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
          .state('login', { // MODULE_TASK
              url: '/',
              templateUrl: 'views/user/login/index.html',
              controller: 'login'
          })
          .state('logut', { // MODULE_TASK
              url: '/pm/project_paket',
              templateUrl: 'views/pm/project/project_paket.html',
              controller:'project_paket'
          })


      }])
