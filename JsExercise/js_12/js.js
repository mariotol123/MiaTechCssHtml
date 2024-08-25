let student = {
    name : "Mario",
    age : 27, 
    school : "Sbordone",
    grade : "Boh"
}


let key = Object.keys(student);
let values = Object.values(student);
let entries = Object.entries(student);


console.log(key);
console.log(values);
console.log(entries);

entries.forEach(element => {
    
    let chiave = element[0];
    let valore = element[1];

    console.log(`${chiave}: ${valore}`)

});