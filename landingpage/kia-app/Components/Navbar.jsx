import React from "react";

const Navbar = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 bg-white">
            {/* Logo */}
            <div className="flex-shrink-0 mb-2 sm:mb-0">
                <img
                    src="https://preprod.myspotlight.co/img/customers/logo/d017fbf7-0cfd-4d44-97c2-0c9af6f0b194/logo.png"
                    alt="logo"
                    className="h-12 w-auto sm:ml-10"
                />
            </div>

            {/* Header Details */}
            <div className="text-center sm:text-right sm:mr-10">
                <h4 className="text-lg font-semibold text-gray-800">ASB Automobiles</h4>
                <p className="text-xs text-gray-500">Kia India Authorized Dealer</p>
            </div>
        </div>
    );
};

export default Navbar;
