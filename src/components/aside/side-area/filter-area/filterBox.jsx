import React, { useState } from 'react'
import './filterBox.styles.scss'

const filterBox = () => {
    const [show, setShow] = useState(false)

    const handleOpen = () => {
        setShow(!show);
    }

    return (
        <div>
            <div className='age-box-group'>
                <button onClick={handleOpen} className="accordion-header">Yaş
                    {
                        show
                            ? <span className='toggler-symbol'>-</span>
                            : <span className='toggler-symbol'>+</span>
                    }
                </button>
                {show && (
                    <div className="panel-checkbox">
                        <form action="">
                            <div className='checkbox-item'>
                                <input type="checkbox" name="" id="" />
                                <label className='mx-1' >İndirimli ürünler</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type="checkbox" name="" id="" />
                                <label className='mx-1'>Yeni Ürünler</label>
                            </div>



                        </form>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default filterBox