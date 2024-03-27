import React from 'react';
import IconStat from './IconStat/IconStat';
import style from './IconStatComponent.module.css';

const IconStatComponent = () => {



    return <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <div className={style.container}>
            <IconStat iconName="sunny" text="In the past day, the bench has generated 700 kilowatts of energy." />
            <IconStat iconName="power" text="In the past week, users have enjoyed 200 kilowatts of energy carbon-free" />
            <IconStat iconName="battery_horiz_075" text="The battery is currently 85% percent full." />
        </div>

    </div>
}

export default IconStatComponent