import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import coffeeLogo from '../assets/img/coffee-logo-640.png';
import weedLogo from '../assets/img/weed-logo-640.png';
import coffeeShop from '../assets/img/coffee-img-640.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselCustom.css';

export function CarouselCustom() {
    return (
        <Carousel width={640} infiniteLoop showArrows={false} showThumbs={false} stopOnHover={false} autoPlay>
            <div>
                <img alt="" src={coffeeLogo} />
            </div>
            <div>
                <img alt="" src={coffeeShop} />
            </div>
            <div>
                <img alt="" src={weedLogo} />
            </div>
        </Carousel>
    );
}