let number = document.querySelectorAll(".number");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let division = document.querySelector(".division");
let molti = document.querySelector(".molti");
let egual = document.querySelector(".egual");
let div = document.querySelector(".display");

let currentValue = 0;
let currentOperator = null;




    let numbers = number.forEach(element => {
    element.addEventListener("click", function(){
        let span = parseInt(element.textContent);
        if(div.textContent === "0"){
            div.innerHTML = span
        } else {
            div.append(span);
        }
        })
    });


    


     increment.addEventListener("click", function() {
        currentOperator = '+';
         console.log("Operatore selezionato: +");
     });

     decrement.addEventListener("click", function() {
         currentOperator = '-';
         console.log("Operatore selezionato: -");
     });

     division.addEventListener("click", function() {
        currentOperator = '/';
         console.log("Operatore selezionato: /");
     });

     molti.addEventListener("click", function() {
         currentOperator = '*';
         console.log("Operatore selezionato: *");
     });

     egual.addEventListener("click", function(){
        let previousValue;
        let resultDiv = document.querySelector(".div");
        let result;

        if(currentOperator === "+"){
            result = currentValue + previousValue;
        }

        resultDiv.textContent = result;

        console.log(result);

     })

