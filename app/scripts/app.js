'use strict';

/**
 * @ngdoc overview
 * @name v3App
 * @description
 * # v3App
 *
 * Main module of the application.
 */
angular.module('v3App', [
            'ngResource', 
            'v3App.pm',
            'angular-loading-bar',
            'ngAnimate',
            'ngTouch',
            'ui.router'
        ])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html'
        })
        .state('perusahaan', {
            url: '/perusahaan',
            templateUrl: 'views/pm/kontraktor/indek.html'
        })
        .state('kontraktor', {
            url: '/kontraktor',
            templateUrl: 'views/pm/kontraktor/indek.html'
        })
        .state('detail', {
            url: '/kontraktor/detail',
            templateUrl: 'views/pm/kontraktor/detail.html'
        });

    }])
//     ;
//
//     angular.module('v3App').run(['$rootScope', '$state',
//     function ($rootScope, $state) {
//         $rootScope.$state = $state;
//     }
// ]);

.run( ['$rootScope', '$state', '$stateParams',
	function ($rootScope,   $state,   $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
        console.log('ASdsa');
	}
])
