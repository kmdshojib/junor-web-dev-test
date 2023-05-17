import React from 'react'
import '../../styles/atoms.scss';

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='button'>{children}</button>
    )
}

export default Button