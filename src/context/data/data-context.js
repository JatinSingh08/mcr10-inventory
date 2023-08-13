import React, { createContext, useContext, useReducer, useEffect } from "react";
import { DataReducer, initialState } from "../../reducers/DataReducer/DataReducer";
import { filtersHandler } from "../../utils/filterFunction";

const LOCAL_STORAGE_KEY = "dataState"; // Define a key for your localStorage item

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  let filteredProducts = filtersHandler(state);

  useEffect(() => {
    localStorage.setItem("InventoryData", JSON.stringify(state));
  }, [state]);

  return (
    <DataContext.Provider value={{ state, dispatch, filteredProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

const useData = () => useContext(DataContext);

export { DataProvider, useData };
