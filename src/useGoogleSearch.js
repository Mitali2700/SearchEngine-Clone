import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "80d2e105f226c4158";

/************* Custom Hook *************/
const useGoogleSearch = (term) => {     
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    //   fetch(
    //     `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    //   )

    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`) 
      .then((response) => response.json())
      .then(result =>{
        setData(result)
      })
    
    };

    fetchData();
  }, [term]); // term -> datalayer

  return { data };      // It returns data as an object.
};

export default useGoogleSearch;
