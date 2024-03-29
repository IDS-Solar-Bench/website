import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const PhotoCarousel = () => {

    return (
        <Carousel showThumbs={false}>
            <div>
                <Image src="/main/mainSplashImage.png" width={500} height={500} />
            </div>
            <div>
                <Image src="/main/mainSplashImage.png" width={500} height={500} />
            </div>
            <div>
                <Image src="/main/mainSplashImage.png" width={500} height={500} />
            </div>
        </Carousel>
    );
};

export default PhotoCarousel;