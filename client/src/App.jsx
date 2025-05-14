import { useState, useEffect } from 'react';
import Header from './pages/NavBar';
import Hero from './pages/Hero';
import InstagramGrid from './pages/Grid';
import CarouselCategories from './pages/Carousal';
import Footer from './pages/Footer';
import LoadingSpinner from './pages/Spinner';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://edumoon-sigma.vercel.app/api/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.posts);
        setStories(data.posts.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load Instagram posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Hero />
      <InstagramGrid posts={posts} />
      <CarouselCategories posts={posts} />
      <Footer />
    </div>
  );
}