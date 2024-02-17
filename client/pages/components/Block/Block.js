import React from 'react';
import style from './Block.module.css';
import Graph from '../Graph'

const Block = () => {

    return <div className={style.foldBlock}>

        <Graph />
        <h2> Hello World! </h2>
    </div>

}

export default Block;