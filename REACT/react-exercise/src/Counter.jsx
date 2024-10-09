import { useState } from "react";
import { useEffect } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);
    const [h2Text, setH2Text] = useState("Counter is 0")

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

    useEffect (() => {
        setH2Text(`Il counter e' ${counter}`)
    }, [counter])

    return (
        <div>
            <h2>{h2Text}</h2>
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