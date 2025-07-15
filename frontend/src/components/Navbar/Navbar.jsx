import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    useGSAP(() => {
      gsap.fromTo(
        '#navbar',
        { opacity: 1, y: -20 },
        { opacity: 1, y: 0, duration: 1 }
      );
    });

  return (
    <div id='navbar' className='shadow-xl bg-[#2f2c72] w-full h-20 flex items-center  px-8'>
      {/* Logo */}
      <img 
        src='/images/iiche logo.png' 
        alt='iiche logo' 
        className='w-12 h-12 cursor-pointer'
      
      />

      {/* Main Navigation */}
      <div className='flex ml-70  gap-28'>
        <button className=' hover:text-[#4a45ad] text-lg font-medium font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          Home
        </button>
        <button className='transition-color duration-500 hover:text-[#4a45ad] text-lg font-medium font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          About IIChE
        </button>
        <button className='transition-color duration-500 text-lg font-medium hover:text-[#4a45ad] font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          Events
        </button>
        <button className='transition-color duration-500 text-lg font-medium font-[sora] hover:text-[#4a45ad] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          Committees    
        </button>
        <button className='transition-color duration-500 hover:text-[#4a45ad] text-lg font-medium font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          Contact us
        </button>
      </div>

     
    </div>
  );
};

export default Navbar;