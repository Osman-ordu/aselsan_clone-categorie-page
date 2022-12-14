import React from 'react'
import './cardGroup.styles.scss'

const card = ({ image, content, price }) => {
    return (
        <div className='card-item my-3'>

            <img className='card-img' src={image} alt={content} />
            <p className='card-content'>{content} </p>
            <p className='card-price fw-bold'>
                <i className="fa-solid fa-turkish-lira-sign"></i>
                {price}
            </p>
            <a className='text-end mx-2 my-2' href="#"><i className="like-button fa-regular fa-heart"></i></a>
        </div>
    )
}

export default card