import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const AllPosts = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(getPostsPerPage());

  function getPostsPerPage() {
    return window.innerWidth < 640 ? 4 : 6; // sm breakpoint in Tailwind is 640px
  }

  useEffect(() => {
    const loadAll = async () => {
      try {
        const data = await fetchPosts();
        const onlyImages = data.posts.filter(
          (post) => post.media_type === "IMAGE" 
        );
        setImages(onlyImages);
      } catch (err) {
        console.error("Error loading images:", err.message);
      }
    };

    loadAll();

    const handleResize = () => {
      setPostsPerPage(getPostsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(images.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const currentImages = images.slice(startIndex, startIndex + postsPerPage);

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">EVENTS YOU HAVE MISSED</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {currentImages.map((img) => (
          <div key={img.id} className="overflow-hidden rounded-xl shadow-md w-full aspect-[4/3]">
            <img
              src={img.media_url}
              alt="Post"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-10 h-10 rounded-full border ${
              page === i + 1
                ? "bg-[#213555] text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AllPosts;
