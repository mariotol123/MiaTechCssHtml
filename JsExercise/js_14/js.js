function createCounter(number){

    let counter = number;

    return{
            increment : function increment(){
                return counter ++;
            },

            decrement : function decrement(){
                return counter--;
            }
    }
};

let counter = createCounter(20);

console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());