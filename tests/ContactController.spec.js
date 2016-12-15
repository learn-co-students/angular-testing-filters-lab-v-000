describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should return the number of females on the list', function() {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'female';

      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(71);
    });

    it('should return the number of contacts on the list with manchester as their city', function() {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'manchester';

      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(8);
    });

});
