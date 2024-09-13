import { useSelector } from "react-redux"
import ProductCard from '../components/ProductCard'

const Shop = ()=> {
    const products = useSelector(state => state.product)
    return(
        <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 cursor-pointer'>
        {products.products.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
      </div>
    )
}

export default Shop