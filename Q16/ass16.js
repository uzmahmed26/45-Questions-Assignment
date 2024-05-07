"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//Creating a Guest List Array
let guestArr = ['Sir Syed Mohammad Ahmed', 'Sir Kamran Tassori', 'Sir Daniyal Nagori', 'Sir Furqan Behlum'];
//making variable for those guest who cant come
let canNotAttend = guestArr[0];
//print the name of guest who cant come
console.log(canNotAttend, 'Can not Attend');
//Add or remove values from Guest list array
guestArr.splice(0, 1, 'Sir Hamza');
// message print for bigger table
console.log('Good News! We have found a Bigger Table For Dinner.');
//Adding a new guest at starting index of array
guestArr.unshift('Sir Ali');
//adding a new guest at ending index of Array
guestArr.push('Sir Zia Khan');
//get a middle index of our guest list Array
let middleIndex = Math.floor(guestArr.length / 2);
//Adding a new guest to midding index of arry
guestArr.splice(middleIndex, 0, 'Sir Qasim');
//print massage of updated list
console.log('Updated List of our Guest');
//sinding a invitation massage to our guests one by one with thier names 
guestArr.forEach(oneguest => console.log(`Asalam O Alikum ${oneguest}, would you like to Dinner with me`));
