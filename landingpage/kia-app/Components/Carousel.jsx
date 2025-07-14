"use client";

import React, { useEffect, useState } from "react";

const Carousel = () => {
    const banners = [
        "https://preprod.myspotlight.co/Template3/img/Carens_Clavis/Banner.jpg",
        "https://preprod.myspotlight.co/Template3/img/Seltos/Desktop-banner-april.jpg",
        "https://preprod.myspotlight.co/Template3/img/Syros/Desktop-Banner-new.png",
        "https://preprod.myspotlight.co/Template3/img/Sonet/Desktop-Banner.png",
        "https://preprod.myspotlight.co/Template3/img/Carens/Desktop-Banner.png",
        "https://preprod.myspotlight.co/Template3/img/KIA_EV6/Desktop-Banner-New.png",
        "https://preprod.myspotlight.co/Template3/img/CARNIVAL/Desktop-Banner.png",
        "https://preprod.myspotlight.co/Template3/img/KIA_EV9/Desktop-Banner.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative"
                    >
                        <img
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
