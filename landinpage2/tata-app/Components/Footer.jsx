"use client";



const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-8 text-sm">
            <div className="container mx-auto px-4">
                {/* Main Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    {/* Logo */}
                    <div className="flex flex-col space-y-4">
                        <a
                            href="https://cars.tatamotors.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://preprod.myspotlight.co/tata/img/Tata_footer-logo.png"
                                alt="Tata Motors Limited"
                                width={120}
                                height={30}
                            />
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base font-semibold mb-3 text-gray-200">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/privacyPolicy/10054"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition"
                                >
                                    Privacy Policy
                                    <span className="material-icons text-xs">arrow_forward</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/termAndCondition/10054"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition"
                                >
                                    Terms &amp; Condition
                                    <span className="material-icons text-xs">arrow_forward</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-base font-semibold mb-3 text-gray-200">
                            Social
                        </h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <img
                                    src="https://preprod.myspotlight.co/tata/img/fb.png"
                                    alt="Facebook"
                                    width={18}
                                    height={18}
                                />
                                <a
                                    href="https://www.facebook.com/officialtatamotorscars/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img
                                    src="https://preprod.myspotlight.co/tata/img/tw.png"
                                    alt="Twitter"
                                    width={18}
                                    height={18}
                                />
                                <a
                                    href="https://twitter.com/TataMotors_Cars/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img
                                    src="https://preprod.myspotlight.co/tata/img/inst.png"
                                    alt="Instagram"
                                    width={18}
                                    height={18}
                                />
                                <a
                                    href="https://www.instagram.com/tatamotorscars/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img
                                    src="https://preprod.myspotlight.co/tata/img/yt.png"
                                    alt="Youtube"
                                    width={18}
                                    height={18}
                                />
                                <a
                                    href="https://www.youtube.com/c/tatamotorscars"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition"
                                >
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="border-t border-gray-700 pt-3 text-xs text-gray-500">
                    <p>
                        Copyright © 2025 <span className="font-semibold">TATA Motors.</span> All
                        Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
