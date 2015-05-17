'use strict';

angular.module('opendatamirafloresApp')
  .controller('MainCtrl', function ($scope, $http, socket, uiGmapGoogleMapApi) {

    uiGmapGoogleMapApi.then(function(maps) {
      maps.visualRefresh = true;
    });

    $scope.map = { center: { latitude: -12.113540, longitude: -77.035875 }, zoom: 14 };



    $scope.polygons = [
            {
                id: 1,
                path: [
                    {
                        latitude: -12.103558,
                        longitude: -77.031540
                    },
                    {
                        latitude: -12.113754,
                        longitude: -77.029910
                    },
                    {
                        latitude: -12.113419,
                        longitude: -77.026305
                    },
                    {
                        latitude: -12.108509,
                        longitude: -77.026734
                    },
                    {
                        latitude: -12.105719,
                        longitude: -77.027485
                    },
                    {
                        latitude: -12.102865,
                        longitude: -77.027442
                    }
                ],
                stroke: {
                    color: '#E0E3AB',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#E0E3AB',
                    opacity: 0.8
                }
            },

            {
                id: 2,
                path: [
                    {
                        latitude: -12.103516,
                        longitude: -77.031626
                    },
                    {
                        latitude: -12.113681,
                        longitude: -77.030156
                    },
                    {
                        latitude: -12.114205,
                        longitude: -77.039834
                    },
                    {
                        latitude: -12.110639,
                        longitude: -77.037152
                    },
                    {
                        latitude: -12.110681,
                        longitude: -77.036722
                    },
                    {
                        latitude: -12.109988,
                        longitude: -77.036658
                    },
                    {
                        latitude: -12.103673,
                        longitude: -77.031680
                    }
                ],
                stroke: {
                    color: '#AEBDD7',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#AEBDD7',
                    opacity: 0.8
                }
            },

            {
                id: 3,
                path: [
                    {
                        latitude: -12.113611,
                        longitude: -77.026395
                    },
                    {
                        latitude: -12.116601,
                        longitude: -77.026299
                    },
                    {
                        latitude: -12.119024,
                        longitude: -77.026149
                    },
                    {
                        latitude: -12.119015,
                        longitude: -77.036982
                    },
                    {
                        latitude: -12.114022,
                        longitude: -77.037025
                    },
                    {
                        latitude: -12.113540,
                        longitude: -77.026317
                    }
                ],
                stroke: {
                    color: '#EDCEA3',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#EDCEA3',
                    opacity: 0.8
                }
            },

            {
                id: 4,
                path: [
                    {
                        latitude: -12.119227,
                        longitude: -77.026191
                    },
                    {
                        latitude: -12.125155,
                        longitude: -77.024490
                    },
                    {
                        latitude: -12.124222,
                        longitude: -77.031051
                    },
                    {
                        latitude: -12.123781,
                        longitude: -77.032403
                    },
                    {
                        latitude: -12.124316,
                        longitude: -77.033137
                    },
                    {
                        latitude: -12.123865,
                        longitude: -77.033685
                    },
                    {
                        latitude: -12.119130,
                        longitude: -77.033721
                    },
                    {
                        latitude: -12.119073,
                        longitude: -77.026185
                    }
                ],
                stroke: {
                    color: '#D5AAB0',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#D5AAB0',
                    opacity: 0.8
                }
            },

            {
                id: 5,
                path: [
                    {
                        latitude: -12.119157,
                        longitude: -77.025570
                    },
                    {
                        latitude: -12.129645,
                        longitude: -77.022500
                    },
                    {
                        latitude: -12.130421,
                        longitude: -77.020730
                    },
                    {
                        latitude: -12.129215,
                        longitude: -77.021094
                    },
                    {
                        latitude: -12.129148,
                        longitude: -77.018119
                    },
                    {
                        latitude: -12.119350,
                        longitude: -77.018282
                    },
                    {
                        latitude: -12.119150,
                        longitude: -77.025578
                    }
                ],
                stroke: {
                    color: '#EDCEA3',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#EDCEA3',
                    opacity: 0.8
                }
            },

            {
                id: 6,
                path: [
                    {
                        latitude: -12.129744,
                        longitude: -77.022436
                    },
                    {
                        latitude: -12.129158,
                        longitude: -77.018080
                    },
                    {
                        latitude: -12.126253,
                        longitude: -77.018112
                    },
                    {
                        latitude: -12.129103,
                        longitude: -77.001520
                    },
                    {
                        latitude: -12.132929,
                        longitude: -77.021022
                    }
                ],
                stroke: {
                    color: '#D5AAB0',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#D5AAB0',
                    opacity: 0.8
                }
            },

            {
                id: 7,
                path: [
                    {
                        latitude: -12.128489,
                        longitude: -77.001511
                    },
                    {
                        latitude: -12.114558,
                        longitude: -77.010952
                    },
                    {
                        latitude: -12.118671,
                        longitude: -77.018162
                    },
                    {
                        latitude: -12.126181,
                        longitude: -77.018162
                    },
                    {
                        latitude: -12.128782,
                        longitude: -77.001811
                    }
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#6060FB',
                    opacity: 0.8
                }
            },

            {
                id: 8,
                path: [
                    {
                        latitude: -12.10780915,
                        longitude: -77.05386758
                    },
                    {
                        latitude: -12.10631954,
                        longitude: -77.052387
                    },
                    {
                        latitude: -12.10835464,
                        longitude: -77.04929709
                    },
                    {
                        latitude: -12.11420807,
                        longitude: -77.04365373
                    },
                    {
                        latitude: -12.11706132,
                        longitude: -77.04661489
                    },
                    {
                        latitude: -12.11460669,
                        longitude: -77.04901814
                    },
                    {
                        latitude: -12.1135577,
                        longitude: -77.04908252
                    },
                    {
                        latitude: -12.11171146,
                        longitude: -77.0514214
                    },
                    {
                        latitude: -12.1103058,
                        longitude: -77.05139995
                    }
                ],
                stroke: {
                    color: '#E0D6D0',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#E0D6D0',
                    opacity: 0.8
                }
            },

            {
                id: 9,
                path: [
                    {latitude:-12.11087226,
longitude:-77.04672217
},
{latitude:-12.11049462,
longitude:-77.04614282
},
{latitude:-12.11112402,
longitude:-77.04326749
},
{latitude:-12.10837562,
longitude:-77.04047799
},
{latitude:-12.10980227,
longitude:-77.03912616
},
{latitude:-12.10906796,
longitude:-77.03811765
},
{latitude:-12.11003305,
longitude:-77.03719497
},
{latitude:-12.11076736,
longitude:-77.03723788
},
{latitude:-12.11626409,
longitude:-77.04142213
},
{latitude:-12.11915927,
longitude:-77.04277396
},
{latitude:-12.11899143,
longitude:-77.04388976
},
{latitude:-12.11844597,
longitude:-77.04416871
},
{latitude:-12.11846695,
longitude:-77.04537034
},
{latitude:-12.11710328,
longitude:-77.04582095
},
{latitude:-12.11706132,
longitude:-77.0466578}
,
{latitude:-12.11420807,
longitude:-77.04363227
}
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#6060FB',
                    opacity: 0.8
                }
            },

            {
                id: 10,
                path: [
                    {latitude:-12.11412415,
longitude:-77.03689456},
{latitude:-12.11420807,
longitude:-77.03992009},
{latitude:-12.11901241,
longitude:-77.04279542},
{latitude:-12.12064881,
longitude:-77.04468369},
{latitude:-12.12341806,
longitude:-77.03908324},
{latitude:-12.11901241,
longitude:-77.0400703},
{latitude:-12.11911731,
longitude:-77.03702331}
                ],
                stroke: {
                    color: '#E0D6D0',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#E0D6D0',
                    opacity: 0.8
                }
            },

            {
                id: 11,
                path: [
                    {latitude:-12.11907535,
longitude:-77.04004884},
{latitude:-12.12176071,
longitude:-77.04015613},
{latitude:-12.12346002,
longitude:-77.03899741},
{latitude:-12.12669078,
longitude:-77.03618646},
{latitude:-12.12432016,
longitude:-77.03320384},
{latitude:-12.12383764,
longitude:-77.03371882},
{latitude:-12.11909633,
longitude:-77.03369737}
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#6060FB',
                    opacity: 0.8
                }
            },

            {
                id: 12,
                path: [
                    {latitude:-12.12381667,
longitude:-77.03238845},
{latitude:-12.12440408,
longitude:-77.03283906},
{latitude:-12.12851594,
longitude:-77.03496337},
{latitude:-12.13426404,
longitude:-77.02822566},
{latitude:-12.12490758,
longitude:-77.02691674}
                ],
                stroke: {
                    color: '#D5AAB0',
                    weight: 3
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#D5AAB0',
                    opacity: 0.8
                }
            }
        ];



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
