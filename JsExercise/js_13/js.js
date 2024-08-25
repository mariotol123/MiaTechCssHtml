//FOREACH MAP


let numbers = [1,2,3,4,5];

numbers.forEach(element => {
    
    console.log(element * 2);

});


let squaredNumbers = numbers.map(element => {

    return element * element;

});


console.log(squaredNumbers);

//FILTER FIND

let students = [
    {
        name : "Mario",
        grade : 100
    },
    {
        name : "Fede",
        grade : 60
    },
    {
        name : "Marco",
        grade : 50
    },
    {
        name : "Mario",
        grade : 59
    }
];


let passedStudents = students.filter(element => {

    return element.grade >= 60;

});

passedStudents.forEach(student => {
    console.log(`Nome: ${student.name}, Voto: ${student.grade}`);
});


//SORT REDUCE

let expens = [10,50,200,30,90];

let sum = expens.reduce((acc,sum) =>{

    return acc + sum;

});

console.log(sum);



let words = ["banana", "apple", "cherry", "date"];

console.log(words.sort());


