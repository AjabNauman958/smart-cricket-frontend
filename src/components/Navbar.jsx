import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'; // Import FaBars 

import '../components/css/navbar.css';
const Navbar = () => {
    let Links = [
        {
            name: 'Home', link: '/'
        },
        {
            name: 'About Us', link: '/about'
        },
        {
            name: 'Tournament', link: '/tournament'
        },
        {
            name: 'Matches', link: '/matches'
        },
        {
            name: 'Ranking', link: '/'
        },
    ]


    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center ' style={{backgroundColor:'#00A09A'}}>
                {/* logo here */}
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <span className='font-bold text-yellow-300'> SmartCricket</span>
                </div>

                {/* menu icons  */}
                <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7 cursor-pointer absolute right-8 top-6 md:hidden'>
                    {
                        isOpen ? <FaTimes /> : <FaBars />
                    }
                </div>


                {/* nav links here  */}
                <ul className={`md:flex pl-9 md:pl-0 md:items-center justify-center md:static md:pb-0 pb-12 absolute md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500  ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}` } style={{backgroundColor:'#00A09A'}}>
                    {
                        Links.map(link => (
                            <li className='font-semibold my-7 md:my-0 md:ml-8 border1' key={link.name}>
                                <a href={link.link}>{link.name}</a>
   
                         </li>
                        ))
                    }
                    <li className='font-semibold my-7 md:my-0 md:ml-8 '>
                        <Link to="/signup" className='text-white bg-yellow-400 hover:bg-yellow-300 py-3 px-3 rounded-lg'>Sign Up</Link>
                    </li>
                </ul>


            </div>
        </div>
    )
}

export default Navbar
