// Write a test to return all the contacts who are female (hint: there are 71 females).

// Write another test to select people from different geographical locations (hint: there are 8 from Manchester).

describe('ContactController', function () {
    var $controller;
 
    beforeEach(module('app'));
 
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
 
 
    it('should return all the contacts who are female', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});
 
        // $scope.vm holds all of our values
      $scope.vm.search = 'female';
      $scope.vm.changeFilter();
      expect($scope.vm.filteredList.length).toEqual(71);
    });

    it('should return people from different geographical locations', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});
 
        // $scope.vm holds all of our values
      $scope.vm.search = 'Manchester';
      $scope.vm.changeFilter();
      expect($scope.vm.filteredList.length).toEqual(8);
    });
});