import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Products/Header';
import ProductTable from '../components/Products/ProductTable';
import { inventoryData } from '../data/data';

const Products = () => {
  const { category } = useParams();
  const kitchenData = inventoryData.filter(data => data.department === 'Kitchen')

  return (
    <div className='w-10/12 p-10 flex flex-col gap-8'>
      <Header />
      <ProductTable
      data={kitchenData}
      />
    </div>
  )
}

export default Products
