function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //This will work correctly

let user2 = "Jane Doe";
console.log(greeter(user2)); // This will also work correctly