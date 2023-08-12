import React from "react";
import { Link } from "react-router-dom";
import { ActionType } from "../reducers/constants";
import { useData } from "../context/data/data-context";

const Departments = () => {
  const { dispatch } = useData();

  const categoryFilterHandler = (filterType, filterValue) => {
    dispatch({
      type: ActionType.CHANGE_FILTER,
      payload: { filterType, filterValue },
    });
  };

  const handleLinkClick = (e) => {
    const filterType = e.currentTarget.getAttribute("data-name");
    const filterValue = e.currentTarget.getAttribute("data-value");
    categoryFilterHandler(filterType, filterValue);
  };

  return (
    <div className="w-10/12 flex gap-6 p-10">
      <Link
        to={`/products`}
        data-name="category"
        data-value="Kitchen"
        onClick={handleLinkClick}
        className="p-4 bg-gray-300 w-44 h-36 rounded-md shadow-lg items-center justify-center flex-col flex"
      >
        <p className="font-bold text-2xl">Kitchen</p>
      </Link>
      <Link
        to={`/products`}
        data-name="category"
        data-value="Clothing"
        onClick={handleLinkClick}
        className="p-4 bg-gray-300 w-44 h-36 rounded-md shadow-lg items-center justify-center flex-col flex"
      >
        <p className="font-bold text-2xl">Clothing</p>
      </Link>
      <Link
        to={`/products`}
        data-name="category"
        data-value="Toys"
        onClick={handleLinkClick}
        className="p-4 bg-gray-300 w-44 h-36 rounded-md shadow-lg items-center justify-center flex-col flex"
      >
        <p className="font-bold text-2xl">Toys</p>
      </Link>
    </div>
  );
};

export default Departments;
