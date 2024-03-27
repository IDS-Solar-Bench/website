import React from 'react';
import style from './IconStat.module.css'

const IconStat = ({iconName = "", text = " ... "}) => {

    return <div className={style.container}>

        <div className={style.iconContainer}>
            <span class="material-symbols-outlined" style={{color: 'white', fontSize: '70px'}}> {iconName} </span>
        </div>
        <div className={style.iconSeparator} />
        <div className={style.text + ' customHeadingTextMainContent'}> {text} </div>


    </div>  

}

export default IconStat