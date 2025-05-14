import { useState, useEffect } from "react";
import { Timeline } from "../components/ui/timeline";

export default function TimelinePage() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const { posts } = await response.json();

        // Group posts by date
        const postsByDate = posts.reduce((acc, post) => {
          const dateKey = new Date(post.timestamp).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          if (!acc[dateKey]) {
            acc[dateKey] = [];
          }
          acc[dateKey].push(post);
          return acc;
        }, {});

        // Format grouped data
        const formattedData = Object.entries(postsByDate).map(([date, posts]) => ({
          title: date,
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-start">
              {posts.map((post, idx) => (
                <div
                  key={idx}
                  className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 max-w-[300px]"
                >
                  {post.media_type === "IMAGE" && (
                    <img
                      src={post.media_url}
                      alt={post.caption || "Instagram post"}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                  )}
                  {post.media_type === "VIDEO" && (
                    <video
                      src={post.media_url}
                      controls
                      className="w-full h-[400px] object-cover rounded-2xl"
                    />
                  )}
                </div>
              ))}
            </div>
          ),
        }));

        // Prepend static timeline data (empty as per your code)
        const staticData = [];

        setTimelineData([...staticData, ...formattedData]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load Instagram posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800">
      {loading && (
        <div className="text-center py-20">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading posts...</p>
        </div>
      )}
      {error && (
        <div className="text-center py-20">
          <p className="text-red-500 text-lg font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      )}
      {!loading && !error && (
        <>
          <Timeline data={timelineData} />
        </>
      )}
    </div>
  );
}