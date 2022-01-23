import { useState, useEffect } from "react";

const useFetch = (num) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal: abortCont.signal,
    })
      .then(function (response) {
        if (!response.ok) {
          throw Error("Couldn't fetch data");
        }
        return response.json();
      })
      .then(function (myJson) {
        if (num === 0) {
          setData(myJson["projects"]);
        } else {
          setData(myJson["projects"].slice(0, num));
        }
        setIsPending(false);
        setError(null);
      })
      .catch(function (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => abortCont.abort();
  }, [num]);
  return { data, isPending, error };
};

export default useFetch;
