import { useEffect, useState } from "react";

const FetchData = (route) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`http://localhost:5000/${route}`);
      const data = await res.json();
      setError(false)
      setData(data);
      setIsLoading(false)
    }catch (error) {
      console.log(error)
      setIsLoading(false)
      setError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getData();
  }, [])

  return {
    data, 
    isLoading,
    error
  }

};

export default FetchData