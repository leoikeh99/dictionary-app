import axios from "axios";
import React, { createContext, useState } from "react";

export const DictionaryContext = createContext();

const DictionaryProvider = ({ children }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getWord(word) {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setResult(res.data[0]);
      setError(null);
    } catch (error) {
      setResult(null);
      setError(error.response.data);
    }
    setLoading(false);
  }

  return (
    <DictionaryContext.Provider value={{ result, loading, error, getWord }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryProvider;
