'use strict';
var DEBUG=true;
var BASE_URL = 'http://localhost:8081/pm';
var MASTER = 'http://localhost:8081/master';


var months_json = '["January","February","March","April","May","June","July","August","September","October","November","December"]';

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
