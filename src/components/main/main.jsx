import React,{useState} from 'react'
import SideArea from '../aside/side-area/sideArea'
import CardArea from '../article/cardArea'
import './main.style.scss'
import ListingButton from '../button-group/listingButton'

const main = () => {
const [filter, setFilter] = useState({});

  return (
    <div className='main'>
      <ListingButton setFilter = {setFilter} />
      <SideArea />
      <CardArea filter={filter} />
    </div>
  )
}

export default main