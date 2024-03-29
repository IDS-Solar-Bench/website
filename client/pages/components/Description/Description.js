import React from 'react';
import style from './Description.module.css';

const Description = () => {

    return <div className={style.container}>

        <div className={style.textContainer}>
            <div className={style.heading + " customHeadingTextMainContent"}>
                The Solar Bench
            </div>
            <div className={style.textDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>

        <div className={style.photoContainer}>
            
        </div>
    </div>
}

export default Description;