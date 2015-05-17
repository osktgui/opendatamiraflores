'use strict';

angular.module('opendatamirafloresApp')
  .controller('MainCtrl', function ($scope, $http, socket, uiGmapGoogleMapApi) {

    uiGmapGoogleMapApi.then(function(maps) {
      maps.visualRefresh = true;
    });

    $scope.map = { center: { latitude: -12.113540, longitude: -77.035875 }, zoom: 12 };


    $scope.marcas = [];

    $http.get('/api/ciudadanos').success(function(ciudadanos) {
    var marcas = [];
      for(var i = 0; i < ciudadanos.length; i++){
        
        var marca = {
          latitude: ciudadanos[i].latitud,
          longitude: ciudadanos[i].longitud,
          title: 'm' + i,
          id: "mm" + i
        };
        $scope.marcas.push(marca);      
      }


 

      socket.syncUpdates('ciudadano', $scope.marcas);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });



  });
