import React, { useEffect, useState } from "react";
import { FaHeart, FaComment, FaInstagram, FaCalendarAlt, FaTimes } from "react-icons/fa";
import { fetchPosts } from "../api";

const AllPosts = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(getPostsPerPage());
  const [selectedPost, setSelectedPost] = useState(null);

  function getPostsPerPage() {
    return window.innerWidth < 640 ? 4 : 6;
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

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "IST",
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedPost(null);
    }
  };

  return (
    <div className={`relative ${selectedPost ? "backdrop-blur-sm" : ""}`}>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative inline-block mx-auto">
            Events You Have Missed
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[rgb(4,77,95)]"></span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentImages.map((img) => (
              <div
                key={img.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.media_url}
                    alt="Post"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <button 
                      onClick={() => setSelectedPost(img)}
                      className="bg-white text-[rgb(4,77,95)] px-4 py-2 rounded-lg font-medium hover:bg-[rgb(4,77,95)] hover:text-white transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {img.caption}
                  </h3>
                  
                  
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    page === i + 1
                      ? "bg-[rgb(4,77,95)] text-white shadow-md"
                      : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-xl max-w-2xl w-full mx-4 shadow-2xl overflow-hidden">
            <div className="relative">
              <img
                src={selectedPost.media_url}
                alt="Post"
                className="w-full h-80 object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors"
                onClick={() => setSelectedPost(null)}
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <FaCalendarAlt />
                <span>{formatTimestamp(selectedPost.timestamp)}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedPost.caption}
              </h3>
              
              <div className="flex gap-6 mb-6">
                <span className="flex items-center gap-2 text-gray-700">
                  <FaHeart className="text-red-500" /> {selectedPost.like_count} Likes
                </span>
                <span className="flex items-center gap-2 text-gray-700">
                  <FaComment className="text-blue-500" /> {selectedPost.comments_count} Comments
                </span>
              </div>
              
              <a
                href={selectedPost.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[rgb(4,77,95)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(2,50,62)] transition-colors"
              >
                <FaInstagram /> View on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPosts;