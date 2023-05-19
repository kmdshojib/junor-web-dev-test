import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Button from '../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useFetchData, usePostData } from '../Hooks/useFetchData';

import '../styles/addproduct.scss'
import useTitle from '../Hooks/useTitle';
const AddProduct = () => {
    useTitle("Add Product");
    const { data } = useFetchData("http://phprest.atwebpages.com/api/getCategories.php");
    const { refetchData } = useFetchData("http://phprest.atwebpages.com/api/getProducts.php");
    const { postData, response } = usePostData()
    const [selectedType, setSelectedType] = useState('');
    const navigate = useNavigate();

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handlePostProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const sku = form.sku.value;
        const name = form.name.value;
        const price = form.price.value;
        const size = form.size?.value || '';
        const height = form.height?.value || '';
        const width = form.width?.value || '';
        const length = form.length?.value || '';
        const weight = form.weight?.value || '';

        const data = {
            sku: sku,
            name: name,
            price: price,
        };

        if (size) {
            data.size = size;
        }

        if (height) {
            data.height = height;
        }

        if (width) {
            data.width = width;
        }

        if (length) {
            data.length = length;
        }

        if (weight) {
            data.weight = weight;
        }


        try {
            postData('http://phprest.atwebpages.com/api/postProducts.php', data)
            response && form.reset();
            refetchData();
            navigate("/");

        } catch (err) {
            console.error(err);
            alert(response.message);
        }
    };

    return (
        <form onSubmit={handlePostProduct}>
            <div className='add-Product'>
                <Header title="Add Product">
                    <Button type="submit">Save</Button>
                    <Button onClick={() => navigate("/")}>Cancel</Button>
                </Header>
                <div className='add-product-container'>
                    <div className='input-container'>
                        <label className='input-label' htmlFor='sku'>SKU:</label>
                        <input name='sku' type='text' placeholder='#sku' required />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='name'>Name:</label>
                        <input name='name' type='text' placeholder='#name' required />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='price'>Price:</label>
                        <input name='price' type='number' placeholder='#price' required />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="pet-select">Type Switcher: </label>
                        <select id="pet-select" value={selectedType} onChange={handleTypeChange} required>
                            <option value=""> --Type Switcher-- </option>
                            {data?.data &&
                                data.data.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <option>{item.dvd}</option>
                                        <option>{item.book}</option>
                                        <option>{item.furniture}</option>
                                    </React.Fragment>
                                ))}
                        </select>
                    </div>
                    {selectedType === 'DVD' && (
                        <div className='input-container'>
                            <label htmlFor='size'>Size(MB):</label>
                            <input type='number' name='size' placeholder='#size' required />
                        </div>
                    )}
                    {selectedType === 'Book' && (
                        <div className='input-container'>
                            <label htmlFor='weight'>Weight(kg):</label>
                            <input type='number' name='weight' placeholder='#weight' required />
                        </div>
                    )}
                    {selectedType === 'Furniture' && (
                        <div className='input-container furniture'>
                            <div className='input-container'>
                                <label htmlFor='height'>Height(CM):</label>
                                <input id='height' type='number' name='height' placeholder='#Height' required />
                            </div>
                            <div className='input-container'>
                                <label htmlFor='width'>Width(CM):</label>
                                <input type='number' name='width' placeholder='#Width' required />
                            </div>
                            <div className='input-container'>
                                <label htmlFor='length'>Length(CM):</label>
                                <input type='number' name='length' placeholder='#length' required />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </form>
    );
};

export default AddProduct;
