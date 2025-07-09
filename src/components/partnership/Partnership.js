import React from "react";
import partner1 from "./images/1.png";
import partner2 from "./images/2.png";
import partner3 from "./images/3.png";
import partner4 from "./images/4.png";
import partner5 from "./images/5.png";
import partner6 from "./images/6.png";
import partner7 from "./images/7.png";
import partner8 from "./images/8.png";
import partner9 from "./images/9.png";
import partner10 from "./images/10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partnership() {
    const partners = [
        { id: 1, src: partner1, alt: "Partner 1" },
        { id: 2, src: partner2, alt: "Partner 2" },
        { id: 3, src: partner3, alt: "Partner 3" },
        { id: 4, src: partner4, alt: "Partner 4" },
        { id: 5, src: partner5, alt: "Partner 5" },
        { id: 6, src: partner6, alt: "Partner 6" },
        { id: 7, src: partner7, alt: "Partner 7" },
        { id: 8, src: partner8, alt: "Partner 8" },
        { id: 9, src: partner9, alt: "Partner 9" },
        { id: 10, src: partner10, alt: "Partner 10" },
    ];

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        arrows: true,
        dots: false,
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="py-12 bg-[#213972]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 relative pb-4">
                    Universitetning nufuzli hamkorlari
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full"></span>
                </h1>

                <div className="partner-slider relative">
                    <Slider {...settings}>
                        {partners.map((partner) => (
                            <div key={partner.id} className="px-3 focus:outline-none">
                                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 h-40 flex items-center justify-center border border-gray-100 transform hover:-translate-y-1">
                                    <img
                                        src={partner.src}
                                        alt={partner.alt}
                                        className="max-h-24 max-w-full object-contain filter  hover:grayscale-0 transition-all duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Custom arrow styling */}
            <style jsx global>{`
                .slick-prev:before, 
                .slick-next:before {
                    color: white;
                    font-size: 24px;
                }
                .slick-prev {
                    left: -35px;
                }
                .slick-next {
                    right: -35px;
                }
                .slick-slide {
                    padding: 0 5px;
                }
                .slick-list {
                    margin: 0 -5px;
                }
                @media (max-width: 768px) {
                    .slick-prev {
                        left: -15px;
                    }
                    .slick-next {
                        right: -15px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Partnership;