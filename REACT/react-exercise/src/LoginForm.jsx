import { useState } from "react";

function LoginForm () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <div>
                <form action="">
                    <input type="text" name="username" value={username} />
                    <input type="text" name="password" value={password} />
                </form>
            </div>
        </>
    )
}