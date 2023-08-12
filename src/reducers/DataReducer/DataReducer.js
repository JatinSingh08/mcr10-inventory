import { inventoryData } from "../../data/data";
import { ActionType } from "../constants";

const initialState = {
  productsData: inventoryData,
  filters: {
    category: 'Kitchen',
    lowStockItems: false,
    sort: 'name'
  }
}

const DataReducer = (state, action) => {
  switch(action.type) {
    case ActionType.CHANGE_FILTER: 
      return { 
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.filterValue
        }
      }
    default: 
      break;
  }
}

export { DataReducer, initialState };