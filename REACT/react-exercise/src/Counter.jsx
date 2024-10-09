import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const incrementClickButton = () => {
        setCounter((counter) => {
            return(counter + 1);
        });
    }

    const decrementClickButton = () => {
        setCounter((counter) => {
            return(counter - 1);
        });
    }

    const resetClickButton = () => {
        setCounter(0);
    }


    return (
        <div>
            <button onClick={incrementClickButton}>ADD</button>
            <button onClick={decrementClickButton}>REMOVE</button>
            <button onClick={resetClickButton}>RESET</button>
            <div>
                Counter : {counter}
            </div>
        </div>
    )
}

export default Counter;