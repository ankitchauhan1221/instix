import React from "react";
import { ArrowRight } from "lucide-react";
import Mainbg from "../assets/main-bg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service01 from "../assets/service01.png";
import Service02 from "../assets/service02.png";
import Service03 from "../assets/service03.png";
import Steps from "../components/steps";
import TradingFeatures from "../components/tradingfeatures";
import BlogSection from "../components/blog-section";
import CoreService from "./CoreService";
import Converter from "./converter";
import Newsletter from "./newsletter";
import Marquee from "./marquee";

const Statistic = ({ number, prefix, suffix, label, highlight = false }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 flex items-baseline justify-center text-white">
        {prefix && <span className="text-yellow-400">{prefix}</span>}
        {number}
        <span className="text-yellow-400">{suffix}</span>
      </p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
};

const CoreServices = () => {
  const services = [
    {
      title: "InstiX's OTC RFQ",
      description:
        "The OTC RFQ feature brings transparency and flexibility to InstiX by allowing users to easily request specific prices for large trades. It empowers institutional investors...",
      image: Service01,
    },
    {
      title: "InstiX's RFS",
      description:
        "The RFS (Request for Stream) feature delivers real-time pricing for large trades so that users can access continuous price streams. The feature ensures optimal rate...",
      image: Service02,
    },
    {
      title: "Liquidity Provider",
      description:
        "InstiX connects users with top-tier liquidity providers for the efficient execution of large trades – a setup that guarantees competitive pricing and reliable access to a wide range...",
      image: Service03,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[0.5rem]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {Math.random().toString(2).slice(2, 10)}
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-12 relative z-10">
        InstiX's Core Services
      </h1>
      <div className="w-full max-w-7xl relative z-10">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg overflow-hidden shadow-lg text-center border border-gray-300 p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[20rem] object-cover rounded-[10px]"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="flex justify-center">
                    {" "}
                    {/* Center the button */}
                    <button className="text-white border border-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-white hover:text-black transition-colors">
                      View More
                      <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-black" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Hero Section */}
        <section className="bg-[#0a0b0d] text-white min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
          <div className="flex flex-col items-center justify-center text-center px-4 py-20 relative z-10">
            <div className="max-w-[1320px] mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6">
                Most Trusted. Secured. Liquid OTC Institutional Platform.
              </h2>
              {/* <p className="text-2xl md:text-4xl mb-8 max-w-4xl mx-auto font-light">
                The Next-Gen OTC Platform For Seamless, High-Volume Crypto Trades
              </p> */}
              <p className="mb-8 max-w-2xl mx-auto text-gray-400 font-light">
                instiX is the first regulated OTC Crypto Platform with Best- in
                class Liquidity, Zero Transaction Fees, 24/7 Support, and
                Instant Deposits and Withdrawals
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-white text-white rounded-full font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <img
              src={Mainbg}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Operational Overview Section */}
        <section
          className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black"
          style={{
            backgroundImage: `url('./src/assets/Rectangle.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-4xl w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-white">
              Operational Highlights:
            </h1>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <Statistic number="100" suffix="+" label="Coins Available" />
              <Statistic
                number="NA"
                prefix=""
                suffix=""
                label="Daily Trading Volume"
                highlight
              />
            </div>
            <div className="flex justify-center mb-8">
              <Statistic number="10" suffix="+" label="Countries Covered" />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Statistic number="524K" suffix="+" label="Monthly Turnover" />
              <Statistic number="126K" suffix="+" label="Daily Turnover" />
            </div>
          </div>
        </section>

        {/* instix About Section */}

        <section className="w-full overflow-hidden mb-12 bg-black py-4">
          <div className="overflow-hidden mb-40">
            <div className="animate-slide">
              {/* Duplicate the text content for continuous effect */}
              <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-container">
                Harness 94% Of The World's Digital Economy
              </div>
              <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-container">
                Harness 94% Of The World's Digital Economy
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mb-[10rem] max-w-7xl mx-auto px-4">
            <div className="md:w-1/2 relative">
              <div className="absolute  inset-0 bg-[url('./src/assets/Frame.png')] bg-no-repeat bg-center"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative z-10">
                <span className="text-yellow-400 block mb-2 mt-[8rem]">
                  Integrity
                </span>
                <span className="text-white">Drives Change</span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full mb-4">
                About InstiX
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Where User-Centric Integrity Meets Open Communication to Deliver
                Trust and Results.
              </h3>
              <p className="text-gray-300 mb-8">
                InstiX stands out as a leading OTC platform designed
                specifically for institutional investors and high-net-worth
                individuals. It offers unmatched liquidity, with 500 coins
                available for trading and an impressive daily trading volume.
                Focusing on tailored liquidity solutions, InstiX differentiates
                itself from competitors through its RFQ/RFS model, allowing
                large trades without caps and zero transaction fees. Licensed in
                Poland, InstiX's seamless trading experience with 24/7 support
                and instant withdrawals makes it the go-to choice for savvy
                traders across 10+ countries.
              </p>
              <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-3 px-6 border border-white hover:border-transparent rounded-full inline-flex items-center transition duration-300">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Marquee />

        {/* Core Services Section */}
        <CoreServices />

        {/* Steps Section */}
        <Steps />

        {/* tradingfeatures Section */}
        <TradingFeatures />
        
        {/* Converter Section */}
        <Converter />

        {/* Blog Section */}
        <BlogSection />

        {/* Newsletter Section */}
        <Newsletter />

        {/* <CoreService /> */}
      </div>
    </>
  );
};

export default Main;
