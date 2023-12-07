import React from 'react'

const ProductCard = ({product}) => {
  return ( 
    
    <div >
        <div className='product'>
          <img src={product.src} alt="" />
          <button className='name'>{product.name}</button>
          <span className='price'>{`قیمت  ${product.price} ریال`}</span>
  
        </div>
    </div>
    
  )
}

export default ProductCard