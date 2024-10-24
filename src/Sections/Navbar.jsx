import React, { useState } from 'react';
import { navLinks } from '/src/constants/index.js';
import close from '../public/assets/close.svg'
import open from '../public/assets/menu.svg'

const NavItems = ({ onClick = ()=>{}}) => (
    <ul className="nav-ul">
        {navLinks.map((item ) => (
            <li  key= {item.id} className='nav-li' >
                <a href={item.href}  
                 className="nav-li_a"
                onClick = {onClick}
                > 
                {item.name} 
                </a>
            </li>
        ))} 
    </ul>
)






const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);


  return (

    <header  className ='fixed left-0 right-0 top-0 z-50 bg-black/50 '>
        
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mx-auto py-5 c-space ">
                    <a href ="/" className= 'text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        Chien
                    </a>

                    <button
                    onClick = {toggleMenu}
                    className=' text-neutral-400 hover:text-white focus:outline-none sm:hidden flex ' aria-label ="Toggle"
                    >

                        <img src={ isOpen ? close: open} className='h-6 w-6 '>
                        </img>
                    </button>

                    <nav className='sm:flex hidden'>
                        <NavItems/>
                    </nav>
                </div>

        </div>

        <div className={`nav-sidebar ${isOpen ? ' max-h-screen' : 'max-h-0'}`}>
            <nav className='p-5'>
                <NavItems onClick ={closeMenu}/>
            </nav>
        </div>
    </header>
  );
};

export default Navbar
