'use client';

import React, { useState } from 'react';

const CarEnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        carModel: 'Thar ROXX',
        acceptTerms: false,
    });

    const carModels = [
        'Thar ROXX',
        'Bolero Neo',
        'XUV 3XO',
        'Scorpio N',
        'XUV700',
        'XUV400',
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.acceptTerms) {
            alert('Please accept the terms & conditions.');
            return;
        }
        console.log('Form Data Submitted: ', formData);
        // API call goes here
    };

    return (
        <>
            {/* Header Line with Text Below */}
            <div className="relative">
                <div className="h-1 bg-gray-700"></div>
                <div className="left-1">
                    <span className="inline-block bg-gray-700 text-white px-2 py-1">
                        Request a Test Drive
                    </span>
                </div>
            </div>


            <div className="w-full max-w-md mx-auto mt-1">
                {/* Header Bar */}


                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-4 rounded-b-md"
                >
                    {/* Name */}
                    <div className="mb-1">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name*"
                            required
                            className="w-full text-sm border border-gray-300 rounded px-1 py-1  focus:outline-none focus:ring focus:ring-red-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            required
                            className="w-full text-sm border border-gray-300 rounded px-1 py-1  focus:outline-none focus:ring focus:ring-red-400"
                        />
                    </div>

                    {/* Mobile */}
                    <div className="mb-3">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Mobile
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Mobile*"
                            required
                            className="w-full text-sm border border-gray-300 rounded px-1 py-1 focus:outline-none focus:ring focus:ring-red-400"
                        />
                    </div>

                    {/* Car Model */}
                    <div className="mb-3">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Car Model
                        </label>
                        <select
                            name="carModel"
                            value={formData.carModel}
                            onChange={handleChange}
                            className="w-full text-sm border border-gray-300 rounded px-1 py-1  focus:outline-none focus:ring focus:ring-red-400"
                        >
                            {carModels.map((model) => (
                                <option key={model} value={model}>
                                    {model}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            className="accent-red-600 w-4 h-4 mr-2"
                            required
                        />
                        <span className="text-sm">
                            * I accept the{' '}
                            <a
                                href="#"
                                className="text-red-600 font-medium underline"
                            >
                                terms & conditions
                            </a>
                        </span>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-xl hover:bg-red-700 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CarEnquiryForm;
