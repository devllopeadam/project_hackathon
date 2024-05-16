/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const DataInputsContext = createContext(null);

const useDataInputs = () => useContext(DataInputsContext);

const DataInputsProvider = ({ children }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const values = { data, errors, setData, setErrors };

  return (
    <DataInputsContext.Provider value={values}>
      {children}
    </DataInputsContext.Provider>
  );
};

export { useDataInputs, DataInputsProvider };
