import React, { useState } from 'react';
import Slider from 'react-slick';
import './Testimonials.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials () {
    const [carouselSettings, setCarouselSettings] = useState({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });

    const [testimonial, setTestimonial] = useState(
        {author: "John Doe", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
    );

    let counter = [1,2,3,4,5];
    return (
        <div className="r__container carousel--container">
            <h2 className="title">Testimonials</h2>
            <Slider {...carouselSettings}>
            { counter.map((item, index) => {
                return <div key={ index }>
                            <p className="testimonial">"{ testimonial.content }"</p>
                            <p className="author">- { testimonial.author }</p>
                        </div>
            }) }
            </Slider>
        </div>
    )
}