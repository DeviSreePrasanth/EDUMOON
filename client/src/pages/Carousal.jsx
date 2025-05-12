import { useState } from 'react';
import Slider from 'react-slick';

export default function CarouselCategories({ posts }) {
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Events', 'Team', 'Product'];
  const filteredPosts =
    category === 'All'
      ? posts
      : posts.filter((p) => p.caption?.toLowerCase().includes(category.toLowerCase()));

  const settings = {
    dots: true,
    infinite: filteredPosts.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Carousel & Categories</h2>
        <div className="mb-8 flex justify-center space-x-4 flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium ${
                category === cat
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>
        {filteredPosts.length > 0 ? (
          <Slider {...settings}>
            {filteredPosts.map((post) => (
              <div key={post.id} className="px-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img
                    src={post.media_url}
                    alt={post.caption || 'Instagram post'}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-gray-700 line-clamp-2">{post.caption}</p>
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 text-sm mt-2 inline-block"
                    >
                      View on Instagram
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-600">No posts available for this category.</p>
        )}
      </div>
    </section>
  );
}