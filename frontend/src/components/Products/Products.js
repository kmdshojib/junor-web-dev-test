import React from 'react'
import useFetchData from '../../Hooks/useFetchData'
import ProductCard from './ProductCard';

import '../../styles/productPage.scss'

const Products = () => {
    const { data, isLoding, error } = useFetchData("http://localhost/scandiweb-test/api/getProducts.php");

    return (
        <div className='product-container'>
            {
                isLoding ? <div>Loading...</div> : data?.data.map(({ name, id }) => <div key={id}>
                    <ProductCard name={name} />
                </div>)
            }
        </div>
    )
}

export default Products