import React,{ useState } from 'react'

const priceRangeBox = () => {
    const [show, setShow] = useState(false)

    const handleOpen = () => {
        setShow(!show);
    }
    return (
        <div className='price-range-container'>
            <button onClick={handleOpen} className="accordion-header">Fiyat aralığı
                {
                    show
                        ? <span className='toggler-symbol'>-</span>
                        : <span className='toggler-symbol'>+</span>
                }
            </button>
            {show && (
                <div className="panel-categories">
                  
                </div>
            )
            }

        </div>
    )
}

export default priceRangeBox