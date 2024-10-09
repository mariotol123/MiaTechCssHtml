import { useRef } from "react";

function UncontrolledInput() {
    
    const inputRef = useRef(null);

    const handleShowValue = () => {
        alert(`Input value: ${inputRef.current.value}`);
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleShowValue}>Mostra Input</button>
        </div>
    );
}

export default UncontrolledInput;