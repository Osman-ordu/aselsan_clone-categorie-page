import React from 'react'
import './memberLogin.styles.scss'

const memberLoginArea = () => {
  return (
    <div className='member-area-container'>
      <ul className='member-link-group'>
        <li className='member-link-1' href="#">
          <a href="#"><i className="fa-solid fa-user"></i></a>
        <a href="#">Üye girişi</a>
           </li>
        <li className='member-link-2' href="#"><a href="#"> / Üye ol</a></li>
      </ul>
    </div>

  )
}

export default memberLoginArea