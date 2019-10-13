// Transform a number n into the given base base.
// Example: For b = 2 and n = 13, the output should be fromDecimal(base, n) = "1101".
// -------------------------
let result = '';

function fromDecimal(b, n){
  let nextNum = Math.floor(n / b);
  let numResult = (n - (b * nextNum)).toString();

  result = numResult.concat(result);
  
  if (nextNum > 0) {
    return fromDecimal(b, nextNum);
  }

  return result;
}
