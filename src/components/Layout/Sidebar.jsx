import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-2/12 bg-gray-800 h-[100vh] fixed ">
      <ul className="text-white flex-col flex gap-16 text-xl items-center justify-center h-full">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'text-blue-500' : ''}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/departments" className={location.pathname === '/departments' ? 'text-blue-500' : ''}>
            Departments
          </Link>
        </li>
        <li>
          <Link to="/products" className={location.pathname === '/products' ? 'text-blue-500' : ''}>
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
