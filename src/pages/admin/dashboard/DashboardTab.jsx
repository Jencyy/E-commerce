import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/MyContext';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function DashboardTab() {
    const context = useContext(myContext);
    const { mode, product, edithandle, deleteProduct, order, user } = context;

    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const add = () => {
        window.location.href = '/addproduct';
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="tab-container">
                    <Tabs defaultIndex={0}>
                        <TabList className="flex space-x-4 border-b border-gray-200 mb-6">
                            <Tab>
                                <button type="button" className="py-2 px-4 text-lg font-medium border-b-2 border-transparent hover:border-black hover:text-black focus:outline-none">
                                    <div className="flex gap-2 items-center">
                                        <MdOutlineProductionQuantityLimits /> Products
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="py-2 px-4 text-lg font-medium border-b-2 border-transparent hover:border-black hover:text-black focus:outline-none">
                                    <div className="flex gap-2 items-center">
                                        <AiFillShopping /> Order
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="py-2 px-4 text-lg font-medium border-b-2 border-transparent hover:border-black hover:text-black focus:outline-none">
                                    <div className="flex gap-2 items-center">
                                        <FaUser /> Users
                                    </div>
                                </button>
                            </Tab>
                        </TabList>
                        
                        <TabPanel>
                            <div className='p-4'>
                                <h1 className='text-center mb-6 text-2xl font-semibold'>Product Details</h1>
                                <div className="flex justify-end mb-4">
                                    <button
                                        onClick={add}
                                        type="button"
                                        className="bg-black text-white font-medium rounded-lg py-2 px-4 flex items-center gap-2 hover:bg-gray-800"
                                    >
                                        Add Product <FaCartPlus />
                                    </button>
                                </div>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-600">
                                        <thead className="text-xs uppercase bg-gray-100">
                                            <tr>
                                                <th className="px-6 py-3">S.No</th>
                                                <th className="px-6 py-3">Image</th>
                                                <th className="px-6 py-3">Title</th>
                                                <th className="px-6 py-3">Price</th>
                                                <th className="px-6 py-3">Category</th>
                                                <th className="px-6 py-3">Date</th>
                                                <th className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        {product.map((item, index) => {
                                            const { title, price, imageUrl, category, date } = item;
                                            return (
                                                <tbody key={index}>
                                                    <tr className="bg-white border-b">
                                                        <td className="px-6 py-4">{index + 1}</td>
                                                        <td className="px-6 py-4">
                                                            <img className='w-16' src={imageUrl} alt="product" />
                                                        </td>
                                                        <td className="px-6 py-4">{title}</td>
                                                        <td className="px-6 py-4">₹{price}</td>
                                                        <td className="px-6 py-4">{category}</td>
                                                        <td className="px-6 py-4">{date}</td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex gap-2">
                                                                <div className="text-red-500 cursor-pointer" onClick={() => deleteProduct(item)}>
                                                                    <AiFillDelete size={20} />
                                                                </div>
                                                                <Link to={'/updateproduct'}>
                                                                    <div className="text-blue-500 cursor-pointer" onClick={() => edithandle(item)}>
                                                                        <AiFillPlusCircle size={20} />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            );
                                        })}
                                    </table>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="p-4">
                                <h1 className='text-center mb-6 text-2xl font-semibold'>Order Details</h1>
                                {order.map((allorder, index) => {
                                    return (
                                        <table key={index} className="w-full text-sm text-left text-gray-600 mb-6">
                                            <thead className="text-xs uppercase bg-gray-100">
                                                <tr>
                                                    <th className="px-6 py-3">Payment Id</th>
                                                    <th className="px-6 py-3">Image</th>
                                                    <th className="px-6 py-3">Title</th>
                                                    <th className="px-6 py-3">Price</th>
                                                    <th className="px-6 py-3">Category</th>
                                                    <th className="px-6 py-3">Name</th>
                                                    <th className="px-6 py-3">Address</th>
                                                    <th className="px-6 py-3">Pincode</th>
                                                    <th className="px-6 py-3">Phone Number</th>
                                                    <th className="px-6 py-3">Email</th>
                                                    <th className="px-6 py-3">Date</th>
                                                </tr>
                                            </thead>
                                            {allorder.cartItems.map((item, index) => {
                                                const { title, category, imageUrl, price } = item;
                                                return (
                                                    <tbody key={index}>
                                                        <tr className="bg-white border-b">
                                                            <td className="px-6 py-4">{allorder.paymentId}</td>
                                                            <td className="px-6 py-4">
                                                                <img className='w-16' src={imageUrl} alt="order-item" />
                                                            </td>
                                                            <td className="px-6 py-4">{title}</td>
                                                            <td className="px-6 py-4">₹{price}</td>
                                                            <td className="px-6 py-4">{category}</td>
                                                            <td className="px-6 py-4">{allorder.addressInfo.name}</td>
                                                            <td className="px-6 py-4">{allorder.addressInfo.address}</td>
                                                            <td className="px-6 py-4">{allorder.addressInfo.pincode}</td>
                                                            <td className="px-6 py-4">{allorder.addressInfo.phoneNumber}</td>
                                                            <td className="px-6 py-4">{allorder.email}</td>
                                                            <td className="px-6 py-4">{allorder.date}</td>
                                                        </tr>
                                                    </tbody>
                                                );
                                            })}
                                        </table>
                                    );
                                })}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="p-4">
                                <h1 className='text-center mb-6 text-2xl font-semibold'>User Details</h1>
                                <table className="w-full text-sm text-left text-gray-600">
                                    <thead className="text-xs uppercase bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3">S.No</th>
                                            <th className="px-6 py-3">Name</th>
                                            <th className="px-6 py-3">Email</th>
                                            <th className="px-6 py-3">Uid</th>
                                        </tr>
                                    </thead>
                                    {user.map((item, index) => {
                                        const { name, uid, email } = item;
                                        return (
                                            <tbody key={index}>
                                                <tr className="bg-white border-b">
                                                    <td className="px-6 py-4">{index + 1}</td>
                                                    <td className="px-6 py-4">{name}</td>
                                                    <td className="px-6 py-4">{email}</td>
                                                    <td className="px-6 py-4">{uid}</td>
                                                </tr>
                                            </tbody>
                                        );
                                    })}
                                </table>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default DashboardTab