import { useState } from "react";

function LoginForm () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username}, Password: ${password}`);
    }

    return (
        <>
            <div>
                <form action="">
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>PIGIAAA</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm;