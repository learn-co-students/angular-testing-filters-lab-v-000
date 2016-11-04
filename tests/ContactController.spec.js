describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should return all the contacts who are female', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});
        
        $scope.vm.search = 'female';
 
        $scope.vm.changeFilter();

        expect($scope.vm.filteredList[70]["name"]["first"]).toContain('ellie');
    });

    it('should select people from different geographical locations ', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});
        
        $scope.vm.search = 'Manchester';
 
        $scope.vm.changeFilter();
        expect($scope.vm.filteredList[7]["location"]["city"]).toContain('manchester');
    });

});