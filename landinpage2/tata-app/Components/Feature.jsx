"use client";

// import img from "next/img";

const Features = () => {
    return (
        <section id="Features" className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Dealer Card */}
                    <div className="flex p-6 space-x-4 items-start">
                        <img
                            src="https://preprod.myspotlight.co/Tata/img/directions.svg"
                            alt="Directions Icon"
                            width={50}
                            height={50}
                            className="feature-icon"
                        />
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">
                                Tata Motors Cars Showroom Muthoot Automotive Kollam Bypass
                                <span className="block text-sm font-normal text-gray-500">
                                    - Sales-Mevaram-MutHau
                                </span>
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Machoos Properties Mevaram, Kollam Bypass Near Medicity Hospital,
                                Kollam, Kerala, 691020
                            </p>
                            {/* Call us */}
                            <p className="mt-4 text-gray-700">
                                Call us at :{" "}
                                <a
                                    href="tel:9167392453"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    9167392453
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Description Block */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                            Tata Motors Connecting Aspirations
                        </h3>
                        <p className="text-gray-600">
                            We bring your dreams to life by engineering the best in design,
                            connectivity, and safety. Inspired by your dreams, we design our cars to
                            translate them into reality. Our infotainment solutions are engineered
                            to ensure the best in the entertainment experience. At Tata Motors, we
                            are driving safety at an unprecedented speed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
