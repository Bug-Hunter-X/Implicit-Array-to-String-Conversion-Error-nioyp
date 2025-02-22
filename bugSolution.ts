function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user.join(" "))); //Correct use of join method

//OR

function greeter2(person: string | string[]) {
    if (typeof person === 'string') {
      return "Hello, " + person;
    } else {
      return "Hello, " + person.join(" ");
    }
  }
  
  console.log(greeter2(user)); //Correct use of type assertion