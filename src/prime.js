function prime(x) {
  var min = 2;
  while (min <= x) {
    if (x % min == 0) {
      x /= min;
    } else {
      min++;
    }
  }
    return min;
}
module.exports = prime;


