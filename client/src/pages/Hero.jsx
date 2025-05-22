import React from "react";
import Slider from "react-slick";
import { FaInstagram } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 z-10 bg-white/80 rounded-full shadow-md hover:bg-white transition-all duration-300 w-10 h-10 flex items-center justify-center focus:outline-none"
    onClick={onClick}
    aria-label="Next slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className="w-6 h-6 text-gray-800"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 z-10 bg-white/80 rounded-full shadow-md hover:bg-white transition-all duration-300 w-10 h-10 flex items-center justify-center focus:outline-none"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className="w-6 h-6 text-gray-800"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const Hero = () => {
  // Static array of images with captions and placeholder Instagram links
  const staticPosts = [
  {
    media_url: "/data/test1.png",
  },
  {
    media_url: "/data/test2.jpeg",
  },
  {
    media_url: "/data/test3.png",
  },
];


  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1900,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full relative">
      <Slider {...settings}>
        {staticPosts.map((post, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
  src={post.media_url}
  className="w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[350px] object-cover object-center"
  loading="lazy"
/>

            {/* Overlay with caption */}
            
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;