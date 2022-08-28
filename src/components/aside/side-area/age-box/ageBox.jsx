import React, { useState } from 'react'
import './ageBox.styles.scss'

const ageBox = () => {
    const [show, setShow] = useState(false)

    const handleOpen = () => {
        setShow(!show);
    }
    return (
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
                            <label className='mx-1'>3-4</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type="checkbox" name="" id="" />
                            <label className='mx-1'>5-6</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type="checkbox" name="" id="" />
                            <label className='mx-1'>7-8</label>
                        </div>
                        <div className='checkbox-item'>
                            <input type="checkbox" name="" id="" />
                            <label className='mx-1'>9-10</label>
                        </div>

                    </form>
                </div>
            )
            }
        </div>
    )
}

export default ageBox