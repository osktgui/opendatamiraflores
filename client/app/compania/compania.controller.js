'use strict';

angular.module('opendatamirafloresApp')
  .controller('CompaniaCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';
    $scope.campanias = [];
    $scope.campania = {};


    $http.get('/api/campanias').success(function(campanias) {
      $scope.campanias = campanias;
      socket.syncUpdates('campania', $scope.campanias);
    });


    $scope.addCampania = function() {
      $http.post('/api/campanias',
      {
        titulo: $scope.campania.titulo,
        imagen: $scope.campania.imagen,
        descripcion: $scope.campania.descripcion,
        fechainicio: $scope.campania.fechainicio,
        fechafinal: $scope.campania.fechafinal,
        meta: $scope.campania.meta
      });

      $scope.campania = {};
    };



    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('campania');
    });


  });
