import React from "react";
import logo from "./logo.png";
import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-white py-8 px-4 md:py-12 lg:py-16 shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Map Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-red-500 text-2xl mr-2" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Buxoro Xalqaro Universiteti manzili
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-xl shadow-xl border-2 border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.8958577959097!2d64.42846967583635!3d39.80932777154381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5009003f1c477b%3A0x920d498788a13e58!2sBuxoro%20psixologiya%20va%20xorijiy%20tillar%20instituti!5e0!3m2!1sru!2s!4v1728054121217!5m2!1sru!2s"
              allowFullScreen
              loading="lazy"
              className="w-full h-64 md:h-96 border-2 border-[#213972] rounded-xl"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#213972] rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Buxoro Xalqaro Universiteti logo"
                className="w-48 md:w-56 h-auto"
              />
            </div>

            {/* Phone Number */}
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <FaPhoneAlt className="text-white mr-3 text-lg" />
              <a
                href="tel:+998553099999"
                className="text-white hover:text-gray-200 text-lg md:text-xl font-semibold transition-colors"
              >
                +998 (55) 309-99-99
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/bxu.uz?igsh=bHQ3YmRvajR1aXYy"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
              <a
                href="https://t.me/bxu_uz"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="text-white text-2xl" />
              </a>
              <a
                href=""
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/20 text-center text-white/80">
            <p>
              © {new Date().getFullYear()} Buxoro Xalqaro Universiteti. Barcha
              huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
