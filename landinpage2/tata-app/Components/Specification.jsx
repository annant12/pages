"use client";

import Image from "next/image";

const specifications = [
    {
        title: "Features",
        text: "Inspired by your dreams we design our cars to translate them into reality.",
        image:
            "https://preprod.myspotlight.co/img/uploadimages/image/d21f2694-80a8-47a4-9bd5-d7eedf1a5ec2/Feature_3.jpg",
    },
    {
        title: "Connectivity",
        text: "Our infotainment solutions are engineered to ensure the best in entertainment experience.",
        image:
            "https://preprod.myspotlight.co/img/uploadimages/image/134afc6c-6427-4f3d-97c0-9fba1a2f4349/Feature_2.jpg",
    },
    {
        title: "Safety",
        text: "At Tata Motors we are driving safety at an unprecedented speed.",
        image:
            "https://preprod.myspotlight.co/img/uploadimages/image/b0737a36-28a2-4b7f-a2c1-fb8cd97741b1/Feature_1.jpg",
    },
];

const Specifications = () => {
    return (
        <section id="Specifications" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {specifications.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h5>
                                <p className="text-gray-600 text-sm">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specifications;
