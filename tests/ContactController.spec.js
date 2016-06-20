describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should return all female contacts', function() {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});
      $scope.vm.search = 'female';
      $scope.vm.changeFilter();
      var list = $scope.vm.filteredList

      expect(list.length).toEqual(71)
    })

    it('should filter results by geographical location', function() {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});
      $scope.vm.search = 'Manchester';
      $scope.vm.changeFilter();
      var list = $scope.vm.filteredList

      expect(list.length).toEqual(8)
    })

});






