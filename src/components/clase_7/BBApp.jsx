import { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
import Loader from "./Loader";


const initialQuote = {
    quote: "",
    author: ""
}

const BBApp = () => {
        // GETTER SETTER
    const [quote, setQuote] = useState(initialQuote)
    const [isLoading, setIsLoading] = useState(false)

    // ASYNC AWAIT

    const readQuote = async () => {
        setIsLoading(true);
        // Pedir la info a la api
        const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes";
        const response = await axios.get(ENDPOINT);     
        const [newQuote] = await response.data;
        // Actualizar el estado
        setQuote(() => newQuote);

        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
    }

    useEffect(() => {
        readQuote()
    }, [])
    

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
      <img
        src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
        alt="breaking-bad"
        width="300"
      />
      { isLoading ? <Loader /> : <Quote currentQuote={quote}/>}
      <button onClick={readQuote}>Obtener otra cita</button>
    </div>
  );
};


export default BBApp;
