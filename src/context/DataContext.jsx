import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValue = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return <DataContext.Provider value={{ data, setValue }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
