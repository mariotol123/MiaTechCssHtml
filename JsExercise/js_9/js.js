let person = {
    name : "Mario",
    age : 27,
    city : "Naples"
}

console.log(person);

console.log(person.age);


let personCopy = Object.assign({}, person);

personCopy.age = 30;

console.log(personCopy.age);
console.log(person.age);


person.job = "Developer";
console.log(person);