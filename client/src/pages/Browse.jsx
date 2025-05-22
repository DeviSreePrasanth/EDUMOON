import { FaLaptopCode, FaMicrophoneAlt, FaCode, FaUserTie } from 'react-icons/fa';

const Browse = () => {
  const browseData = [
    { title: "Coding Bootcamp", action: "Join Now", icon: <FaLaptopCode /> },
    { title: "Tech Talks", action: "Join Now", icon: <FaMicrophoneAlt /> },
    { title: "Hackathon Prep", action: "Join Now", icon: <FaCode /> },
    { title: "Career Fair", action: "Join Now", icon: <FaUserTie /> },
  ];

  return (
    <section className="px-4 py-8 bg-gray-100">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Browse Opportunities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {browseData.map((item, index) => (
            <div
              key={index}
              className="bg-[rgb(4,77,95)] text-white rounded-lg p-6 flex flex-col items-center justify-center
              transition-all duration-500 hover:bg-[rgb(2,50,62)] hover:shadow-lg hover:shadow-[rgba(4,77,95,0.3)]
              border border-[rgba(255,255,255,0.1)] relative overflow-hidden group"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,transparent_50%)]
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Icon */}
              <div className="text-3xl mb-4 transition-all duration-500 group-hover:text-[#a8e6f0]
              p-3 bg-[rgba(0,0,0,0.2)] rounded-full group-hover:bg-[rgba(0,0,0,0.4)]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-center relative pb-1
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
              after:w-8 after:h-0.5 after:bg-[#7fd8e8] after:opacity-50 after:transition-all after:duration-500
              group-hover:after:w-12 group-hover:after:opacity-100">
                {item.title}
              </h3>

              {/* Button */}
              <button className="mt-3 bg-white text-[rgb(4,77,95)] px-4 py-2 rounded-md font-medium text-sm
              relative overflow-hidden transition-all duration-500 hover:text-white
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
              before:bg-gradient-to-r before:from-[rgba(4,77,95,0.8)] before:to-[rgba(2,50,62,0.8)] 
              before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
              border border-transparent hover:border-white">
                <span className="relative z-10">{item.action}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Browse;
