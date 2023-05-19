import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer/Footer';

import '../styles/layout.scss';

const Main = () => {
    return (
        <div className='layout-container'>
            <div className='outlet'>
                <Outlet />
            </div>
            <Footer className='footer' />
        </div>
    )
}

export default Main