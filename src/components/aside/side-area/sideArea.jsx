import CategoriesBox from './categories/categories'
import AgeBox from './age-box/ageBox'
import PriceRangeBox from './price-range/priceRangeBox'
import FilterBox from './filter-area/filterBox'

const sideArea = () => {


  return (
    <div className='side-area'>
      <CategoriesBox />
      <AgeBox />
      <PriceRangeBox />
      <FilterBox />
    </div>

  )
}

export default sideArea