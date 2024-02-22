import React from 'react';
import Image from "next/image";
import style from "./SplashImage.module.css"

const SplashImage = () => {
  return (
    <div className={style.container}>
        <Image src="/main/temp.svg" alt="Photo of Bench" width={1920} height={1080} />
        <div className={style.splashText + ' customHeadingTextNav'}> Solar Bench Project</div>

    </div>
  );
};

export default SplashImage;
