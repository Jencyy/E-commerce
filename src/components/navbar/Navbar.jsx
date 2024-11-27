import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import myContext from '../../context/data/MyContext'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { IoMdCart } from 'react-icons/io'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const context = useContext(myContext)
  const { toggleMode, mode } = context

  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
    localStorage.clear('user')
    window.location.href = "/"
  }
  const cartItems = useSelector((state) => state.cart)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <div className={`sticky top-0 z-50 ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}>

      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className={`relative flex w-full max-w-xs flex-col overflow-y-auto ${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} pb-12 shadow-xl`}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={() => setOpen(false)}
                  >
                    <RxCross2 size={24} />
                  </button>
                </div>
              
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
               
                  <Link to={'/allproducts'} className="text-sm font-medium hover:text-gray-400 transition-colors duration-300">
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link to={'/order'} className="text-sm font-medium hover:text-gray-400 transition-colors duration-300">
                      Order
                    </Link>
                  </div>
                    <Link to={'/'} className="text-sm font-medium hover:text-gray-400 transition-colors duration-300">
                    Home
                  </Link>

                  {user?.user?.email === 'jenu@gmail.com' && (
                    <div className="flow-root">
                      <Link to={'/dashboard'} className="text-sm font-medium hover:text-gray-400 transition-colors duration-300">
                        Admin
                      </Link>
                    </div>
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a onClick={logout} className="text-sm font-medium cursor-pointer hover:text-gray-400 transition-colors duration-300">
                        Logout
                      </a>
                    </div>
                  ) : (
                    <Link to={'/signup'} className="text-sm font-medium cursor-pointer hover:text-gray-400 transition-colors duration-300">
                      Signup
                    </Link>
                  )}
                  <div className="flow-root">
                    <Link to={'/'} className="block p-2">
                      <img
                        className="inline-block w-10 h-10 rounded-full border border-gray-200"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov"
                      />
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt="India"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium">INDIA</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop */}
      <header className={`relative ${mode === 'dark' ? 'bg-white' : 'bg-black'}`}>
        <p className={`flex h-10 items-center justify-center px-4 text-sm font-medium sm:px-6 lg:px-8 ${mode === 'dark' ? 'bg-gray-100 text-black' : 'bg-black text-white'}`}>
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className={`px-4 sm:px-6 lg:px-8 shadow-xl ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <div className="flex h-16 items-center">
            <button
              type="button"
              className={`rounded-md p-2 text-gray-400 lg:hidden ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} hover:bg-gray-700 transition-colors duration-300`}
              onClick={() => setOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link to={'/'} className='flex'>
                <h1 className='text-2xl  px-2 py-1 rounded  logo-shadow display-2' style={{ color: mode === 'dark' ? 'white' : 'black' } }>

                 Amysho
                </h1>
              </Link>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <Link to={'/'} className="text-sm font-medium hover:text-gray-400 transition-colors duration-300">
                    Home
                  </Link>
                <Link to={'/allproducts'} className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-400 transition-colors duration-300`}>
                  All Products
                </Link>
                <Link to={'/order'} className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-400 transition-colors duration-300`}>
                  Order
                </Link>
              

                {user?.user?.email === 'jenu@gmail.com' && (
                  <Link to={'/dashboard'} className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-400 transition-colors duration-300`}>
                    Admin
                  </Link>
                )}

                {user ? (
                  <a onClick={logout} className={`text-sm font-medium cursor-pointer ${mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-400 transition-colors duration-300`}>
                    Logout
                  </a>
                ) : (
                  <Link to={'/signup'} className={`text-sm font-medium cursor-pointer ${mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-400 transition-colors duration-300`}>
                    Signup
                  </Link>
                )}
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className={`flex items-center ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHqUFx4yBWukSFU98PfOvQaSbIoVjgSz6tA&s"
                    alt="India"
                    className="block h-auto w-5 flex-shrink-0 "
                  />
                  <span className="ml-3 block text-sm font-medium">INDIA</span>
                </a>
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className="flex items-center">
                  <img
                    className="inline-block w-10 h-10 rounded-full border border-gray-200"
                    src="https://firebasestorage.googleapis.com/v0/b/amysho-694d8.appspot.com/o/download.jpeg?alt=media&token=0f06acc4-3dda-42c8-a83f-a24034f3e786"
                    alt="Dan_Abromov"
                  />
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <Link to={'/cart'} className={`group -m-2 flex items-center p-2 ${mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-400 transition-colors duration-300`}>
                  
              <IoMdCart size={25}/>
                  <span className={`ml-2 text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-black'}`}>{cartItems.length}</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>

              {/* Light/Dark mode */}
              <div className="ml-4 flow-root lg:ml-6">
                <button onClick={toggleMode} className={`group -m-2 flex items-center p-2 ${mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-400 transition-colors duration-300`}>
                  {mode === 'dark' ? <FiSun size={20} /> : <BsFillCloudSunFill size={20} />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
