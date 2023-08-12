import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Products/Header';
import ProductTable from '../components/Products/ProductTable';
import { inventoryData } from '../data/data';
import { useData } from '../context/data/data-context';

const Products = () => {
  const { category } = useParams();
  const { state, filteredProducts } = useData();
  // const productsData = state?.filters?.category === 'All' ? state?.productsData : state?.productsData?.filter(data => data.department === state?.filters?.category)

  return (
    <div className='w-10/12 p-10 flex flex-col gap-8'>
      <Header />
      <ProductTable
      data={filteredProducts}
      />
    </div>
  )
}

export default Products
