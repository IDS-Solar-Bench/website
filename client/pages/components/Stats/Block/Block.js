import React from 'react';
import style from './Block.module.css'

const Block = () => {
    return (<div>


        <div className={style.introductionText + ' customHeadingTextMainContent'}>
            Over its lifetime, this bench has already saved
        </div>



        <div className={style.statsWrapper}>
            <div className={style.spacer} />
            <div className={style.statsText + ' customHeadingTextMainContent'}>
                10 pounds of CO2 emissions
            </div>
        </div>
    
    
    
    
    
    </div>);
};

export default Block;