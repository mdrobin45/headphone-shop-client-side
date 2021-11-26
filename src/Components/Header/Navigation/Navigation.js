import React,{Fragment, useEffect, useState} from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon,ShoppingBagIcon } from '@heroicons/react/outline';
import { Link, NavLink } from 'react-router-dom';
import useAPI from '../../../Hooks/useAPI';
import {FaUserCircle} from 'react-icons/fa'
import Cart from '../../Pages/Cart/Cart';
import SingleHeadPhone from '../../Pages/Home/HomeShop/SingleHeadPhone/SingleHeadPhone';
import useHook from '../../../Hooks/useHook';


const navigation = [
  { name: 'Home', to: '/home', current: true },
  { name: 'Shop', to: '/shop', current: false },
];

function classNames(...classes)
{
  return classes.filter(Boolean).join(' ');
}
const Navigation = () =>
{
  const [open, setOpen] = useState(false)
  const { user, logOut } = useAPI().auth;
  const [singleUserInfo, setSingleUserInfo] = useState({});
  const [cartItem, setCartItem] = useState([]);
  // const { updateUI, setUpdateUI } = useHook();
  
 /*  useEffect(()=>{
    console.log(setUpdateUI(updateUI + 1));
  },[setUpdateUI,updateUI]) */


  // Get Single User information
  useEffect(() =>
  {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setSingleUserInfo(data));
  }, [user?.email])


  // Get cart product details
  useEffect(() =>
  {
    fetch(`http://localhost:5000/cart/${user?.email}`)
      .then(res => res.json())
      .then(data => setCartItem(data));
  }, [user?.email])

  return (  
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <h2 className='text-3xl font-primary text-white'>Robin Store</h2>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Cart */}
                {
                  user?.email?<div className="ml-4 flow-root lg:ml-6">
                  <button onClick={()=>setOpen(true)} className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-white">{cartItem.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>:''
                }
                
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  
                  {
                    user?.email?<button className='text-white bg-orange py-2 px-3 rounded font-primary' onClick={logOut}>LogOut</button>:<Link to='/login' className='text-white bg-orange py-2 px-3 rounded font-primary'>Login</Link>
                  }

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <FaUserCircle className='text-white text-4xl'/>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <h2 className='py-3 text-lg border-b px-3'>{singleUserInfo?.email?singleUserInfo?.name:'Name not available'}</h2>
                          )}
                        </Menu.Item>
                        {
                          user?.email?<Menu.Item>
                          {({ active }) => (
                            <Link className='py-3 text-lg border-b px-3' to='/dashboard'>Dashboard</Link>
                          )}
                        </Menu.Item>:''
                        }
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Cart open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Navigation;