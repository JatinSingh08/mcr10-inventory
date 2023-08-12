import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center border px-6 py-4'>
      <div className='text-2xl font-bold '>
        <h1>Products</h1>
      </div>
      <div>
        <select name="category" id="" className='bg-gray-200 p-2 rounded-lg'>
          <option value="all">All Departments</option>
          <option value="kitchen">Kitchen</option>
          <option value="clothing">Clothing</option>
          <option value="toys">Toys</option>
        </select>
      </div>
      <div>
        <label htmlFor="low__stock" className='gap-2 flex items-center justify-center'>
          <input type="checkbox" id='low__stock'/>
          Low Stock Items
        </label>
      </div>
      <div >
        <select name="sort" id="" className='bg-gray-200 p-2 rounded-lg'>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Clothing</option>
        </select>
      </div>
      <div>
        <button className='bg-blue-600 text-white px-6 py-2 rounded-lg'>New</button>
      </div>
    </div>
  )
}

export default Header
