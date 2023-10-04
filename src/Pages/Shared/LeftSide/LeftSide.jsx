import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
    const [categories,setCategories] = useState([])
    
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All Categories</h2>
           <div className="mt-4">
           <Link
                className="border bg-gray-200 p-2 px-12 w-full text-xl font-semibold">National News
            </Link>
           </div>
            {
                categories.map(category =>
                <Link className="block ml-12 text-xl font-semibold"
                 key={category.id} to={`/category/${category.id}`}>
                {category.name} </Link>)
            }
        </div>
    );
};

export default LeftSide;