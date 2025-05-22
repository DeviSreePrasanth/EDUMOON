import { HiOutlineSparkles, HiOutlineUserGroup } from 'react-icons/hi2';
import icon from '../data/icon.png';

const Stats = () => {
  const statsData = [
    { value: "100+", label: "Epic Events", icon: <HiOutlineSparkles />, highlight: false },
    { value: "200+", label: "Amazing Guests", icon: <HiOutlineUserGroup />, highlight: false },
    { 
      value: "All this", 
      label: "Absolutely FREE", 
      icon: <img src={icon} alt="Free icon" className="w-10 h-10 object-contain" />, 
      highlight: true,
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Impact</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-xl transition-all duration-500 flex flex-col items-center
              ${stat.highlight ? 
                'bg-gradient-to-br from-[rgb(4,77,95)] to-[rgb(2,50,62)] text-white shadow-lg shadow-[rgba(4,77,95,0.3)] min-w-[240px]' : 
                'bg-white text-gray-800 border border-gray-200 hover:border-[rgb(4,77,95)] min-w-[220px]'}
              hover:shadow-xl hover:shadow-[rgba(4,77,95,0.2)] hover:-translate-y-2 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(255,255,255,0.1)] to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative">
                <div className={`text-4xl mb-4 transition-all duration-500 
                  ${stat.highlight ? 
                    'text-[#a8e6f0]' : 
                    'text-[rgb(4,77,95)] group-hover:text-[rgb(2,50,62)]'}
                  p-3 rounded-full bg-[rgba(4,77,95,0.1)] group-hover:bg-[rgba(4,77,95,0.2)]`}>
                  {stat.icon}
                </div>
              </div>

              <p className={`text-4xl font-bold mb-4 transition-all duration-500 
                ${stat.highlight ? 'text-white' : 'text-[rgb(4,77,95)] group-hover:text-[rgb(2,50,62)]'}`}>
                {stat.value}
              </p>

              <p className={`text-lg relative inline-block pb-2 
                ${stat.highlight ? 'text-[#a8e6f0]' : 'text-gray-600 group-hover:text-gray-800'}`}>
                {stat.label}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-500 
                  ${stat.highlight ? 'bg-[#a8e6f0]' : 'bg-[rgb(4,77,95)]'} group-hover:w-12`}></span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;