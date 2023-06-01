import React from 'react';
import Image from 'next/image';

type NavbarProps = {
  categories: string[];
};

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-200">
      {/* Logo */}
      <div className="logo">
        <Image src="/dinemarket.webp" width={100} height={100} alt="Logo" />
      </div>

      {/* Navigation Menu */}
      <ul className="flex space-x-4">
        <li>
          <button className="nav-button">Men 1 2 3</button>
        </li>
        <li>
          <button className="nav-button">Women</button>
        </li>
        <li>
          <button className="nav-button">Children</button>
        </li>
        <li>
          <button className="nav-button">Accessories</button>
        </li>
      </ul>

      {/* Search Icon */}
      <div className="search-icon">🔍</div>
    </nav>
  );
};

export default Navbar;


