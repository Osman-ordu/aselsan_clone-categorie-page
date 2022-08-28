import React, { useState } from 'react'
import './categories.styles.scss'

const categories = () => {
    const [show, setShow] = useState(false)

    const handleOpen = () => {
        setShow(!show);
    }

    return (
        <div className='categories-group'>
            <div className='d-flex justify-content-start'>
            <button  onClick={handleOpen} className="accordion-header">Kategoriler
            {
                    show
                        ? <span className='toggler-symbol'>-</span>
                        : <span className='toggler-symbol'>+</span>
                }
               
            </button>
          
            </div>
        
            {show && (
                <div className="panel-categories">
                    <a className='categories-link-item' href="#">ÇOCUK GİYİM</a>
                    <a className='categories-link-item' href="#">AKSESUAR</a>
                    <a className='categories-link-item' href="#">UNISEX GİYİM</a>
                </div>
            )
            }

        </div>
    )
}

export default categories