import { useState, useEffect ,} from "react";
// importing statement
// usestate kia ha Data loading

function useFetch(url) {
  // custom hook jo argument URL pass kar raha ha . 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try { 
        // try func to fetch the API
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError("Please Re-Try Fetching Data...");
        // load wala message
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, loading, error };
}

export default useFetch;

