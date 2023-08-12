import React from 'react'
import Header from '../components/Products/Header';
import ProductTable from '../components/Products/ProductTable';
import { useData } from '../context/data/data-context';

const Products = () => {
  const { filteredProducts } = useData();

  return (
    <div className='w-10/12 p-10 flex flex-col gap-8 ml-[17%]'>
      <Header />
      <ProductTable
      data={filteredProducts}
      />
    </div>
  )
}

export default Products
