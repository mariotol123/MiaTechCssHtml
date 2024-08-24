function outerFunction(x){

    function innerFunction(y){

        return x + y;

    }

    return innerFunction;

};


let firstFunction = outerFunction(5);

let secondFunction = firstFunction(10);

console.log(secondFunction);



