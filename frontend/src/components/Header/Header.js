import React from 'react'
import '../../styles/headerContainer.scss'
const Header = ({ children,title }) => {

  return (
    <div>
      <div className='header-container'>
        <div>
          <h2>{title}</h2>
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