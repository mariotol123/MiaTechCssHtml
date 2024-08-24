function outerFunction(x,initialValue){

    let result = initialValue;

    function innerFunction(y){

        result += y + x;

        return result;

    }

    return innerFunction;

};


let firstFunction = outerFunction(5,100);

let secondFunction = firstFunction(10);

console.log(secondFunction);

