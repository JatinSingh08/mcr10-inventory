import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-2/12 bg-gray-800 h-[100vh] ">
      <ul className="text-white flex-col flex gap-16 text-xl  items-center justify-center h-full">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="departments">Departments</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
