"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
console.log('Updated List of our Guests');
//sinding a invitation massage to our guests one by one with thier names 
guestArr.forEach(oneguest => console.log(`Asalam O Alikum ${oneguest}, would you like to Dinner with me`));
//inform that only two guest can be invited for dinner
console.log('Unfortunatlely, The new Diiner Table wont arrive on time, so i can only invite Two Guests to Dinner with me');
//using whileloop to remove guest from the array until only two names remain
while (guestArr.length > 2) {
    let removedGuest = guestArr.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you to Dinner`);
    //printiong a invitation to the last two guest on the list
    console.log('Invitation to the last 2 Guests');
    guestArr.forEach(lasttwo => console.log(`Luckly ${lasttwo}, You are still invited to Dinner`));
    //removing last two guest from the list
    guestArr.pop();
    guestArr.pop();
    guestArr.pop();
    console.log('Empty List:', guestArr);
}
