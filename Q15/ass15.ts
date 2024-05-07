// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// .Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guestArr:string[] = ['Sir Syed Mohammad Ahmed','Sir Kamran Tassori','Sir Daniyal Nagori','Sir Furqan Behlum']
let canNotAttend:string = 'Sir Kamran Tassori'
console.log(canNotAttend + ' '+ 'Can not attend for you dinner party')

let newGuest:string = "Class Teacher"
guestArr[guestArr.indexOf(canNotAttend)]=newGuest
console.log(guestArr)

guestArr.map((item)=>
console.log(`Dear ${item}, You are invited to a dinner party`)
)
