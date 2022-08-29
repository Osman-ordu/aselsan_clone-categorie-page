import './listingButtons.styles.scss'
import { itemData } from '../../mock/itemData';

const listingButton = ({ setFilter }) => {

    const filterLetter = itemData.sort((a, b) => a.item.content.localeCompare(b.item.content))

    const filterRisingPrice = () => {
        const filterPrice = itemData.sort((a, b) => parseFloat(a.item.price) - parseFloat(b.item.price), Number);
        setFilter(filterPrice)
        setFilter([])
    }
    const filterDecreasingPrice = () => {
        const filterPrice = itemData.sort((a, b) => parseFloat(b.item.price) - parseFloat(a.item.price), Number);
        setFilter(filterPrice)
        setFilter([])
    }

    const filterAlphabetically = () => {
        setFilter(filterLetter)
        setFilter([])
    }
    const filterReverseAlpabetically = () => {
        setFilter(filterLetter.reverse())
        setFilter([])
    }



    return (
        <div className='btn-group'>
            <button onClick={filterRisingPrice} className='btn'>
                <span>
                    Fiyata göre(Artan)
                </span>
            </button>
            <button onClick={filterDecreasingPrice} className='btn'>
                <span>
                    Fiyata göre(Azalan)
                </span>
            </button>
            <button onClick={filterAlphabetically} className='btn'>
                <span>
                    Ürün Adına Göre (A-Z)
                </span>
            </button>
            <button onClick={filterReverseAlpabetically} className='btn'>
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