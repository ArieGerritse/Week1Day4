function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  var i = -1;


  return function() {

    i +=1;
    return list[i];

  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

var countdownGenerator = function (x) {
  var i = 4;

  return function(){

      // console.log(i);

      i -=1;

      switch(true){

      case(i > 0):
        console.log('T-minus '+ i +'...');
        break;
      case(i === 0):
        console.log('Blast Off!');
        break;
      default:
        console.log('Rockets aready gone, bub!');
        break;

  }
};
};


var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
