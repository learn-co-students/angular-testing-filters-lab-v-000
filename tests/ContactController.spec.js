describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter the results correctly if female is searched', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});
        $scope.vm.search = 'female';
        $scope.vm.changeFilter();
        expect($scope.vm.filteredList.length).toEqual(71);
        
    });

    it('should filter the results correctly when location city is seached', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});

        $scope.vm.search = 'Manchester';
        $scope.vm.changeFilter();
        expect($scope.vm.filteredList.length).toEqual(8);
        
    });

});
