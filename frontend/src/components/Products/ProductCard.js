import React from 'react'
import '../../styles/productCard.scss'

const ProductCard = ({ sku, name, price, onChange, value, children }) => {
    return (
        <div className='prdouct-card'>
            <div>
                <input type='checkbox' onChange={onChange} value={value} />
            </div>
            <div className='name-container'>
                <div className='name'>{sku} </div>
                <div className='name'>{name}</div>
                <div className='name'>Price: {price}$</div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default ProductCard