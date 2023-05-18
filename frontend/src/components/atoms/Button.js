import React from 'react'
import '../../styles/atoms.scss';


const Button = ({ children, onClick,type }) => {
    return (
        <button type={type} onClick={onClick} className='button'>{children}</button>
    )
}

export default Button