function FavoriteFood(){
  return function(data, food){
    var filtered = [];

    data.forEach(function(obj, i){
      if (obj['food'] == food){
        filtered.push(obj);
      }
    });

    return filtered;
  }
}

angular
  .module('app')
  .filter('favoriteFood', FavoriteFood);
