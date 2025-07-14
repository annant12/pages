'use client';
import React from 'react';

const AboutDealer = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    About Dealer
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to{" "}
                    <span className="text-gray-500 font-medium">ASB Automobiles</span>, your trusted Kia dealership in{" "}
                    <span className="text-gray-500 font-medium">Gurgaon</span>, committed to quality, integrity, and customer satisfaction. Whether you’re exploring our wide range of Kia vehicles or seeking flexible financing options, our knowledgeable team is here to assist you every step of the way. We pride ourselves on creating a welcoming environment where you’re valued. Our experienced staff is ready to help you find the perfect vehicle that fits your lifestyle and budget.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    We also offer comprehensive test drives so you can experience each model firsthand. Plus, our dedicated service department is here to keep your Kia running smoothly long after your purchase.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Experience the difference with a dealership that truly cares about your automotive needs—your journey starts here! We look forward to serving you.
                </p>
            </div>
        </section>
    );
};

export default AboutDealer;
