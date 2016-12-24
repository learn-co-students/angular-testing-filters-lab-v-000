describe('ContactController', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should filter females', function() {
    var $scope = {};
    $controller('ContactController as vm', {$scope: $scope});
    expect($scope.vm.changeFilter('female').length).toEqual(71);
  });

  it('should filter people from Manchester', function() {
    var $scope = {};
    $controller('ContactController as vm', {$scope: $scope});
    expect($scope.vm.changeFilter('manchester').length).toEqual(8);
  });

});
