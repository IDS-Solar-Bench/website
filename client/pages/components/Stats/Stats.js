import React from 'react';
import { useState } from 'react';
import style from './Stats.module.css'

const Stats = () => {

    const [poundsOfCO2, setPoundsOfCO2] = useState("...");
    const [wattsGenerated, setWattsGenerated] = useState("...");




    return <div>

        <div className={style.section}>
            <div className='customHeadingTextMainContent'>
               The bench has generated 
            </div>
            <div className='customHeadingTextMainContent'>
                <b>{wattsGenerated}</b> watts of electricity.
            </div>

        </div>

        <div className={style.section}>
            <div className='customHeadingTextMainContent'>
                which is equivalent to

            </div>
            <div className='customHeadingTextMainContent'>
                <b>{poundsOfCO2}</b> pounds of CO2 emissions
            </div>

        </div>

        
    </div>

}

export default Stats;