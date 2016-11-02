describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter list of contacts when searching for female contacts', function() {
      var $scope = {}
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'female';

      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(71);
    })

    it('should filter list of contacts when seaching for contacts in "Manchester"', function(){
      var $scope = {}
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'Manchester';

      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(8);
    })

});
