import React from "react";
import { Link } from "react-router-dom";

const ProductTable = ({ data }) => {
  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Supplier</th>
          </tr>
        </thead>
        {data.map((kitchenData) => {
          return (
            <tbody className="font-medium text-start" key={kitchenData?.id}>
              <tr>
                <td className="p-2 border w-24 h-24">
                  <img src={kitchenData?.imageUrl} alt={kitchenData?.name} />
                </td>
                <td className="p-2 border w-56 text-blue-500 ">
                  <Link to={`/products/${kitchenData?.id}`}>{kitchenData?.name}</Link>
                </td>
                <td className="p-2 border w-96">{kitchenData?.description}</td>
                <td className="p-2 border">${kitchenData?.price}</td>
                <td className="p-2 border">{kitchenData?.stock}</td>
                <td className="p-2 border">{kitchenData?.supplier}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ProductTable;
