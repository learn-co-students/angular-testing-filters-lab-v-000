describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

   it('should filter the results correctly', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});

        $scope.vm.search = 'female';

        $scope.vm.changeFilter();

        expect($scope.vm.filteredList.length).toBe(71);
    });

    it('should re-filter the results correctly when changing search term', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});

        $scope.vm.search = 'Manchester';

        $scope.vm.changeFilter();

        expect($scope.vm.filteredList.length).toBe(8);
    });

});

// Write a test to return all the contacts who are female (hint: there are 71 females).
// Write another test to select people from different geographical locations (hint: there are 8 from Manchester).
