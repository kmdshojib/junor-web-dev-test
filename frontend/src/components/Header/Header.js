import React from 'react'
import '../../styles/headerContainer.scss'
const Header = () => {
  return (
    <div className='header-container'>
      <div>
        <h2>Product List</h2>
      </div>
      <div>
        <button>Add</button>
        <button>Mass Delete</button>
      </div>
    </div>
  )
}

export default Header;