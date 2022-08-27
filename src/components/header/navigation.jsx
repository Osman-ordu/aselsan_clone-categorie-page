import React from 'react'
import './navigation.styles.scss'
import aselsanLogo from '../../assets/logo/aselsan1975-logo.webp'

const navigation = () => {
  return (
    <div className='d-flex justify-content-evenly'>
      <nav className="navbar navbar-expand-md bg-white  ">
        <img className='logo-image mx-5' src={aselsanLogo} />
      </nav>
      <nav className='navbar navbar-expand-md bg-white'>
        <ul className='navbar-nav'>
          <li className='nav-item text-dark'>
            <a className='nav-link' href="#">AKSESUAR</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">ÇOCUK GİYİM</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">UNISEX GİYİM</a>
          </li>
        </ul>
      </nav>
      <nav className='navbar navbar-expand-md bg-white'>
        <div className="navbar-nav">
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="#">
            <i className="fa" style={{fontSize:'24px'}} >&#xf07a;</i>
            <span id='lblCartCount' className='badge badge-warning'> 0 </span>
          </a>
        </div>

      </nav>
    </div>
  )
}

export default navigation