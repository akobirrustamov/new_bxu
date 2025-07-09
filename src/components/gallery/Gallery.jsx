import React, { useEffect, useRef, useState } from "react";
import ApiCall, { baseUrl } from "../../config/index";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const [step, setStep] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [youTube, setYoutube] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef();

  useEffect(() => {
    getGalleryImages();
    getYouTube();
  }, []);

  const getGalleryImages = async () => {
    try {
      const response = await ApiCall(
        "/api/v1/gallery",
        "GET",
        null,
        null,
        true
      );
      setGalleryImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Failed to load images.");
    } finally {
      setLoading(false);
    }
  };

  const getYouTube = async () => {
    try {
      const response = await ApiCall(
        "/api/v1/youtube/all",
        "GET",
        null,
        null,
        false
      );
      setYoutube(response.data);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="my-20">
      <div className="px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-5xl font-bold text-[#213972]">
            Bitiruvchilar biz haqimizda
          </h2>
          <div className="flex space-x-3 text-[#213972]">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="text-2xl border-2 border-[#213972] rounded-full hover:bg-[#213972] hover:text-white p-2 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="text-2xl border-2 border-[#213972] rounded-full hover:bg-[#213972] hover:text-white p-2 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider Gallery */}
        {step === 0 ? (
          <Slider {...sliderSettings} ref={sliderRef}>
            {galleryImages.map((item) => {
              const isVideo = item.mainPhoto?.name
                .toLowerCase()
                .includes(".mp4");
              return (
                <div key={item.id} className="p-4">
                  <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                    {isVideo ? (
                      <video
                        className="w-full h-64 object-cover"
                        src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto.id}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youTube.slice(0, 3).map((video) => {
              const iframeWithClass = video.iframe.replace(
                /(<iframe.*?)(>)/,
                `$1 class="w-full h-48 sm:h-56 rounded-xl"$2`
              );
              return (
                <div
                  key={video.id}
                  className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div dangerouslySetInnerHTML={{ __html: iframeWithClass }} />
                  <div className="p-4">
                    <h6 className="text-lg font-semibold text-[#213972] mb-1">
                      {video.title}
                    </h6>
                    <p className="text-sm text-blue-600">#{video.hashTag}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
