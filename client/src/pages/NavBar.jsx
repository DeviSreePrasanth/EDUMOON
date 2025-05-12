import { Instagram, ExternalLink } from 'react-feather';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Instagram className="text-pink-600" size={28} />
            <h1 className="text-2xl font-bold text-gray-800 hidden sm:block">EDU MOON</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Gallery</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">About</a>
          </nav>
          <a
            href="https://www.instagram.com/viba2k25/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span className="hidden sm:inline">Follow Us</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}