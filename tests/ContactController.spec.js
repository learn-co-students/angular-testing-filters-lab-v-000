describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter the results correctly', function() {
    	var $scope = {}
    	$controller('ContactController as vm', {$scope: $scope});

    	$scope.vm.search = { 'gender': 'female'};
    	$scope.vm.changeFilter();

    	expect($scope.vm.filteredList.length).toEqual(71);

    	$scope.vm.search = { 'location': { 'city': 'manchester' } };
    	$scope.vm.changeFilter();

    	expect($scope.vm.filteredList.length).toEqual(2);

    	$scope.vm.search = { 'location': { 'street': 'manchester' } };
    	$scope.vm.changeFilter();

    	expect($scope.vm.filteredList.length).toEqual(6);
    });

});
