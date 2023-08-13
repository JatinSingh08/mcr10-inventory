import React, { useState } from "react";
import { useData } from "../context/data/data-context";
import { ActionType } from "../reducers/constants";

const AddProduct = () => {
  const { state ,dispatch } = useData();
  const [productData, setProductData] = useState({
    id: state?.productsData?.length + 1,
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    supplier: "",
    delivered: 0,
    imageUrl: "https://thumbs.dreamstime.com/z/warner-bros-studio-burbank-los-angeles-county-23158123.jpg?w=992"
  })

  const addProductHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ActionType.ADD_PRODUCT, payload: productData})
    setProductData({
      id: state?.productsData?.length + 1,
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      supplier: "",
      delivered: 0,
      imageUrl: "https://thumbs.dreamstime.com/z/warner-bros-studio-burbank-los-angeles-county-23158123.jpg?w=992"
    })
  }

  return (
    <form className="w-10/12 flex gap-6 p-10 ml-[17%] flex-col items-start" onSubmit={addProductHandler}>
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
            className="bg-gray-200 p-2 rounded-lg"
            value={productData.department}
            onChange={(e) => setProductData(data => ({...data, department: e.target.value}))}
          >
            <option disabled>Select Department</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="name" className="flex flex-col items-start">
          <span className="font-normal text-xl">Name</span>
          <input type="text" className="border w-96 h-12" 
          value={productData.name}
          onChange={(e) => setProductData(data => ({...data, name: e.target.value}))}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description" className="flex flex-col items-start">
          <span className="font-normal text-xl">Description</span>
          <textarea id="description" className="border w-96"
          value={productData.description}
          onChange={(e) => setProductData(data => ({...data, description: e.target.value}))}
          ></textarea>
        </label>
      </div>
      <div>
        <label htmlFor="price" className="flex flex-col items-start">
          <span className="font-normal text-xl">Price</span>
          <input type="number" className="border w-96 h-12" 
          value={productData.price}
          onChange={(e) => setProductData(data => ({...data, price: e.target.value}))}
          />
        </label>
      </div>
      <div>
        <label htmlFor="stock" className="flex flex-col items-start">
          <span className="font-normal text-xl">Stock</span>
          <input type="number" className="border w-96 h-12" 
          value={productData.stock}
          onChange={(e) => setProductData(data => ({...data, stock: e.target.value}))}
          />
        </label>
      </div>
      <div>
        <label htmlFor="supplier" className="flex flex-col items-start">
          <span className="font-normal text-xl">Supplier</span>
          <input type="text" className="border w-96 h-12" 
          value={productData.supplier}
          onChange={(e) => setProductData(data => ({...data, supplier: e.target.value}))}
          />
        </label>
      </div>
      <div>
        <label htmlFor="delivered" className="flex flex-col items-start">
          <span className="font-normal text-xl">Delivered</span>
          <input type="number" className="border w-96 h-12" 
          value={productData.delivered}
          onChange={(e) => setProductData(data => ({...data, delivered: e.target.value}))}
          />
        </label>
      </div>
      <div>
        <label htmlFor="imageUrl" className="flex flex-col items-start">
          <span className="font-normal text-xl">Image Url</span>
          <input type="text" className="border w-96 h-12" 
          value={productData.imageUrl}
          onChange={(e) => setProductData(data => ({...data, imageUrl: e.target.value}))}
          />
        </label>
      </div>
      <div>
        <button className="bg-blue-500 rounded-lg px-6 py-3 text-white" type="submit">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
