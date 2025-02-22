function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will cause a compilation error because TypeScript cannot implicitly convert an array to a string.