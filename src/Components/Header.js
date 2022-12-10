import React from 'react';
import logo from './../img/MuzicLogo.png'
const Header = () => {
    return (
        <div className='bg-[#232A4E] flex items-center justify-around pt-5'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className='flex items-center gap-12'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Preformer</li>
                    <li>Event Schedule</li>
                    <li>Blog</li>
            </ul>
            
            <div>
                <button className='bg-[#081730] px-4 py-2 rounded-lg mr-2'>Log in</button>
                <button className='bg-[#232A4E] px-4 py-2 rounded-lg border'>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;