import React from 'react';
import style from './Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={style.nav}>
        <div className={style.spacerDiv}></div>
        <div className='customHeadingTextNav'> IDS</div>
        <a href="https://www.idsubco.com/"> 
          <div className={style.image}>
            <Image src="/nav/navLogo.png" alt="IDS" width={3760} height={1928} />
          </div>
        </a>

    </div>
  );
};

export default Navbar;
