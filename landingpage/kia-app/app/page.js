import AboutDealer from "@/Components/About";
import Carousel from "@/Components/Carousel";
import KiaCarShowcase from "@/Components/Cars";
import FeatureSlider from "@/Components/Features";
import Footer from "@/Components/footer";
import InfoForm from "@/Components/InfoForm";
import InformationCard from "@/Components/Information";
import Navbar from "@/Components/Navbar";

export default function Home() {
  const features = [
    {
      title: "Carens",
      items: [
        {
          image: "https://preprod.myspotlight.co/Template3/img/Carens/Feature-1.jpg",
          description: "Enhanced safety, security and convenience with dual recording...",
        },
        {
          image: "https://preprod.myspotlight.co/Template3/img/Carens/Feature-2.jpg",
          description: "Ingress or egress is a breeze with 2nd Row One Touch Easy Electric Tumble Seat...",
        },
        {
          image: "https://preprod.myspotlight.co/Template3/img/Carens/Feature-3.jpg",
          description: "Beat the heat during a hot summer day with Kia Carens Ventilated Seats...",
        },
        {
          image: "https://preprod.myspotlight.co/Template3/img/Carens/Feature-3.jpg",
          description: "Beat the heat during a hot summer day with Kia Carens Ventilated Seats...",
        },
        {
          image: "https://preprod.myspotlight.co/Template3/img/Carens/Feature-3.jpg",
          description: "Beat the heat during a hot summer day with Kia Carens Ventilated Seats...",
        },
        {
          image: "https://preprod.myspotlight.co/Template3/img/Carens/Feature-3.jpg",
          description: "Beat the heat during a hot summer day with Kia Carens Ventilated Seats...",
        },
        // Add more features as needed
      ],
    },
    // Add more feature sets as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Carousel />

      <div className="flex flex-col md:flex-row justify-center gap-6 px-4 md:px-20 py-6 md:py-14">
        {/* Left Section: Information */}
        <div className="w-full md:w-[350px] bg-gray-100 shadow-md ">
          <InformationCard />
        </div>

        {/* Right Section: InfoForm */}
        <div className="w-full flex-1 bg-gray-100 shadow-md">
          <InfoForm />
        </div>
      </div>
      {/* <FeatureSlider features={features} /> */}
      <KiaCarShowcase />

      <AboutDealer />
      <Footer />
    </div>
  );
}
