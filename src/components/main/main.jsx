import React from 'react'
import SideArea from '../aside/side-area/sideArea'
import CardArea from '../article/cardArea'
import './main.style.scss'

const main = () => {
  return (
    <div className='main'>
        <SideArea/>
        <CardArea/>
    </div>
  )
}

export default main