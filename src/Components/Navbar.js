import React from 'react';
import Banner from './Banner';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <Banner />
    </>
  );
};

export default Navbar;
