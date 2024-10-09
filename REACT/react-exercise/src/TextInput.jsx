import { useState } from "react";

function TextInput () {

    const [input, setInput] = useState("");

    return (
        <>
            <div>
                <input type="text" />
            </div>
        </>
    )
}

export default TextInput;