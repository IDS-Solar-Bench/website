import React from 'react';
import { useState } from 'react';
import style from './Stats.module.css'

const Stats = () => {

    const [poundsOfCO2, setPoundsOfCO2] = useState("...");
    const [wattsGenerated, setWattsGenerated] = useState("...");

    return <div className={style.container}>
        <div className={style.section}>
            <div className='customHeadingTextMainContent'>
            The bench has generated 
            </div>
            <pre className={style.line + ' customHeadingTextMainContent'}>  
                <div className={style.numberStat}> {wattsGenerated}</div> watts of electricity.
            </pre>

        </div>

        <div className={style.section}>
            <div className='customHeadingTextMainContent'>
                which is equivalent to
            </div>
            <pre className={style.line + ' customHeadingTextMainContent'} >
                <div className={style.numberStat}>{poundsOfCO2}</div> pounds of CO2 emissions.
            </pre>

        </div>
    </div>

}

export default Stats;