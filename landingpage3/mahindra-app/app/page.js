'use client'
import Carousel from "@/Component/Carousel";
import Navbar from "@/Component/Header";
import CarModelSlider from "@/Component/Model";
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarEnquiryForm from "@/Component/Form";
import Footer from "@/Component/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => setShowPopup(true), 2000);

    // Or show popup on first scroll
    const handleScroll = () => {
      setShowPopup(true);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const carouselItems = [
    {
      title: "XUV 400",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/xuv-400",
      image: "https://dealers-auto.mahindra.com/static/6f343de34ad279b743ef1860abb32923/37d86/xuv400-desktop.jpg",
      description: "Mahindra's first all-electric SUV with premium features"
    },
    {
      title: "Thar Roxx",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/thar-roxx",
      image: "https://dealers-auto.mahindra.com/static/efd798a3728cfe4137531792acd8a4a6/0dadc/tharroxx-desktop.png",
      description: "The iconic off-roader with modern upgrades"
    },
    {
      title: "Bolero Neo",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/bolero-neo",
      image: "https://dealers-auto.mahindra.com/static/8bfc574a1fa605196b782f46fee5b0fc/37d86/boleroneo-desktop.jpg",
      description: "Rugged SUV with contemporary styling"
    },
    {
      title: "Scorpio Classic",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/scorpio-classic",
      image: "https://dealers-auto.mahindra.com/static/e2b2da3ddda6fd6ab6d3f5ff48d5def3/37d86/scoripoclassic-desktop.jpg",
      description: "The legendary SUV with timeless appeal"
    },
    {
      title: "Scorpio N",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/scorpio-n",
      image: "https://dealers-auto.mahindra.com/static/8cbda733ad25d80c8833a39b9a891c9b/37d86/scoripoN-desktop.jpg",
      description: "Next-gen Scorpio with advanced features"
    },
    {
      title: "Thar",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/thar",
      image: "https://dealers-auto.mahindra.com/static/1e10d325d5e9542519368be71e8b029a/37d86/thar-desktop.jpg",
      description: "The ultimate off-road adventure vehicle"
    },
    {
      title: "XUV 700",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/xuv-700",
      image: "https://dealers-auto.mahindra.com/static/ed5f5e468be50836be950d9656b7fc85/37d86/xuv700-desktop.jpg",
      description: "Premium luxury SUV with cutting-edge technology"
    },
    {
      title: "XUV 3XO",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/xuv-3xo",
      image: "https://dealers-auto.mahindra.com/static/4eb1cd49c714d3b9e6ebe23665eb35d5/0dadc/xuv3xo-desktop.png",
      description: "Compact SUV with bold design and features"
    },
    {
      title: "Bolero Neo Plus",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/bolero-neo-plus",
      image: "https://dealers-auto.mahindra.com/static/cc5826911fe4668a2a58ff1456d9f0ca/0dadc/boleroneoplus-desktop.png",
      description: "Enhanced version with premium comfort features"
    },
    {
      title: "Bolero",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/bolero",
      image: "https://dealers-auto.mahindra.com/static/65eec0162d1976f6eb9e2c3ee22f416b/37d86/bolero-desktop.jpg",
      description: "India's most trusted rugged SUV"
    }
  ];

  const carModels = [
    {
      name: "Scorpio-N",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/scorpio-n",
      imageSrc:
        "https://dealers-auto.mahindra.com/static/a1814e03f499b51de8e89689ff2028a8/edb0e/scorpioN_slider.png",
      imageAlt: "Mahindra Scorpio-N SUV",
    },
    {
      name: "Thar",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/xuv-700",
      imageSrc:
        "https://dealers-auto.mahindra.com/static/2b2ee14d4ab9e896e03012349d0fab6e/339b7/thar_slider.jpg",
      imageAlt: "Thar",
    },
    {
      name: "Bolero Neo",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/bolero-neo",
      imageSrc:
        "https://dealers-auto.mahindra.com/static/acf934fa80503fab12b8b7bebaa3d65b/edb0e/boleroneoplus_slider.png",
      imageAlt: "Mahindra Bolero Neo SUV",
    },
    {
      name: "Scorpio Cassic",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/xuv-700",
      imageSrc:
        "https://dealers-auto.mahindra.com/static/2f5c5e7e8dc24c86304adf0f7ad19905/339b7/scorpioclassic_slider.jpg",
      imageAlt: "Scorpio Cassic",
    },
    {
      name: "XUV 3XO",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/bolero-neo",
      imageSrc:
        "https://dealers-auto.mahindra.com/static/4e7d67d7acd4174cc1b88a472dc0542c/edb0e/xuv3xo_slider.png",
      imageAlt: "XUV 3XO",
    },
    {
      name: "XUV 7OO",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/bolero-neo",
      imageSrc:
        "https://dealers-auto.mahindra.com/static/685db98e8b7b1c83ad987fb3e4032b59/edb0e/xuv700_slider.png",
      imageAlt: "XUV 7OO",
    },
    {
      name: "Thar ROXX",
      link: "/mahindra-koncept-automobiles-suv-showroom-kon01k011161-gurgaon/cars/bolero-neo",
      imageSrc:
        "https://dealers-auto.mahindra.com/static/b6f00e151c525320d0fd9b679ddc29ed/edb0e/tharroxx_slider.png",
      imageAlt: "Thar ROXX",
    },
  ];


  return (
    <div>
      <Navbar />
      <Carousel items={carouselItems} />
      <CarModelSlider models={carModels} />
      <CarEnquiryForm />
      {showPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-2xl relative w-full max-w-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Quick Enquiry</h2>
            <CarEnquiryForm />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
