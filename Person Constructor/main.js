// your code here
class Person {
  constructor(firstName, lastName, hometown, occupation, catchPhrase) {
    this.firstName = firstName
    this.lastName = lastName
    this.hometown = hometown
    this.occupation = occupation
    this.catchPhrase = catchPhrase
  }

  name(){
    return this.firstName + " " + this.lastName
  }
}
debugger
let nick = new Person("Nicholas", "Ashley", "Charlotte", "Software Developer", "we live in a simulation")

console.log(nick.name())