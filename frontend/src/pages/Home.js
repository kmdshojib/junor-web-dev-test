import React, { useState } from 'react';
import Products from './../components/Products/Products';
import Header from '../components/Header/Header';
import Button from '../components/atoms/Button';
import { useDeleteData, useFetchData } from '../Hooks/useFetchData';

const Home = () => {
    const { data, isLoading, refetchData } = useFetchData("http://localhost/scandiweb-test/api/getProducts.php");

    const [arr, setArr] = useState([]);

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
        try {
            if (arr.length > 0) {
                const ids = arr.map((num) => parseInt(num.trim(), 10));
                const data = {
                    ids: ids,
                };
                await deleteData('http://localhost/scandiweb-test/api/deleteProducts.php', data);
                refetchData();
            }
        } catch (error) {
            console.error({ error })
        }
    };

    return (
        <div>
            <Header>
                <Button>Add</Button>
                <Button onClick={handleDelete}>Mass Delete</Button>
            </Header>
            <Products
                data={data}
                isLoading={isLoading}
                handleChange={handleChange}
            />
        </div>
    );
};

export default Home;
