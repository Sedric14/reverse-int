module.exports = function reverse (n) {
  n = Math.abs(n);
  let s = (n+'').split('').reverse().join('');
  n = s*1;
  return n;
}