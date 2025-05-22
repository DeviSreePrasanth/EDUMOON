import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchPosts } from "../api";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 z-10 focus:outline-none"
    onClick={onClick}
    aria-label="Next slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="black"
      strokeWidth="3"
      viewBox="0 0 24 24"
      className="w-6 h-6 md:w-8 md:h-8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 z-10 focus:outline-none"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="black"
      strokeWidth="3"
      viewBox="0 0 24 24"
      className="w-6 h-6 md:w-8 md:h-8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
    </svg>
  </button>
);

const Hero = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        const imgs = data.posts
          .filter(
            (post) =>
              post.media_type === "IMAGE" 
          )
          .map((post) => post.media_url);
        setImages(imgs);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (loading)
    return <div className="text-center py-20 text-gray-700">Loading...</div>;

  if (!images.length)
    return (
      <div className="text-center py-20 text-gray-700">No images found.</div>
    );

  return (
    <section className="w-full relative">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={url}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
