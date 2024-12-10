import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-24">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 ml-10">
        {/* Logo và Giới thiệu */}
        <div className="footer-about">
          <h3 className="text-2xl font-bold text-white mb-4">HUST Food</h3>
          <p>
            "Một cú click, trọn bữa ngon!" Chúng tôi mang đến những món ăn
            nhanh, chất lượng, và đầy đủ dinh dưỡng, phục vụ mọi đối tượng
            khách hàng.
          </p>
          <p className="mt-4">&copy; 2024 HUST Food. All Rights Reserved.</p>
        </div>
        {/* Liên kết nhanh */}
        <div className="footer-links ml-20">
          <h4 className="text-xl font-semibold text-white mb-4 ">
            Quick Links
          </h4>
          <ul>
            <li className="mb-2">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            </li>
            <li className="mb-2">
            <Link to="/menu/67191d28b840d3988a9efd5c" className="hover:text-yellow-400">Menu</Link>
            </li>
            <li className="mb-2">
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            </li>
            <li className="mb-2">
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Giờ mở cửa và Liên hệ */}
        <div className="footer-contact">
          <h4 className="text-xl font-semibold text-white mb-4">
            Contact & Hours
          </h4>
          <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="fa fa-map-marker text-yellow-400 mr-2" />
            So 1 Dai Co Viet, Hai Ba Trung, Ha Noi
          </p>
          <p>
          <FontAwesomeIcon icon={faPhone} className="text-yellow-400 mr-2" />
            +84 123 456 789
          </p>
          <p>
          <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 mr-2" />
            support@hustfood.com
          </p>
          <p className="mt-4">
            <span className="font-semibold">Opening Hours:</span>
            <br />
            📅 Mon-Sun: 10:00 AM - 10:00 PM
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-yellow-400 hover:text-white">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="text-yellow-400 hover:text-white">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className="text-yellow-400 hover:text-white">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="text-yellow-400 hover:text-white">
            <i className="fa fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;