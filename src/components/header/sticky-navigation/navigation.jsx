import React from 'react'
import './navigation.styles.scss'
import aselsanLogo from '../../../assets/logo/aselsan1975-logo.webp'

const navigation = () => {
  return (
    <div style={{height:'50px'}}  className='navbar-wrapper d-flex justify-content-around'>
      <div className="navbar navbar-expand-md bg-white logo-wrapper ">
        <img className='logo-image ' src={aselsanLogo} />
      </div>
      <nav className='navbar navbar-expand-md bg-white'>
        <ul className='navbar-nav categorie-group'>
          <li className='nav-item text-dark'>
            <a className='nav-link p-4' href="#">AKSESUAR</a>
            <div className='underline'></div>
          </li>
          <li className='nav-item'>
            <a className='nav-link p-4' href="#">ÇOCUK GİYİM</a>
            <div className='underline'></div>

          </li>
          <li className='nav-item'>
            <a className='nav-link p-4' href="#">UNISEX GİYİM</a>
            <div className='underline'></div>

          </li>
        </ul>
      </nav>
      <nav className='navbar navbar-expand-md bg-white'>
        <div className="navbar-nav">
          <a href="#">
            <i className="fa-solid fa-magnifying-glass mx-4"></i>
          </a>
          <a href="#">
            <i className="fa fa-solid fa-cart-shopping"></i>
            <span id='lblCartCount' className='badge'> 0 </span>
          </a>
        </div>

      </nav>
    </div>
  )
}

export default navigation