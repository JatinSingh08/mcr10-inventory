import React from 'react'
import { inventoryData } from '../data/data'

const Dashboard = () => {
  const totalStock = inventoryData.reduce((acc, curr) => acc += curr.stock, 0);
  const totalDelivered = inventoryData.reduce((acc, curr) => acc += curr.delivered, 0);
  const totalLowStockItems = inventoryData.reduce((acc, curr) => {
    if(curr.stock <= 10) acc++;
    return acc;
  } ,0)
  return (
    <div className='w-10/12 flex gap-6 p-10 ml-[17%]'>
      <div className='p-4 bg-gray-300 w-44 h-36 rounded-md shadow-lg items-center justify-center flex-col flex'>
        <p className='font-bold text-2xl'>{totalStock}</p>
        <p className=' text-lg'>Total Stock</p>
      </div>
      <div className='p-4 bg-gray-300 w-44 h-36 rounded-md shadow-lg items-center justify-center flex-col flex'>
        <p className='font-bold text-2xl text-orange-500'>{totalDelivered}</p>
        <p className=' text-lg'>Total Delivered</p>
      </div>
      <div className='p-4 bg-gray-300 w-44 h-36 rounded-md shadow-lg items-center justify-center flex-col flex'>
        <p className='font-bold text-2xl text-amber-700'>{totalLowStockItems}</p>
        <p className=' text-lg'>Low Stock Items</p>
      </div>
    </div>
  )
}

export default Dashboard
