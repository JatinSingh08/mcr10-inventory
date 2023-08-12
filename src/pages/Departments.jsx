import React from "react";
import { Link } from "react-router-dom";

const Departments = () => {
  return (
    <div className="w-10/12 flex gap-6 p-10">
      <Link
        to={`/products/kitchen`}
        className="p-4 bg-gray-300 w-44 h-36 rounded-md shadow-lg items-center justify-center flex-col flex"
      >
        <p className="font-bold text-2xl">Kitchen</p>
      </Link>
      <Link
        to={`/products/clothing`}
        className="p-4 bg-gray-300 w-44 h-36 rounded-md shadow-lg items-center justify-center flex-col flex"
      >
        <p className="font-bold text-2xl">Clothing</p>
      </Link>
      <Link
        to={`/products/toys`}
        className="p-4 bg-gray-300 w-44 h-36 rounded-md shadow-lg items-center justify-center flex-col flex"
      >
        <p className="font-bold text-2xl">Toys</p>
      </Link>
    </div>
  );
};

export default Departments;
