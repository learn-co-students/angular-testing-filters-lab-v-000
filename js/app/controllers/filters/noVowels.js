function NoVowels(){
  return function(word){
    var chars = word.split('');

    chars.forEach(function(letter, i){
      if(/[aeiou]/.test(letter)){
        chars[i] = '';
      }
    });

    return chars.join('');
  }
}

angular
  .module('app')
  .filter('noVowels', NoVowels);
