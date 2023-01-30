import async from "async";
import React, { useEffect, useState } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (dataPost) => {
    setOptions({
      method: "POST",
      headers: {
        "Contant-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchPost) => {
      setPending(true);

      try {
        const respose = await fetch(url, {
          ...fetchPost,
          signal: controller.signal,
        });
        if (!respose.ok) {
          throw new Error(respose.statusText);
        }
        const result = await respose.json();
        setPending(false);
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          setError("The Fetch Aborted");
        } else {
          setPending(false);
          setError("The Fetch Is Failed");
        }
      }
    };

    if (method === "POST" && options) {
      fetchData(options);
    }

    if (method === "GET") {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [url, method, options]);

  return { data, pending, error, postData };
};
