'use client';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#08141C] text-gray-300 py-4 px-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Copyright */}
                <p className="text-sm mb-2">
                    2025 Kia India Pvt. Limited. All Rights Reserved.
                </p>

                {/* Links */}
                <div className="flex gap-3 text-sm">
                    <a
                        href="https://www.asb-kia-sector-61-gurugram.com/privacyPolicy/HR407"
                        className="hover:underline"
                    >
                        Privacy Policy
                    </a>
                    <span>|</span>
                    <a
                        href="https://www.asb-kia-sector-61-gurugram.com/termAndCondition/HR407"
                        className="hover:underline"
                    >
                        Terms &amp; Conditions
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
