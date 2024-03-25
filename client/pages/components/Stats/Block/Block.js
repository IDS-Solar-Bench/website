import React from 'react';
import style from './Block.module.css'

const Block = ({introText = " ... ", stat = 0, statText = " ... "}) => {
    return (<div>


        <div className={style.introductionText + ' customHeadingTextMainContent'}>
            {introText}
        </div>



        <div className={style.statsWrapper}>
            <div className={style.spacer} />
            <div className={style.statsText + ' customHeadingTextMainContent'}>
                {stat + ' ' + statText}
            </div>
        </div>
    
    
    
    
    
    </div>);
};

export default Block;