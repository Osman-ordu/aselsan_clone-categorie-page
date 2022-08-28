import React from 'react'
import './listingButtons.styles.scss'

const listingButton = () => {
    return (
        <div className='btn-group'>
            <button className='btn text-start'>
                <span>
                    Fiyata göre(Artan)
                </span>
            </button>
            <button className='btn text-start'>
                <span>
                    Fiyata göre(Azalan)
                </span>
            </button>
            <button className='btn text-start'>
                <span>
                    Ürün Adına Göre (A-Z)
                </span>
            </button>
            <button className='btn text-start'>
                <span>
                    Ürün Adına Göre (Z-A)
                </span>
            </button>
            <button className='btn text-start'>
                <span>
                    Stoktakiler
                </span>
            </button>
        </div>
    )
}

export default listingButton