import React, { useContext } from 'react';
import { FaBox, FaShoppingCart, FaUserAlt, FaTag } from 'react-icons/fa';
import MyContext from '../../../context/data/MyContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
    const context = useContext(MyContext);
    const { mode, adminCount, userCount, categoryCount } = context;

    // Define colors based on mode
    const cardBackgroundColor = mode === 'dark' ? 'rgb(46, 49, 55)' : 'white';
    const textColor = mode === 'dark' ? 'white' : 'black';
    const iconColor = mode === 'dark' ? 'white' : 'black';
    const borderColor = mode === 'dark' ? 'rgb(60, 63, 72)' : '#E5E7EB'; // Slightly darker border for dark mode
    const shadowColor = mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'; // Soft shadow based on mode

    return (
        <Layout>
            <section className="text-gray-600 body-font mt-10 mb-10">
                <div className="container px-5 mx-auto mb-10">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div 
                                className="border-2 hover:shadow-lg shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl transition-transform duration-200 transform hover:scale-105" 
                                style={{ backgroundColor: cardBackgroundColor, color: textColor, borderColor: borderColor, boxShadow: `0 4px 6px ${shadowColor}` }}
                            >
                                <div className="w-12 h-12 mb-3 mx-auto pt-1">
                                    <FaBox size={50} color={iconColor} />
                                    </div>
                                <h2 className="title-font font-small text-3xl" style={{ color: textColor }}>{context.product.length}</h2>
                                <p className="font-thin text-lg" style={{ color: textColor }}>Total Products</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div
                                className="border-2 hover:shadow-lg shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl transition-transform duration-200 transform hover:scale-105"
                                style={{ backgroundColor: cardBackgroundColor, color: textColor, borderColor: borderColor, boxShadow: `0 4px 6px ${shadowColor}` }}
                            >
                                <div className="w-12 h-12 mb-3 mx-auto pt-1">
                                    <FaShoppingCart size={50} color={iconColor} />
                                </div>
                                <h2 className="title-font font-small text-3xl" style={{ color: textColor }}>{context.order.length}</h2>
                                <p className="font-thin text-lg" style={{ color: textColor }}>Total Orders</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div
                                className="border-2 hover:shadow-lg shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl transition-transform duration-200 transform hover:scale-105"
                                style={{ backgroundColor: cardBackgroundColor, color: textColor, borderColor: borderColor, boxShadow: `0 4px 6px ${shadowColor}` }}
                            >
                                <div className="w-12 h-12 mb-3 mx-auto pt-1">
                                    <FaUserAlt size={50} color={iconColor} />
                                </div>
                                <h2 className="title-font font-small text-3xl" style={{ color: textColor }}>{context.userCount}</h2>
                                <p className="font-thin text-lg" style={{ color: textColor }}>Total Users</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div
                                className="border-2 hover:shadow-lg shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl transition-transform duration-200 transform hover:scale-105"
                                style={{ backgroundColor: cardBackgroundColor, color: textColor, borderColor: borderColor, boxShadow: `0 4px 6px ${shadowColor}` }}
                            >
                                <div className="w-12 h-12 mb-3 mx-auto pt-1">
                                    <FaTag size={50} color={iconColor} />
                                </div>
                                <h2 className="title-font font-small text-3xl" style={{ color: textColor }}>{context.categoryCount}</h2>
                                <p className="font-thin text-lg" style={{ color: textColor }}>Total Categories</p>
                            </div>
                        </div>
                            </div>
                        </div>
                <DashboardTab />
            </section>
        </Layout>
    )
}

export default Dashboard;
