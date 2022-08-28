import React from 'react'
import { itemData } from '../../../mock/itemData'
import Card from './card'
import './cardGroup.styles.scss'


const cardContainer = () => {
    return (
        <div className='card-container d-flex flex-wrap text-center' >
            {itemData.map((card,index) => (
                <Card
                key={index}
                image={card.item.image}
                content={card.item.content}
                price={card.item.price}
                />
            ))}
            
        </div>
    )
}

export default cardContainer