"use client"; // Required for react-slick in Next.js 13+

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureSlider = ({ features }) => {
    const [activeTab, setActiveTab] = useState(0);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 at a time
        slidesToScroll: 1, // Scroll 1 at a time
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // For tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // For mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-10 sm:py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-10">
                    Features
                </h2>

                {/* Tab Navigation (if multiple feature sets) */}
                {features.length > 1 && (
                    <div className="flex justify-center flex-wrap gap-2 mb-6 sm:mb-8">
                        {features.map((featureSet, index) => (
                            <button
                                key={index}
                                className={`px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base border transition-colors ${activeTab === index
                                    ? "bg-black text-white"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {featureSet.title}
                            </button>
                        ))}
                    </div>
                )}

                {/* Feature Slider */}
                <div className="max-w-6xl mx-auto">
                    <Slider {...sliderSettings}>
                        {features[activeTab].items.map((feature, idx) => (
                            <FeatureCard key={idx} {...feature} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ image, alt, description }) => {
    return (
        <div className="px-2 sm:px-3">
            <div className="bg-white p-3 sm:p-4 shadow-md h-full border">
                <img
                    src={image}
                    alt={alt || "feature-image"}
                    className="w-full h-44 sm:h-52 object-cover mb-3 sm:mb-4"
                />
                <p className="text-gray-600 text-sm sm:text-base">{description}</p>
            </div>
        </div>
    );
};

export default FeatureSlider;
