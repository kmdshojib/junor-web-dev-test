import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer/Footer';
import Header from './../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main