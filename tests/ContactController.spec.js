describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter the results correctly', function () {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'female'

      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(71);
    });

    it('should filter the results on city correctly', function () {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = {location: {city: 'manchester' }};

      $scope.vm.changeFilter();

      for (var i = 0; i < $scope.vm.filteredList.length; i++) {
        expect($scope.vm.filteredList[i].location.city).toEqual('manchester');
      }
    });
});
