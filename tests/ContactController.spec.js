describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('can search by gender', function() {
      var $scope = {};

      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'female';
      $scope.vm.changeFilter();
      var men = [];
      var women = $scope.vm.filteredList.map(function(x) {
        if ( x["gender"] === "male" ) {
          men.push(x);
        }
      })
      expect(men.length).toEqual(0);
    });

    it('can search by location', function() {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});
      $scope.vm.search = 'Manchester';
      $scope.vm.changeFilter();
      expect($scope.vm.filteredList.length).toEqual(8);
    })

});
