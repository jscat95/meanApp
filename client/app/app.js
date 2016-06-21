'use strict';

angular.module('meanApp2App', ['meanApp2App.auth', 'meanApp2App.admin', 'meanApp2App.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match', 'meanApp2App.monintercepteur'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
