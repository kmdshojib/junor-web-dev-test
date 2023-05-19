import React from 'react'
import ProductCard from './ProductCard';
import '../../styles/productPage.scss'


const Products = ({handleChange, data }) => {
    return (

        <div className='product-container'>
            {data?.data.map(({ name, sku, id, price, size, weight, height, width, length }) => <div key={id}>
                <ProductCard
                    onChange={handleChange}
                    value={id}
                    sku={sku}
                    name={name}
                    price={price}
                >
                    {
                        size && <div>Size: {size} MB</div>
                    }
                    {
                        weight && <div>Weight: {weight} KG</div>
                    }
                    {
                        (height && width && length) && <div>Dimension: {width} × {height} × {length}</div>
                    }
                </ProductCard>
            </div>)
            }
        </div>
    )
}

export default Products;