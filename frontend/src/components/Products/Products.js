import React from 'react'
import ProductCard from './ProductCard';
import '../../styles/productPage.scss'


const Products = ({ isLoding, handleChange, data }) => {
    return (

        <div className='product-container'>
            {isLoding ? <div>Loading...</div> :
                data?.data.map(({ name, id, price, size, weight, height, width, length }) => <div key={id}>
                    <ProductCard
                        onChange={handleChange}
                        value={id}
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