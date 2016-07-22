describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
      }));

        it('should filter correctly', function(){
          var $scope = {};
          $controller('ContactController as contacts', {$scope: $scope});
          $scope.contacts.search = 'female';
          $scope.contacts.changeFilter();
          expect($scope.contacts.filteredList.length).toEqual(71)

          $scope.contacts.search = 'Manchester'
          $scope.contacts.changeFilter();
          expect($scope.contacts.filteredList.length).toBe(8)
        });



});
