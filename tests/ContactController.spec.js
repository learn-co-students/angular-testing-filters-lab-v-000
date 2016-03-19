describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it("it returns all females when user seraches for 'female'", function(){
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'female';

      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(71)
    });

    it("returns all people from Manchester when 'Manchester' is searched", function(){
      var $scope = {};

      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'Manchester';

      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(8)
    })

});
