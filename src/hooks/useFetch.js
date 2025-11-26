import { useState, useEffect } from "react";

// imported useState and useEffect to store data , loading , error and to run code when component doads or URL changes 

function useFetch(url) {
  // this is where i defined the hook , this is how a custom hook is created named as useFetch
  // this recives an argument "url" which is API present in the products.jsx file
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// these are all the state variables
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try { 
        // try func to fetch the API
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, loading, error };
}

export default useFetch;

//  iam again assuring that AI was used but not to copy paste the code but to my understandings . 