import { useState, useEffect } from 'react';
import Header from './pages/NavBar';
import Hero from './pages/Hero';
import InstagramGrid from './pages/Grid';
import Footer from './pages/Footer';
import { CarouselCategories, LoadingSpinner } from './pages/Carousal';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockPosts = [
          {
            id: '1',
            media_url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
            caption: 'Beautiful sunset views from our office today! #sunset #views #worklife',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example1',
            timestamp: '2023-05-15T10:00:00Z',
          },
          {
            id: '2',
            media_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            caption: 'Team building event was a huge success! #team #companyculture',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example2',
            timestamp: '2023-05-10T14:30:00Z',
          },
          {
            id: '3',
            media_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
            caption: 'Working on exciting new projects this quarter! #innovation #tech',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example3',
            timestamp: '2023-05-08T09:15:00Z',
          },
          {
            id: '4',
            media_url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
            caption: 'Our team at the annual tech conference #conference #networking #event',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example4',
            timestamp: '2023-05-05T16:45:00Z',
          },
          {
            id: '5',
            media_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
            caption: 'Product launch day! So proud of our team #productlaunch #success #product',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example5',
            timestamp: '2023-05-01T11:20:00Z',
          },
          {
            id: '6',
            media_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
            caption: 'Client appreciation week in full swing! #clients #gratitude',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example6',
            timestamp: '2023-04-28T13:10:00Z',
          },
          {
            id: '7',
            media_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
            caption: 'Behind the scenes of our new marketing campaign #bts #marketing #product',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example7',
            timestamp: '2023-04-25T15:30:00Z',
          },
          {
            id: '8',
            media_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
            caption: 'Celebrating another successful quarter! #achievement #milestone #team',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example8',
            timestamp: '2023-04-20T18:00:00Z',
          },
          {
            id: '9',
            media_url: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e',
            caption: 'Workshop Wednesday with industry experts #learning #development #event',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example9',
            timestamp: '2023-04-15T12:45:00Z',
          },
          {
            id: '10',
            media_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
            caption: 'Our new office space is finally ready! #newoffice #workspace',
            media_type: 'IMAGE',
            permalink: 'https://instagram.com/p/example10',
            timestamp: '2023-04-10T10:00:00Z',
          },
        ];

        const mockStories = [
          {
            id: 's1',
            thumbnail_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
            title: 'Office',
          },
          {
            id: 's2',
            thumbnail_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
            title: 'Team',
          },
          {
            id: 's3',
            thumbnail_url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
            title: 'Events',
          },
          {
            id: 's4',
            thumbnail_url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
            title: 'Workshops',
          },
          {
            id: 's5',
            thumbnail_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
            title: 'Clients',
          },
        ];

        setTimeout(() => {
          setPosts(mockPosts);
          setStories(mockStories);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
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