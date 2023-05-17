import React from 'react'
import '../../styles/productCard.scss'

const ProductCard = ({ sku, name, price, onChange, value }) => {
    return (
        <div className='prdouct-card'>
            <div>
                <input type='checkbox' onChange={onChange} value={value} />
            </div>
            <div className='name-container'>
                <div className='name'>{sku} #jsse</div>
                <div className='name'>{name} Name</div>
                <div className='name'>{price} price</div>
            </div>
        </div>
    )
}

export default ProductCard