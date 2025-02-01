import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul style={{ padding: '30px' }} className="bg-black text-rose-400 flex justify-between">
        <li>LOGO</li>
        <li className="hover:underline cursor-pointer transition duration-300 relative">
          <Link to="/" className="text-rose-400">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-rose-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li className="hover:underline cursor-pointer transition duration-300 relative">
          <Link to="/popular" className="text-rose-400">
            Popular
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-rose-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li style={{ paddingRight: '60px' }} className="hover:underline cursor-pointer transition duration-300 relative">
          <Link to="/about" className="text-rose-400">
            About
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-rose-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;