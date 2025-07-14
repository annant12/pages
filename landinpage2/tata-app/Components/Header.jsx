"use client";



const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <img
                        src="https://preprod.myspotlight.co/img/customers/logo/b450dea8-91f6-4ca2-9058-f555cd72d8c1/logo.png"
                        alt="Tata Motors"
                        width={150}
                        height={50}
                    />
                </a>

                {/* Dealer Details */}
                <div className="text-right">
                    <h4 className="text-lg font-semibold">
                        Tata Motors Cars Showroom Muthoot Automotive Kollam Bypass
                    </h4>
                    <p className="text-sm text-gray-500">Tata Motors Authorized Dealer</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
