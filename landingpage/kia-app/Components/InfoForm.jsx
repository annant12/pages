"use client";

import React, { useState } from "react";

const InfoForm = () => {
    const [formData, setFormData] = useState({
        salutation: "Mr.",
        firstName: "",
        lastName: "",
        email: "",
        model: "",
        phone: "",
        userOtp: "",
        acceptTerms: true,
        getVoucher: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="max-w-full mx-auto bg-gray-100 p-4 sm:p-6">
            <h2 className="text-xl font-bold text-center mb-4 sm:mb-6 border-b pb-2">Enquire Now</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex gap-2 w-full">
                        <select
                            name="salutation"
                            value={formData.salutation}
                            onChange={handleChange}
                            className="px-2 py-2 w-[80px] flex-shrink-0 text-gray-700 outline-none bg-white border"
                        >
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Miss">Miss</option>
                        </select>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name*"
                            className="px-3 py-2 flex-grow text-gray-700 placeholder-gray-500 outline-none bg-white border"
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name*"
                        className="px-3 py-2 w-full text-gray-700 placeholder-gray-500 outline-none bg-white border"
                        required
                    />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email*"
                        className="px-3 py-2 w-full text-gray-700 placeholder-gray-500 outline-none bg-white border"
                        required
                    />

                    <select
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="px-3 py-2 w-full text-gray-700 outline-none bg-white border"
                        required
                    >
                        <option value="">Select A Model</option>
                        <option value="CARENS CLAVIS">CARENS CLAVIS</option>
                        <option value="SELTOS">SELTOS</option>
                        <option value="SYROS">SYROS</option>
                        <option value="SONET">SONET</option>
                        <option value="CARENS">CARENS</option>
                        <option value="EV6">EV6</option>
                        <option value="CARNIVAL">CARNIVAL</option>
                        <option value="EV9">EV9</option>
                        <option value="CARENS CLAVIS EV">CARENS CLAVIS EV</option>
                    </select>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Mobile + Send OTP */}
                    <div className="grid grid-cols-3 gap-2 w-full">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Mobile*"
                            className="col-span-2 px-3 py-2 text-gray-700 placeholder-gray-500 outline-none bg-white border"
                            maxLength={10}
                            required
                        />
                        <button
                            type="button"
                            className="bg-black text-white px-3 py-2 outline-none border"
                        >
                            Send OTP
                        </button>
                    </div>

                    {/* OTP + Verify */}
                    <div className="grid grid-cols-3 gap-2 w-full">
                        <input
                            type="text"
                            name="userOtp"
                            value={formData.userOtp}
                            onChange={handleChange}
                            placeholder="Mobile OTP"
                            className="col-span-2 px-3 py-2 text-gray-700 placeholder-gray-500 outline-none bg-white border"
                            maxLength={6}
                            inputMode="numeric"
                        />
                        <button
                            type="button"
                            className="bg-gray-600 text-white px-3 py-2 outline-none border"
                        >
                            Verify
                        </button>
                    </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            className="accent-black"
                            required
                        />
                        <span className="text-sm text-gray-700">
                            I accept the{" "}
                            <a
                                href="https://www.asb-kia-sector-61-gurugram.com/termAndCondition/HR407"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Terms & Conditions
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://www.asb-kia-sector-61-gurugram.com/privacyPolicy/HR407"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Privacy Policy
                            </a>
                        </span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="getVoucher"
                            checked={formData.getVoucher}
                            onChange={handleChange}
                            className="accent-black"
                        />
                        <span className="text-sm text-gray-700">Get the brochure</span>
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full sm:w-32 bg-black text-white py-3 hover:bg-gray-800 outline-none border"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default InfoForm;
