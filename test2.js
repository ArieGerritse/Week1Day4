var words   = ["ground", "control", "to", "major", "tom"];


map = function(array, callback) {
  var result = [];
  array.forEach(function(element){
    result.push(callback(element));
  });
  return console.log(result);
};


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});