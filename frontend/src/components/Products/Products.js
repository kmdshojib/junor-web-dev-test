import React from 'react'
import ProductCard from './ProductCard';
import '../../styles/productPage.scss'


const Products = ({ isLoding, handleChange, data }) => {
    return (
        <div className='product-container'>
            {
                isLoding ? <div>Loading...</div> : data?.data.map(({ name, id }) => <div key={id}>
                    <ProductCard
                        onChange={handleChange}
                        value={id}
                        name={name} />
                </div>)
            }
        </div>
    )
}

export default Products;