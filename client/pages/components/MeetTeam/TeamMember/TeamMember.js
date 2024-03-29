import React from 'react';
import style from './TeamMember.module.css';
import Image from 'next/image';

const TeamMember = ({src = "", name = "", role = ""}) => {

    return <div className={style.container} >

        <div className={style.photoContainer}>
            <Image style={{borderRadius: "50%"}} src={src} alt="Picture of the author" width={150} height={150} />
        </div>

        <div className={style.textContainer + " customHeadingTextMainContent"} >
            <div className={style.name}> {name} </div>
            <div className={style.role}> {role} </div>
        </div>
        
    </div>
}

export default TeamMember;