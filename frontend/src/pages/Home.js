import React, { useState } from 'react';
import Products from './../components/Products/Products';
import Header from '../components/Header/Header';
import Button from '../components/atoms/Button';
import '../styles/home.scss'
import { useDeleteData, useFetchData } from '../Hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import Spinner from '../components/spinner/Spinner';

const Home = () => {
    useTitle("Home")
    const getData = "http://phprest.atwebpages.com/api/getProducts.php";
    const { data, isLoading, refetchData } = useFetchData(getData);

    const [arr, setArr] = useState([]);
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setArr((prevArr) => [...prevArr, value]);
        } else {
            setArr((prevArr) => prevArr.filter((item) => item !== value));
        }
    };

    const { deleteData } = useDeleteData();

    const handleDelete = async () => {
        const deleteDataURl = 'http://phprest.atwebpages.com/api/deleteProducts.php'
        try {
            if (arr.length > 0) {
                const ids = arr.map((num) => parseInt(num.trim(), 10));
                const data = {
                    ids: ids,
                };
                await deleteData(deleteDataURl, data);
                refetchData();
            }
        } catch (error) {
            console.error({ error })
        }
    };

    return (
        <div className='home-container'>
            <Header title="Product List">
                <Button onClick={() => navigate('/addproduct')}>Add</Button>
                <Button onClick={handleDelete}>Mass Delete</Button>
            </Header>
            {
                isLoading ? <Spinner /> : data?.data?.length > 0 ? <Products
                    data={data}
                    handleChange={handleChange}
                /> :
                    <div className='data-notfound-container'>
                        <div className='no-data-found'>No Product found please add product </div>
                    </div>
            }
        </div>
    );
};

export default Home;
