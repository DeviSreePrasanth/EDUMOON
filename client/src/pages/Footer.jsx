import React from 'react';
import edumoon from '../data/footer.png';

const Footer = () => {
  return (
    <footer className="bg-[#213555] text-white pt-12 text-[16px] md:text-[17px]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
        {/* Logo & Description */}
        <div>
          <img src={edumoon} alt="Edumoon Logo" className="mb-4 w-36" />
          <p className="text-gray-200 text-sm">
            EduMoon is building the largest student community for engineers to develop new skills,
            network, find internships, grow, and earn.
          </p>
        </div>

        {/* Links - Column 1 */}
        <div>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Links - Column 2 */}
        <div>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Clubs</a></li>
            <li><a href="#" className="hover:underline">Tutions</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-sm text-gray-200">
            A-Hub, Maddilapalem, Visakhapatnam - 530003
          </p>
          <p className="text-sm text-gray-200 mt-2">
            Email: <a href="mailto:theedumoon@gmail.com" className="hover:underline">theedumoon@gmail.com</a>
          </p>
          <p className="text-sm text-gray-200 mt-2">
            Phone: +91 - 7989132224
          </p>
        </div>
      </div>

      {/* Bottom Strip - Full width */}
      <div className="bg-[#212529] text-center py-4 mt-12 text-sm text-gray-300 w-full">
        © 2023 Moon Light Global Solutions Pvt Ltd
      </div>
    </footer>
  );
};

export default Footer;
