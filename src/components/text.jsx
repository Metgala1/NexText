import { useEffect, useState } from "react";
import axios from "axios";

function Test () {
    const [message, setMessage] = useState("");

    useEffect (() => {
        const fetchMessage = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/test`);
                setMessage(response.data.message);
            } catch (error) {
                console.error("Error fetching message:", error);
            }
        }
        fetchMessage();

    }, [])

    return (
        <div style={{backgroundColor: "red"}}>
            {!message ? <p>Loading...</p> :
            <h1 style={{color: "blue"}}>{message}</h1>
             }
            <h2>HO vohvjxchjh</h2>
        </div>
    )
}

export default Test;