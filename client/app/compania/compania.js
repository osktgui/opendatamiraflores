'use strict';

angular.module('opendatamirafloresApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('compania', {
        url: '/compania',
        templateUrl: 'app/compania/compania.html',
        controller: 'CompaniaCtrl'
      });
  });
