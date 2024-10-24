import React from "react";
import { useNavigate } from "react-router-dom";

function About () {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/")
    }

    return (
        <>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure consequuntur laborum dignissimos incidunt deserunt. Eum, quos. Ad tenetur enim, nesciunt perferendis facilis id voluptate consequuntur soluta debitis magni autem at!</p>

        <button onClick={handleHome}>
            Clicca per ritornare alla home!!!
        </button>
        </>
    )
}

export default About;