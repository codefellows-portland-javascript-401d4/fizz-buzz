function fizzbuzz(n) {
  var fbArray = [];

  for (var i = 1; i <= n; i++) {
    var seq = i;
    if ( !(seq % 3) ) {
      if ( !(seq % 5) ) {
        seq = 'fizzbuzz';
      }
      else {
        seq = 'fizz';
      }
    }
    else if ( !(seq % 5) ) {
      seq = 'buzz';
    }
    fbArray.push(seq);
  }
  return fbArray;
}

module.exports = fizzbuzz;