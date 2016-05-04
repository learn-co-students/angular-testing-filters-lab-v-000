describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('returns all female contacts', function() {
    	var $scope = {}

    	var controller = $controller('ContactController as vm', {$scope: $scope});

    	$scope.vm.search = 'female'
    	$scope.vm.changeFilter();

    	expect($scope.vm.filteredList.length).toEqual(71);
    });

    it('finds people from one location', function() {
    	var $scope = {}

    	var controller = $controller('ContactController as vm', {$scope: $scope});

    	$scope.vm.search = 'Manchester';
    	$scope.vm.changeFilter();

    	expect($scope.vm.filteredList.length).toEqual(8);
    })

});
