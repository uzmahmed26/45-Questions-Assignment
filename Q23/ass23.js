// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test 1: Equality comparison (True)
var car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
//Test 2: Strict equality comparision (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru");
//Test 3: Inequality comparision (False)
console.log("Is car != 'subaru'? I predict True.");
console.log(car != "subaru");
//Test 4: Strict Inequality comparision (False)
console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== "subaru");
//Test 5: Less than comparision (False)
console.log("Is car < 'subaru'? I predict True.");
console.log(car < "subaru");
//Test 6: Greater than comparision (False)
console.log("Is car > 'subaru'? I predict True.");
console.log(car > "subaru");
//Test 7: Less than or equal comparision (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= "subaru");
//Test 8: Greater than or equal comparision (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= "subaru");
//Test 9: Checking truthiness (True)
console.log("Is car? I predict True.");
console.log(car);
//Test 10: Checking falsiness (False)
console.log("Is !car? I predict True.");
console.log(!car);
