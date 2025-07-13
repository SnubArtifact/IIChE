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
    <div id='navbar' className='shadow-xl bg-white w-full h-20 flex items-center justify-between px-8'>
      {/* Logo */}
      <img 
        src='/images/iiche logo.png' 
        alt='iiche logo' 
        className='w-12 h-12 cursor-pointer'
      />

      {/* Main Navigation */}
      <div className='flex gap-12'>
        <button className='text-lg font-bold font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          Home
        </button>
        <button className='text-lg font-bold font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          About IIChE
        </button>
        <button className='text-lg font-bold font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          Events
        </button>
        <button className='text-lg font-bold font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          Committees
        </button>
      </div>

      {/* Auth Buttons */}
      <div className='flex items-center gap-6'>
        <button className='text-lg font-bold font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
          Login
        </button>
        <div className='flex items-center gap-2'>
          <button className='text-lg font-bold font-[sora] text-[#302c72] cursor-pointer hover:text-[#1a1558]'>
            Register
          </button>
          <AccountCircleIcon 
            className='!text-[#302c72]' 
            sx={{ fontSize: 28 }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;