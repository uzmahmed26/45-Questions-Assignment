"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and 
//  store it in a separate array. Call show_magicians() with each array to show 
//  that you have one array of the original names and one array with 
//  the Great added to each magician’s name.
function make_great(magicians) {
    for (const magician of magicians) {
        console.log(magician);
        console.log(magician + ' ' + 'The Great');
    }
}
const magicianNames = ['M.Ejaz Mugha', 'Mian Afzal Rashid', 'AS Jillani'];
make_great(magicianNames);
