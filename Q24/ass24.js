// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
//  write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//equality and inequality 
var myName = "Ali";
console.log(myName == "Ali"); // true
console.log(myName !== "Ali"); // false
// numberics
var myNumber = 10;
console.log(myNumber == 10); // true
console.log(myNumber !== 10); // false
console.log(myNumber > 5); //true     greater then
console.log(myNumber < 5); //false    less then 
console.log(myNumber >= 5); //true    greater then or equel to 
console.log(myNumber <= 5); //false   less then or equal to
// and && ===== 0r || (pipe)
var num1 = 10;
var num2 = 5;
console.log(num1 > 9 && num2 < 5); //false
console.log(num1 > 9 || num2 < 5); //true
var myArray = [2, 3, "ALi"];
var myString = "Ahmed";
console.log(Array.isArray(myArray)); //true
console.log(Array.isArray(myString)); //false
