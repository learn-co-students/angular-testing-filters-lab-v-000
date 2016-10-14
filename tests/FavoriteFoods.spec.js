describe('FavoriteFood', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $filter = $injector.get('$filter');
    }));

    it('should filter on favorite food correctly', function () {
      var mockedList = [
        {
          name: 'Jason',
          food: 'Cheese'
        },
        {
          name: 'Timothy',
          food: 'Apples'
        },
        {
          name: 'Matt',
          food: 'Parsley'
        }
      ];

      var results = $filter('favoriteFood')(mockedList, 'Cheese');

      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Jason');
    });
});
