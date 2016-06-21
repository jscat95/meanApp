'use strict';

(function() {

  function monIntercepteur($rootScope, $q) {
    return {
      // Add authorization token to headers
      request: function(config) {
        console.log('requete interceptee');
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        console.log('reponse interceptee');
        return $q.reject(response);
      }
    };
  }

  angular.module('meanApp2App.monintercepteur')
    .factory('monIntercepteur', monIntercepteur);
})();
