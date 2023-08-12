import React from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../context/data/data-context';

const ProductDetail = () => {
  const { productId } = useParams();
  const { state } = useData();
  const productDetails = state.productsData.find(product => product.id.toString() === productId);

  return (
    <div className='w-10/12 p-10 flex flex-col items-center justify-center text-start gap-6 ml-[17%]'>
      <div className='text-4xl font-medium underline text-blue-600'>
        <h1>{productDetails?.name}</h1>
      </div>
      <div>
        <img src={productDetails?.imageUrl} alt={productDetails?.name} className='w-72 h-72' />
      </div>
      <div>
        <ul className='text-xl'>
          <li><span className='font-medium'>Price:</span> {productDetails?.price}</li>
          <li><span className='font-medium'>Stock:</span> {productDetails?.stock}</li>
          <li><span className='font-medium'>Supplier:</span> {productDetails?.supplier}</li>
          <li><span className='font-medium'>SKU:</span> {productDetails?.sku}</li>
          <li><span className='font-medium'>Delivered:</span> {productDetails?.delivered}</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductDetail
