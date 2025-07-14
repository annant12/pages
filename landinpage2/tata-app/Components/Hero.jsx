"use client";

import { useState } from "react";
import { CarFront, User, Mail, Phone } from "lucide-react";

const Hero = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        model: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // API call logic can go here
    };

    return (
        //asdasdasd
        <section
            className="relative flex items-center justify-center min-h-[500px] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://preprod.myspotlight.co/img/uploadimages/image/722cf2e1-efc6-4890-8eb8-6c72ea153327/Range_Banner.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6">
                {/* Form Card */}
                <div className="bg-white rounded-xl shadow-lg p-5 md:w-1/3 w-full">
                    <h4 className="text-xm font-bold mb-4">
                        Tata Motors Connecting Aspirations
                    </h4>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Name */}
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 rounded-lg pl-10 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 text-xs"
                                required
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                <User size={18} />
                            </span>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 rounded-lg pl-10 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 text-xs"
                                required
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                <Mail size={18} />
                            </span>
                        </div>

                        {/* Mobile */}
                        <div className="relative">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Mobile*"
                                value={formData.phone}
                                onChange={handleChange}
                                maxLength="10"
                                className="w-full p-2 rounded-lg pl-10 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 text-xs"
                                required
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                <Phone size={18} />
                            </span>
                        </div>

                        {/* Model */}
                        <div className="relative">
                            <select
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                className="w-full p-2 rounded-lg pl-10 bg-white border border-gray-200 text-gray-500 focus:outline-none focus:border-gray-400 text-xs"
                                required
                            >
                                <option value="">Model Interested in*</option>
                                <option value="Altroz">Altroz</option>
                                <option value="Nexon">Nexon</option>
                                <option value="Harrier">Harrier</option>
                                <option value="Safari">Safari</option>
                            </select>
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                <CarFront size={18} />
                            </span>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition text-xs"
                        >
                            Request A Test Drive
                        </button>
                    </form>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
            </div>
        </section>
    );
};

export default Hero;
