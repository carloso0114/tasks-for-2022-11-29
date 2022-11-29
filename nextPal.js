function nextPal(val) {
  function isPalindrome(str) {
    str = String(str)
    let len = str.length;
    let mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  while (true) {
    val += 1;
    if (isPalindrome(val) === true) {
      return val
    }
  }
}