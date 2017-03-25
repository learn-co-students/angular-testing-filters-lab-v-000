describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter the results correctly', function(){
    	var $scope = {};
    	$controller('ContactController as vm', {$scope: $scope});
    	expect($scope.vm.filteredList.length).toEqual(71)
    });

    it('should change the filter correctly', function(){
    	var $scope = {};
    	$controller('ContactController as vm', {$scope: $scope});
    	$scope.vm.search = "manchester"
    	$scope.vm.changeFilter();
 		expect($scope.vm.filteredList.length).toEqual(8)
    })

});
