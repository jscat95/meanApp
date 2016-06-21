'use strict';

angular.module('meanApp2App.auth', ['meanApp2App.constants', 'meanApp2App.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
  	console.log('je mets mon authInterceptor');
    $httpProvider.interceptors.push('authInterceptor');
  });
