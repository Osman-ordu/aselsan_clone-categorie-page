import React from 'react'
import SideArea from '../aside/side-area/sideArea'
import CardArea from '../article/cardArea'
import './main.style.scss'

const main = ({filter}) => {
  return (
    <div className='main'>
        <SideArea/>
        <CardArea filter={filter}/>
    </div>
  )
}

export default main