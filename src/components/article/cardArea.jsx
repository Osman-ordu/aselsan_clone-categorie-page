import React from 'react'
import CardContainer from './card-group/cardContainer'

const cardArea = ({ filter }) => {
  return (
    <div className='card-area'>
      <CardContainer filter={filter} />
    </div>
  )
}

export default cardArea