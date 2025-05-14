export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://instagram.fccu13-1.fna.fbcdn.net/v/t51.2885-15/shared/instagram_ig_background.png')] bg-cover"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Instagram Moments</h1>
          <p className="text-xl mb-8">Discover our latest updates, events, and behind-the-scenes content</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-pink-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium shadow-lg transition-all">
              Explore Posts
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-6 py-3 rounded-full font-medium transition-all">
             <a href="https://www.instagram.com/viba2k25/">Follow Us</a> 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}