"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({ items }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, items.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // const goToPrev = () => {
    //     setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    //     setIsAutoPlaying(false);
    //     setTimeout(() => setIsAutoPlaying(true), 10000);
    // };

    // const goToNext = () => {
    //     setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    //     setIsAutoPlaying(false);
    //     setTimeout(() => setIsAutoPlaying(true), 10000);
    // };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <Link
                            href={item.link}
                            className="block w-full"
                        >
                            <div
                                className="relative w-full"
                                style={{ paddingBottom: "38.6667%" }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority={index === 0}
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Arrows */}
            {/* <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
            >
                &lt;
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
            >
                &gt;
            </button> */}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
