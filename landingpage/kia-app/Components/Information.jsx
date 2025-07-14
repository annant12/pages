import React from "react";
import { BriefcaseBusiness, Warehouse, Flag, Phone } from "lucide-react";

const InformationCard = () => {
    return (
        <div className="mx-auto h-100 bg-gray-100 shadow-lg rounded-xl p-6 space-y-4">
            {/* Business Name */}
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2 text-center">
                ASB Automobiles
            </h3>

            {/* Details */}
            <div className="space-y-3">
                {/* Dealer Name */}
                <div className="flex items-center space-x-3">
                    <div className="rounded-full p-2 bg-gray-100">
                        {/* Dealer icon */}
                        <BriefcaseBusiness className="w-5 h-5 text-gray-700" />
                    </div>
                    <h6 className="text-gray-700 text-base">ASB Automobiles</h6>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-3">
                    <div className="rounded-full p-2 bg-gray-100">
                        {/* Address icon */}
                        <Warehouse className="w-5 h-5 text-gray-700" />
                    </div>
                    <h6 className="text-gray-700 text-base">
                        Picasso Centre (GF+FF), Baharampur Naya, Sector 61, Gurugram,
                        Haryana-122011
                    </h6>
                </div>

                {/* City */}
                <div className="flex items-center space-x-3">
                    <div className="rounded-full p-2 bg-gray-100">
                        {/* City icon */}
                        <Flag className="w-5 h-5 text-gray-700" />
                    </div>
                    <h6 className="text-gray-700 text-base">Gurgaon</h6>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                    <div className="rounded-full p-2 bg-gray-100">
                        {/* Phone icon */}
                        <Phone className="w-5 h-5 text-gray-700" />
                    </div>
                    <h6 className="text-gray-700 text-base">
                        <a href="tel:8291940826" className="hover:underline">
                            8291940826
                        </a>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default InformationCard;
