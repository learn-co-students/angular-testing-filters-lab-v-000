describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter based on keyword', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});

        // Test Filter keyword 'female' to have 71 results
        $scope.vm.search = 'female';
        $scope.vm.changeFilter();
        expect($scope.vm.filteredList.length).toBe(71);

        // Test Filter keyword 'Manchester' to have 8 results
        $scope.vm.search = 'Manchester';
        $scope.vm.changeFilter();
        expect($scope.vm.filteredList.length).toBe(8);
    });
});
