import { Categories, mockData } from '../assets/mockData'
import Heroimg from '../assets/hero-img.jpg'
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Shop from './Shop';

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.product)

  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [])

  return (
    <div>
      <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto py-4 flex lex-col md:flex-row space-x-2'>
          <div className='w-full md:w-3/12'>
            <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'> SHOP BY CATEGROIES</div>
            <ul className='space-y-4 bg-gray-100 p-3 border'>
              {Categories.map((category, index) => (

                <li key={index} className='flex items-center text-sm font-medium'>
                  <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
            <img src={Heroimg} alt='' className='h-full w-full' />
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 cursor-pointer'>
          {products.products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home
