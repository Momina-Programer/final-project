import { useSelector } from "react-redux"

import ProductCard from "../components/ProductCard"
import NoProduct from '../assets/hero-img.jpg'
const FilterData  = ( ) => {
    const filterProducts = useSelector(state => state.product.filteraData)
    return (
        <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
        {filterProducts.length > 0 ?
        <>
        
 
        
        <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 cursor-pointer'>
          {filterProducts.slice(0,5).map(((product) => {
            <ProductCard product = {product}/>
          }))}
        </div>
        </>
        : 
        <div className="flex justify-center">
            <img src={NoProduct} alt="" />
        </div>
           }
      </div>
    
    )
}

export default FilterData