describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it("can filter gender", function() {
      $scope ={};
      $controller("ContactController as cntrl", {$scope: $scope});

      $scope.cntrl.search =  'female';
      $scope.cntrl.changeFilter();
      expect($scope.cntrl.filteredList.length).toEqual(71);
    });

    it("can select people from Manchester", function() {
      $scope ={};
      $controller("ContactController as cntrl", {$scope: $scope});

      $scope.cntrl.search = "Manchester";
      $scope.cntrl.changeFilter();
      expect($scope.cntrl.filteredList.length).toEqual(8);
    })

});
