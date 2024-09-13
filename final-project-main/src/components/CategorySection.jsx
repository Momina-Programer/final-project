import ManCetegory from '../assets/image/men1.webp'
 import WomanCetegory from '../assets/image/woman1.jpeg'
 import KidCetegory from '../assets/image/kid1.jpeg'

// import { Categories } from "../assets/mockData";

const categories = [
    {
        title: 'Men',
        imageUrl:ManCetegory,
    },
    {
        title: 'Woman',
        imageUrl:WomanCetegory,
    },
    {
        title: 'Kids',
        imageUrl:KidCetegory,
    },
];
const CategorySection =()=>{
    return (
        <div className=" mx-auto grid grid-clos-1 sm:grid-cols-3 gap-6 ">
            {categories.map((category, index) => (
                <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src={category.imageUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />

                    <div className="absolute top-20 left-12">
                        <p className="text-xl font-bold">{category.title}</p>
                        <p className="text-gray-600">View All</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategorySection