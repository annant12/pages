"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

const Navbar = () => {
    return (
        <header className="w-full bg-[#231F20] text-white">
            <div className="flex justify-between items-center px-1 py-2">
                {/* Left: Mahindra Logo */}
                <div className="flex">
                    <Link
                        href="/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon"
                        className="flex items-center"
                    >
                        <img
                            src="https://res.cloudinary.com/onlinesales/image/upload/v1675241913/product/hyperlocal/mahindra/mahindra-website-logo.png"
                            alt="Mahindra Logo"
                            className="h-8 sm:h-10"
                        />
                    </Link>
                </div>

                {/* Right: Dealer Info & Contact */}
                <div className="flex flex-col text-right pr-2">
                    {/* Dealer name */}
                    <div className="font-medium text-md">
                        Mahindra Koncept Automobiles - SUV Showroom
                    </div>

                    <div className="">
                        <a
                            href="tel:+917971114613"
                            className="inline-flex items-center gap-1 text-xs text-white"
                        >
                            <Phone className="h-3 w-3" />
                            +91 79711 14613
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
