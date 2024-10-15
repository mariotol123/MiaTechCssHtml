import { useEffect } from "react";
import { useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            setError(null);

            try{

                const response = await fetch(url);

                if(!response.ok){
                    throw new Error (response.status);
                } 

                const result = await response.json();

                setData(result);

            } catch (error) {

                setError(error.message);
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }
        if(url){
            fetchData();
        }
    }, [url]);

    return {
        data,error,loading
    }
}

export default useFetch;