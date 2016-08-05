describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    var $scope={};

    it('should return all females', function () {
      
      $controller('ContactController as vm', {$scope: $scope});
      $scope.vm.search = 'female';
      $scope.vm.changeFilter();
      angular.forEach($scope.vm.filteredList, function(person, index){
        expect(person.gender).toEqual('female');
      });
    });

    it('should count people from Manchester', function () {
      $controller('ContactController as vm', {$scope: $scope});
      $scope.vm.search = 'manchester';
      $scope.vm.changeFilter();
      expect($scope.vm.filteredList.length).toEqual(8);
    });

});
