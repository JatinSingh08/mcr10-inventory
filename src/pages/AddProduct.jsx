import React from "react";

const AddProduct = () => {
  return (
    <div className="w-10/12 flex gap-6 p-10 ml-[17%] flex-col items-start">
      <div className="text-4xl font-medium">
        <h1>Add New Product</h1>
      </div>
      <div>
        <label
          htmlFor="department"
          className="flex gap-4 items-center justify-center"
        >
          <span className="font-normal text-xl">Department</span>
          <select
            name="department"
            id="department"
            className="bg-gray-200 p-2 rounded-lg"
          >
            <option value="">Select Department</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="name" className="flex flex-col items-start">
          <span className="font-normal text-xl">Name</span>
          <input type="text" className="border w-96 h-12" />
        </label>
      </div>
      <div>
        <label htmlFor="description" className="flex flex-col items-start">
          <span className="font-normal text-xl">Description</span>
          <textarea id="description" className="border w-96"></textarea>
        </label>
      </div>
      <div>
        <label htmlFor="price" className="flex flex-col items-start">
          <span className="font-normal text-xl">Price</span>
          <input type="number" className="border w-96 h-12" />
        </label>
      </div>
      <div>
        <label htmlFor="stock" className="flex flex-col items-start">
          <span className="font-normal text-xl">Stock</span>
          <input type="number" className="border w-96 h-12" />
        </label>
      </div>
      <div>
        <label htmlFor="supplier" className="flex flex-col items-start">
          <span className="font-normal text-xl">Supplier</span>
          <input type="text" className="border w-96 h-12" />
        </label>
      </div>
      <div>
        <label htmlFor="delivered" className="flex flex-col items-start">
          <span className="font-normal text-xl">Delivered</span>
          <input type="number" className="border w-96 h-12" />
        </label>
      </div>
      <div>
        <label htmlFor="imageUrl" className="flex flex-col items-start">
          <span className="font-normal text-xl">Image Url</span>
          <input type="text" className="border w-96 h-12" />
        </label>
      </div>
      <div>
        <button className="bg-blue-500 rounded-lg px-6 py-3 text-white">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
