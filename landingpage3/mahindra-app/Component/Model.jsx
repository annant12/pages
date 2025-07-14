'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';


const CarModelSlider = ({ models }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleSlides = 3;

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % models.length);
    };

    const getVisibleSlides = () => {
        let slides = [];
        for (let i = 0; i < visibleSlides; i++) {
            slides.push(models[(currentIndex + i) % models.length]);
        }
        return slides;
    };

    // Get center model
    const centerModel = models[(currentIndex + 1) % models.length];

    return (
        <div className="w-full max-w-5xl mx-auto px-4 relative mt-5">
            <h1 className="text-center mb-8 text-3xl font-bold text-gray-800">Models</h1>

            {/* Carousel */}
            <div className="flex justify-center items-center gap-6 overflow-hidden relative">
                <button
                    onClick={goToPrev}
                    className=""
                    aria-label="Previous"
                >
                    <ChevronLeft />
                </button>
                {getVisibleSlides().map((model, index) => (
                    <div
                        key={index}
                        className={`relative transition-all duration-500 ease-in-out flex flex-col items-center
                            ${index === 1
                                ? 'scale-125 brightness-100' // Center image
                                : 'scale-95 opacity-80'
                            }`}
                    >
                        <a
                            href={model.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative"
                        >
                            <div className="w-52 h-44 sm:w-64 sm:h-56 relative">
                                <Image
                                    src={model.imageSrc}
                                    alt={model.imageAlt || model.name}
                                    fill
                                    className="object-contain object-center transition-transform duration-500"
                                    sizes="(max-width: 768px) 70vw, 30vw"
                                />
                            </div>
                        </a>
                        {/* Model name below image */}
                        <p
                            className={`relative z-10 transition-all duration-500
                                ${index === 1
                                    ? 'mt-5 text-lg sm:text-xl font-bold text-red-600 ' // Center image name
                                    : 'mt-3 text-base sm:text-lg font-medium text-gray-500 hover:text-red-600'
                                }`}
                        >
                            {model.name}
                        </p>
                    </div>
                ))}
                <button
                    onClick={goToNext}
                    className=""
                    aria-label="Next"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Center Model Name Below Carousel */}
            <div className="text-center mt-1 mb-3">
                <p className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-red-600">
                    {centerModel.name}
                </p>

            </div>

            {/* Navigation Buttons */}


        </div>
    );
};

export default CarModelSlider;
