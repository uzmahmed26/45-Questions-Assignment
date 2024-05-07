// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, 
//  such as “I would like to own a Honda motorcycle.”

let vehicles:string[]=['Car','Cycle','Honda','Alto','Train','Bus']
// console.log('I would like to own a' + ' '+ vehicles[0])
// console.log('I would like to own a' + ' '+ vehicles[1])
// console.log('I would like to own a' + ' '+ vehicles[2])
// console.log('I would like to own a' + ' '+ vehicles[3])
// console.log('I would like to own a' + ' '+ vehicles[4])
// console.log('I would like to own a' + ' '+ vehicles[5])
vehicles.map((item)=>(
    console.log(`I would like to own a ${item}`)
))