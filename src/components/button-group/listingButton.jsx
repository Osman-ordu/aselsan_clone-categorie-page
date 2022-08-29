import './listingButtons.styles.scss'
import { itemData } from '../../mock/itemData';

const listingButton = ({ setFilter }) => {
    const filterRisingPrice = (e) => {
        const filterPrice = itemData.sort((a, b) => parseFloat(a.item.price) - parseFloat(b.item.price), Number);
        setFilter(filterPrice)
        setFilter([])
    }
    const filterDecreasingPrice = (e) => {
        const filterPrice = itemData.sort((a, b) => parseFloat(b.item.price) - parseFloat(a.item.price), Number);
        setFilter(filterPrice)
        setFilter([])
    }



    return (
        <div className='btn-group'>
            <button onClick={filterRisingPrice} className='btn'>
                <span>
                    Fiyata göre(Artan)
                </span>
            </button>
            <button onClick={ filterDecreasingPrice} className='btn'>
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