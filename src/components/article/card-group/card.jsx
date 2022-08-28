import React from 'react'
import './cardGroup.styles.scss'

const card = ({ image, content, price }) => {
    return (
        <div className='card-item mx-4 my-2'>
            <img className='card-img' src={image} alt={content} />
            <p className='card-content'>{content}</p>
            <p className='card-price fw-bold'>
                <i className="fa-solid fa-turkish-lira-sign"></i>
                {price.toFixed(2)}</p>
        </div>
    )
}

export default card