'use client';
import { useState } from 'react';
import Image from 'next/image';

const KiaCarShowcase = () => {
    const [activeTab, setActiveTab] = useState('tab-7');
    const [activeFeatureTab, setActiveFeatureTab] = useState('slider-tab-7');

    const cars = [
        {
            id: 'tab-2',
            name: 'CARENS CLAVIS',
            price: '₹ 11 49 900*',
            tagline: 'For Epic Journeys.',
            image: 'https://preprod.myspotlight.co/Template3/img/Carens_Clavis/Thumbnail.png',
        },
        {
            id: 'tab-3',
            name: 'SELTOS',
            price: '₹ 11 18 900*',
            tagline: 'The Badass. Reborn.',
            image: 'https://preprod.myspotlight.co/Template3/img/Seltos/Featured-Product.png',
        },
        {
            id: 'tab-4',
            name: 'SYROS',
            price: '₹ 9 49 900*',
            tagline: 'Evolved by the future.',
            image: 'https://preprod.myspotlight.co/Template3/img/Syros/Featured-Product.png',
        },
        {
            id: 'tab-5',
            name: 'SONET',
            price: '₹ 7 99 900*',
            tagline: 'The Wild. Reborn.',
            image: 'https://preprod.myspotlight.co/Template3/img/Sonet/Featured-Product.png',
        },
        {
            id: 'tab-6',
            name: 'CARENS',
            price: '₹ 11 40 900*',
            tagline: 'From a different world.',
            image: 'https://preprod.myspotlight.co/Template3/img/Carens/Featured-Product.png',
        },
        {
            id: 'tab-7',
            name: 'EV6',
            price: '₹ 65 96 638*',
            tagline: 'The Electric Superstar.',
            image: 'https://preprod.myspotlight.co/Template3/img/KIA_EV6/Featured-Product-New.png',
        },
        {
            id: 'tab-8',
            name: 'CARNIVAL LIMOUSINE',
            price: '₹ 63 91 000*',
            tagline: 'Your own luxury liner.',
            image: 'https://preprod.myspotlight.co/Template3/img/CARNIVAL/Featured-Product.png',
        },
        {
            id: 'tab-9',
            name: 'EV9',
            price: '₹ 1 29 90 000*',
            tagline: "The World's Most Inspiring Electric. Ever.",
            image: 'https://preprod.myspotlight.co/Template3/img/KIA_EV9/Featured-Product.png',
        },
    ];

    const features = {
        'tab-2': [
            { image: 'https://preprod.myspotlight.co/Template3/img/Carens_Clavis/Feature_1.jpg', text: 'Bold, aggressive, and unmistakably Kia...' },
            { image: 'https://preprod.myspotlight.co/Template3/img/Carens_Clavis/Feature_3.jpg', text: 'Let in the sky with a wide dual-pane...' },
            { image: 'https://preprod.myspotlight.co/Template3/img/Carens_Clavis/Feature_5.jpg', text: 'Adventure-ready design meets rugged elegance...' }
        ],
        'tab-3': [
            { image: 'https://preprod.myspotlight.co/Template3/img/Seltos/Feature-1.jpg', text: 'Enjoy best-in-class power, superior performance...' },
            { image: 'https://preprod.myspotlight.co/Template3/img/Seltos/Feature-2.png', text: 'A bold new design with more style and attitude...' },
            { image: 'https://preprod.myspotlight.co/Template3/img/Seltos/Feature-10.jpg', text: 'Gives you a mesmerizing view of the world above.' }
        ],
        'tab-7': [
            { image: 'https://preprod.myspotlight.co/Template3/img/KIA_EV6/Feature-2.jpg', text: 'Crafted for a greener tomorrow...' },
            { image: 'https://preprod.myspotlight.co/Template3/img/KIA_EV6/Feature-1.jpg', text: 'Enhance convenience with a simple pull...' },
            { image: 'https://preprod.myspotlight.co/Template3/img/KIA_EV6/Feature-3.jpg', text: 'With a wide, panoramic sunroof...' }
        ]
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setActiveFeatureTab(`slider-tab-${tabId.split('-')[1]}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Cars Section */}
            <section className="mb-14">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Explore Our Cars
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {cars.map((car) => (
                        <button
                            key={car.id}
                            onClick={() => handleTabChange(car.id)}
                            className={`px-5 py-2 text-sm font-medium transition ${activeTab === car.id
                                ? 'bg-black text-white'
                                : ' text-black hover:bg-black hover:text-white'
                                }`}
                        >
                            {car.name}
                        </button>
                    ))}
                </div>

                {/* Car Details */}
                {cars.map((car) => (
                    <div
                        key={car.id}
                        className={`${activeTab === car.id ? 'flex' : 'hidden'
                            } flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden`}
                    >
                        <div className="md:w-1/2 p-4 flex justify-center items-center bg-gray-50">
                            <Image
                                src={car.image}
                                alt={car.name}
                                width={500}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">{car.name}</h3>
                            <p className="text-lg text-gray-600 mb-2">
                                Price starts at <strong>{car.price}</strong>
                            </p>
                            <p className="text-gray-500 italic mb-4">{car.tagline}</p>
                            <p className="text-xs text-gray-400">
                                *T&amp;C apply. Ex-showroom price all India
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Features Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Features
                </h2>
                {Object.entries(features).map(([tabId, tabFeatures]) => (
                    <div
                        key={tabId}
                        className={`${activeFeatureTab === `slider-tab-${tabId.split('-')[1]}`
                            ? 'block'
                            : 'hidden'
                            }`}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-10">
                            {tabFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="h-52 relative">
                                        <Image
                                            src={feature.image}
                                            alt={`Feature ${index + 1}`}
                                            fill
                                            className="object-fit"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="text-sm text-gray-700">{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default KiaCarShowcase;
