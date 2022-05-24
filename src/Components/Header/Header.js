import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
   const [toggleMenu, setToggleMenu] = useState(false);

   const menuItems = (
      <>
         <li className='flex items-center'>
            <Link to="/">About</Link>
         </li>
         <li className='flex items-center'>
            <Link to="/">Blogs</Link>
         </li>
         <li className='flex items-center'>
            <Link to="/">Manage Products</Link>
         </li>
         <li className='flex items-center'>
            <button className="btn btn-primary text-base-100">Login</button>
         </li>
         <li className='flex items-center'>
            <button className="btn btn-primary text-base-100">Logout</button>
         </li>
         <li className='flex items-center'>
            <Link to="/" className="btn btn-secondary">
               Arfan Khan
            </Link>
         </li>
         <li className='flex items-center'>
            <div class="avatar">
               <div class="w-10 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=47449" />
               </div>
            </div>
         </li>
         <li className='flex items-center'></li>
      </>
   );

   return (
      <header className='bg-accent'>
         <div className="navbar px-12">
            {/* DropDown Menu */}
            <div className="dropdown">
               <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </label>
               <ul tabIndex="0" className="my-menu menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menuItems}
               </ul>
            </div>
            {/* Main Menu */}
            <div className="flex-1">
               <Link className="logo" to="/">
                  Electro<span className="text-primary">.Pro</span>
               </Link>
            </div>
            <div className="flex-none hidden lg:flex">
               <ul className="my-menu menu menu-horizontal p-0">{menuItems}</ul>
            </div>
         </div>
      </header>

      //Custom Header
   );
};

export default Header;