import React from 'react';
import Image from "next/image";
import style from "./SplashImage.module.css"

const SplashImage = () => {
  return (
    <div className={style.container}>

    <div className={style.wrapper}>
        <Image src="/main/temp.svg" alt="Photo of Bench" width={1920} height={1080} />
        <div className={style.splashText + ' customHeadingText'}> Solar Bench Project</div>
    </div>
    </div>
  );
};

export default SplashImage;
