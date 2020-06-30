import React, { Fragment, useState } from 'react';
import Slider from 'react-slick';
import './Testimonials.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials () {
    const [carouselSettings, setCarouselSettings] = useState({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    let arr = [1,2,3,4,5];
    return (
        <div className="r__container carousel--container">
            <h2 className="title">Testimonials</h2>
            <Slider {...carouselSettings}>
            { arr.map((item, index) => {
                return <div>
                    <h1>Test { index }</h1>
                </div>
            }) }
            </Slider>
        </div>
    )
}