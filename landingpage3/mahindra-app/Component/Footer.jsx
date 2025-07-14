'use client';

const Footer = () => {
    return (
        <>
            <div className="relative">
                <div className="h-1 bg-gray-700"></div>
                <div className="left-1">
                    <span className="inline-block bg-gray-700 text-white px-4 py-1">
                        Showroom Address
                    </span>
                </div>
            </div>
            <footer className="bg-whitw text-black ">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between items-start md:items-center">
                    {/* Left: Showroom Address */}
                    <div className="mb-4 md:mb-0">
                        <h5 className="font-semibold text-lg mb-1">Mahindra Koncept Automobiles - SUV Showroom</h5>
                        <p className="text-sm">
                            Plot No.-02, Dharm Colony, Palam Vihar Extension, Gurgaon
                        </p>
                    </div>

                    {/* Middle: Business Hours */}
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                        <p className="text-sm">9:30 AM - 6:30 PM</p>
                    </div>

                    {/* Right: Reviews */}
                    <div>
                        <h4 className="font-semibold text-lg mb-1">Reviews</h4>
                        <a
                            href="https://www.facebook.com/303994457044141"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:underline"
                        >
                            <img
                                src="data:image/png;base64,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"
                                alt="Facebook"
                                className="w-6 h-6 rounded-2xl"
                            />
                            <span>Like us on Facebook</span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
