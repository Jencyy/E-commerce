import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../../context/data/MyContext';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;
    const navigate = useNavigate();
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        if (isAdded) {
            navigate('/');
        }
    }, [isAdded, navigate]);

    const handleAddProduct = () => {
        addProduct(products.id, products);
        setIsAdded(true); // Set this to true once the product is added
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-black px-9 py-9 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-center text-white text-2xl mb-6 font-bold">Add Product</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        onChange={(e) => setProducts({ ...products, title: e.target.value })}
                        value={products.title}
                        name='title'
                        className='bg-gray-100 mb-4 px-4 py-2 w-full rounded-lg text-gray-800 placeholder:text-gray-400 outline-none border border-gray-300 focus:ring-2 focus:ring-black'
                        placeholder='Product title'
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name='price'
                        onChange={(e) => setProducts({ ...products, price: e.target.value })}
                        value={products.price}
                        className='bg-gray-100 mb-4 px-4 py-2 w-full rounded-lg text-gray-800 placeholder:text-gray-400 outline-none border border-gray-300 focus:ring-2 focus:ring-black'
                        placeholder='Product price'
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name='imageurl'
                        onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                        value={products.imageUrl}
                        className='bg-gray-100 mb-4 px-4 py-2 w-full rounded-lg text-gray-800 placeholder:text-gray-400 outline-none border border-gray-300 focus:ring-2 focus:ring-black'
                        placeholder='Product imageUrl'
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name='category'
                        onChange={(e) => setProducts({ ...products, category: e.target.value })}
                        value={products.category}
                        className='bg-gray-100 mb-4 px-4 py-2 w-full rounded-lg text-gray-800 placeholder:text-gray-400 outline-none border border-gray-300 focus:ring-2 focus:ring-black'
                        placeholder='Product category'
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        cols="30" rows="5"
                        name='description'
                        onChange={(e) => setProducts({ ...products, description: e.target.value })}
                        value={products.description}
                        className='bg-gray-100 mb-4 px-4 py-2 w-full rounded-lg text-gray-800 placeholder:text-gray-400 outline-none border border-gray-300 focus:ring-2 focus:ring-black'
                        placeholder='Product description'>
                    </textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleAddProduct}
                        className='bg-white text-black font-bold px-4 py-2 rounded-lg '>
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
