function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('')
  return reversedWord
}
console.log(isPalindrome('abba'))
/* 
  Add your pseudocode here
    1. Split the input string into an array of characters.
  2. Reverse the array of characters.
  3. Join the reversed array back into a string.
  4. Compare the reversed string with the original input string.
  5. If they are equal, return true (the string is a palindrome).
  6. Otherwise, return false (the string is not a palindrome).
*/

/*
  Add written explanation of your solution here
  - The goal is to determine whether the input string is a palindrome, meaning it reads the same forwards and backwards.
  - To do this, I needed to find a way of separating the word into characters then reversing.
  - To do this, I split the string into an array of characters using the `.split('')` method. ['a', 'b', 'b', 'a']
  - Then, the array is reversed using the `.reverse()` method, which reverses the order of elements in the array.
  - After reversing, the array is joined back into a string using the `.join('')` method.
  - We then compare the reversed string to the original input string using `===`.
  - If they are the same, the function returns `true`, indicating that the string is a palindrome. If not, it returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
