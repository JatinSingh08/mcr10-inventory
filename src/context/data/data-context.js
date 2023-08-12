import React, { createContext, useContext, useReducer } from 'react'
import { DataReducer, initialState } from '../../reducers/DataReducer/DataReducer';
import { filtersHandler } from '../../utils/filterFunction';

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);


  let filteredProducts = filtersHandler(state);
  return (
    <DataContext.Provider 
    value={{ 
      state,
      dispatch,
      filteredProducts
    }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
const useData = () => useContext(DataContext);
export { DataProvider, useData };