// A new method you will probably want to use.
//
// If s is a string:
//
//  s.search(/[aeiou]/) returns the index in s of the first vowel.
//
// For instance
//
//  const s = 'phone';
//
//  s.search(/[aeiou]/) returns 2
//
// The funny syntax /[aeiou]/ is called a "regular expression". We'll learn
// about them in more detail later.
//
// To write the advancedPigLatin function you will want to know about a new
// operator called the "ternary operator". (It's called this because it has
// three operands.)
//
// It looks like:
//
//  booleanValue ? value1 : value2
//
// And it evaluates to value1 is booleanValue is true and value2 if it is false.
//
// For example:
//
//  x === 0 ? "Zero" : "Not zero"
//
// will evaluate to either "Zero" or "Not zero" depending on whether x === 0.
//
// Feel free to play around in the REPL to make sure you understand how this
// operator works.

const pigLatin =(s) => {
  return s.substring(s.search(/[aeiou]/)) + s.substring(0, s.search(/[aeiou]/)) + 'ay';
}
const advancedPigLatin =(s) => {
  return s.substring(s.search(/[aeiou]/)) + s.substring(0, s.search(/[aeiou]/)) + 'way'.substring(s.substring(0,2).search(/[aeiou]/));
  }