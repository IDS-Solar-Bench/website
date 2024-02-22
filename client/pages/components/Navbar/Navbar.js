import React from 'react';
import style from './Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={style.nav}>
        <div></div>
        <div className='customHeadingTextNav'> IDS</div>
        <div className={style.image}>
          <Image src="/nav/navLogo.png" alt="IDS" width={3760} height={1928} />
        </div>

    </div>
  );
};

export default Navbar;
