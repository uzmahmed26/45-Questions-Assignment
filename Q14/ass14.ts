// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let guestArr:string[] = ['Syed Mohammad Ahmed','Sir Kamran Tassori', 'Sir Furqan Behlum', 'Sir Daniyal Nagori']
guestArr.map((item)=>(
    console.log(`Dear ${item}, You are corodially invited to a dinner`)
))