import React from 'react'
import './listingButtons.styles.scss'

const listingButton = () => {
    return (
        <div className='btn-group'>
            <button className='btn'>
                <span>
                    Fiyata göre(Artan)
                </span>
            </button>
            <button className='btn'>
                <span>
                    Fiyata göre(Azalan)
                </span>
            </button>
            <button className='btn'>
                <span>
                    Ürün Adına Göre (A-Z)
                </span>
            </button>
            <button className='btn'>
                <span>
                    Ürün Adına Göre (Z-A)
                </span>
            </button>
            <button className='btn'>
                <span>
                    Stoktakiler
                </span>
            </button>
        </div>
    )
}

export default listingButton