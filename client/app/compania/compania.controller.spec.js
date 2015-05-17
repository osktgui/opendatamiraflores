'use strict';

describe('Controller: CompaniaCtrl', function () {

  // load the controller's module
  beforeEach(module('opendatamirafloresApp'));

  var CompaniaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompaniaCtrl = $controller('CompaniaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
