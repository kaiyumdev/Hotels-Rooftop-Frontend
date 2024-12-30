import React from 'react';
import { NavLink } from "react-router-dom";

const navLists = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Contact Us", path: "/contact-us" },
]

const Navbar = () => {

    return (
        <header className='bg-white py-6 border'>
            <nav className='container mx-auto flex justify-between px-5'>
                <a href="">
                    <img src="/logo.png" alt="" className='h-12' />
                </a>
                <ul className='sm:flex hidden items-center gap-8'>
                    {
                        navLists.map((item, index) => (
                            <li>
                                <NavLink to={`${item.path}`} className={({ isActive }) =>
                                    isActive
                                        ? "active"
                                        : ""
                                }>{item.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;