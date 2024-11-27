import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';

function ProductCard() {
    const context = useContext(myContext);
    const { mode, product, searchkey, filterType, filterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    // Add to cart function
    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Updated filtering logic
    const filteredProducts = product
        .filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
        .filter((obj) => {
            if (filterType === 'all' || filterType === '') return true;
            return obj.category.toLowerCase() === filterType.toLowerCase();
        })
        .filter((obj) => {
            if (filterPrice === 'all' || filterPrice === '') return true;
            return obj.price.includes(filterPrice);
        });

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1
                        className="sm:text-3xl text-2xl font-medium title-font mb-2"
                        style={{ color: mode === 'dark' ? 'white' : 'black' }}
                    >
                        Our Latest Collection
                    </h1>
                    <div className="h-1 w-20 bg-black rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {filteredProducts.map((item, index) => {
                        const { id, title, price, imageUrl } = item; // Assuming `id` is the product ID
                        return (
                            <div key={index} className="p-4 md:w-1/4">
                                <div
                                    className="h-full border-2 hover:shadow-lg transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                                    style={{
                                        backgroundColor: mode === 'dark' ? '#1C1C1C' : '#FFFFFF',
                                        color: mode === 'dark' ? 'white' : 'black',
                                    }}
                                >
                                    <div className="relative overflow-hidden">
                                        <Link to={`/product/${id}`}>
                                            <img
                                                className="rounded-lg w-full h-80 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                                                src={imageUrl}
                                                alt={title}
                                            />
                                        </Link>
                                    </div>
                                    <div className="p-5">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                            Amysho
                                        </h2>
                                        <h1 className="title-font text-lg font-medium mb-3">{title}</h1>
                                        <p className="leading-relaxed mb-3">₹ {price}</p>
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() => addCart(item)}
                                                type="button"
                                                className="text-white bg-black hover:bg-gray-800 transition-colors duration-300 font-medium rounded-lg text-sm w-full py-2.5"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
