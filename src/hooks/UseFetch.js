import React, { useState, useEffect } from "react";

const UseFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  useEffect(() => {
    if (!url) return;
    setInProgress(true);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setInProgress(false);
        setData(data);
      })
      .catch((error) => {
        setInProgress(false);
        setError(error);
      });
  }, [url]);

  return {
    data,
    error,
    inProgress,
    setUrl,
  };
};

export default UseFetch;
