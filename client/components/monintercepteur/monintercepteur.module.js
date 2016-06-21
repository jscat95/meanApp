'use strict';

angular.module('meanApp2App.monintercepteur', ['ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
  	console.log('je mets mon intercepteur');
    $httpProvider.interceptors.push('monIntercepteur');
  });
