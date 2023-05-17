import React from 'react'
import '../../styles/headerContainer.scss'
const Header = ({ children }) => {

  return (
    <div>
      <div className='header-container'>
        <div>
          <h2>Product List</h2>
        </div>
        <div className='btn-container'>
          {children}
        </div>
      </div>
      <div className="border"></div>
    </div>
  )
}

export default Header;