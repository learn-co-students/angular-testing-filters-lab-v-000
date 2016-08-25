describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('Should filter by female', function () {
      var $scope= {};
      $controller('ContactController as vm', { $scope: $scope });

      $scope.vm.search = 'female';

      $scope.vm.changeFilter();
      console.log($scope.vm.filteredList)
      expect($scope.vm.filteredList.length).toEqual(71)
    })

    it ('Should filter by location', function () {
      var $scope= {};
      $controller('ContactController as vm', { $scope: $scope });
      $scope.vm.search = 'manchester';
      $scope.vm.changeFilter();
      console.log($scope.vm.filteredList)
      expect($scope.vm.filteredList.length).toEqual(8)
    })

});
