import React, { useContext, useEffect } from 'react';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify'; // Ensure you have this import if using toast notifications

function Allproducts() {
  const context = useContext(myContext);
  const { mode, product, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtering logic
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
    <Layout>
      <Filter />
      <section className="text-gray-900 body-font bg-white">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl font-bold mb-2 text-gray-900">Our Latest Collection</h1>
            <div className="h-1 w-20 bg-black rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {filteredProducts.map((item, index) => {
              const { title, price, imageUrl, id } = item;
              return (
                <div
                  onClick={() => window.location.href = `/productinfo/${id}`}
                  key={index}
                  className="p-4 md:w-1/4"
                >
                  <div
                    className="h-full border border-gray-300 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                  >
                    <div className="flex justify-center cursor-pointer">
                      <img
                        className="rounded-t-2xl w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                        src={imageUrl}
                        alt={title}
                      />
                    </div>
                    <div className="p-5 border-t border-gray-300">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Category</h2>
                      <h1 className="title-font text-lg font-bold text-gray-900 mb-3">{title}</h1>
                      <p className="leading-relaxed mb-3 text-gray-900">₹{price}</p>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => addCart(item)}
                          className="focus:outline-none text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm w-full py-2"
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
    </Layout>
  );
}

export default Allproducts;
