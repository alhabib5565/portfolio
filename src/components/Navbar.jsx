import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const naviItems = [
        { id: 1, name: 'home' },
        { id: 2, name: 'about' },
        { id: 3, name: 'projects' },
        { id: 4, name: 'contact' },
        { id: 5, name: 'experience' }
    ]
    return (
        <div className='bg-cyan-950 fixed h-20 w-full border-b-[1px] border-gray-300 shadow-xl'>
            <div className='max-w-[1440px] mx-auto h-full flex justify-between items-center px-4 md-px-8 lg:px-14 text-white'>
                <div>
                    <h2 className='text-4xl font-signature font-bold'>Habib</h2>
                </div>

                <ul className='hidden md:flex gap-7'>
                    {
                        naviItems.map(navItem => <li className='text-gray-300 cursor-pointer font-medium uppercase hover:text-white hover:scale-105 duration-300' key={navItem.id}>
                            <Link to={navItem.name} smooth duration={500}>
                                {navItem.name}
                            </Link>

                        </li>)
                    }
                </ul>

                <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer  text-gray-300 md:hidden">
                    {
                        menuOpen ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
                    }
                </div>

                {
                    menuOpen && <ul className='absolute top-20 box-border bg-cyan-950  w-[50vw] rounded-xl py-6 right-0'>
                        {
                            naviItems.map(navItem => <li className=' text-gray-300 cursor-pointer font-medium uppercase px-6 py-3 hover:bg-cyan-800  duration-300' key={navItem.id}>{navItem.name}</li>)
                        }
                    </ul>
                }

            </div>
        </div>
    );
};

export default Navbar;