function validISBN10(isbn) {
  if (isbn.length !== 10) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    const digit = parseInt(isbn[i]);
    if (isNaN(digit)) {
      return false;
    }
    sum += digit * (i + 1);
  }

  const lastChar = isbn[9];
  if (lastChar === 'X') {
    sum += 10 * 10;
  } else {
    const digit = parseInt(lastChar);
    if (isNaN(digit)) {
      return false;
    }
    sum += digit * 10;
  }

  return sum % 11 === 0;
}










console.log(validISBN10('1112223339')); // Output: true
console.log(validISBN10('123456789X')); // Output: false
console.log(validISBN10('1234567890')); // Output: false
