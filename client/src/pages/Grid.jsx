import { Instagram, Heart, MessageCircle, Share2 } from 'react-feather';

export default function InstagramGrid({ posts }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Posts</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Post Header */}
              <div className="flex items-center p-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-0.5 mr-3">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Instagram className="text-pink-600" size={16} />
                  </div>
                </div>
                <span className="font-medium">Edumoon</span>
              </div>
              
              {/* Media Content */}
              <div className="relative aspect-square">
                {post.media_type === 'IMAGE' ? (
                  <img 
                    src={post.media_url} 
                    alt={post.caption || 'Instagram post'} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    muted
                  >
                    <source src={post.media_url} type="video/mp4" />
                  </video>
                )}
              </div>
              
              {/* Post Actions */}
              <div className="p-4">
                <div className="flex space-x-4 mb-3">
                  <button className="text-gray-700 hover:text-pink-600 transition-colors">
                    <Heart size={24} />
                  </button>
                  <button className="text-gray-700 hover:text-pink-600 transition-colors">
                    <MessageCircle size={24} />
                  </button>
                  <button className="text-gray-700 hover:text-pink-600 transition-colors">
                    <Share2 size={24} />
                  </button>
                </div>
                
                {/* Caption */}
                <p className="text-gray-700 mb-2 line-clamp-2">
                  <span className="font-medium mr-2">edumoon</span>
                  {post.caption}
                </p>
                
                {/* Timestamp */}
                <p className="text-gray-400 text-xs">
                  {new Date(post.timestamp).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
                
                {/* View on Instagram */}
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-pink-600 hover:text-pink-700 text-sm font-medium"
                >
                  View on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="bg-white border border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
}