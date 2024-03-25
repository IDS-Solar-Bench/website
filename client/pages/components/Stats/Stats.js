import React from 'react';
import { useState } from 'react';
import style from './Stats.module.css'
import Block from './Block/Block';

const Stats = ({wattage = 100, pounds = 100}) => {

    const [poundsOfCO2, setPoundsOfCO2] = useState(pounds);
    const [wattsGenerated, setWattsGenerated] = useState(wattage);

    /*
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

    */

    return <div>
        <Block introText="Over its lifetime, this bench has already saved" stat={poundsOfCO2} statText="pounds of CO2 emissions" />
        <Block introText='which is equivalent to' stat={wattsGenerated} statText='watts of electricity' />
    </div>

}

export default Stats;