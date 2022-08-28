import React from 'react'
import './iconsGroup.styles.scss'

const iconsGroup = () => {
  return (
    <div className='icons-group'>
      <ul className='icons-container'>
        <li>
          <a href='#' className='icon-social'>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href='#' className='icon-social'>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href='#' className='icon-social'>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href='#' className='icon-social'>
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href='#' className='icon-social'>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default iconsGroup
