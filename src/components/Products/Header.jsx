import React from "react";
import { useData } from "../../context/data/data-context";
import { ActionType } from "../../reducers/constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  const filtersHandler = (e) => {
    const filterType = e.target.name;
    let filterValue = e.target.value;
    if (filterType === "lowStockItems") filterValue = e.target.checked;
    dispatch({
      type: ActionType.CHANGE_FILTER,
      payload: { filterType, filterValue },
    });
  };

  return (
    <div className="flex justify-between items-center border px-6 py-4">
      <div className="text-2xl font-bold ">
        <h1>Products</h1>
      </div>
      <div>
        <select
          id=""
          className="bg-gray-200 p-2 rounded-lg"
          name="category"
          value={state.filters.category}
          onChange={filtersHandler}
        >
          <option value="All">All Departments</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="low__stock"
          className="gap-2 flex items-center justify-center"
        >
          <input
            type="checkbox"
            id="low__stock"
            name="lowStockItems"
            value={state.filters.lowStockItems}
            onChange={filtersHandler}
          />
          Low Stock Items
        </label>
      </div>
      <div>
        <select
          className="bg-gray-200 p-2 rounded-lg"
          name="sort"
          onChange={filtersHandler}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </div>
      <div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        onClick={() => navigate('/add')}
        >
          New
        </button>
      </div>
    </div>
  );
};

export default Header;
