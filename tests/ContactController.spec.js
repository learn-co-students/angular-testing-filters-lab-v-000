describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it ('should filter the results correctly', function () {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});
    })
});
