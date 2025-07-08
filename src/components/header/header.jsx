import React, { useState, useEffect } from "react";
import logo from "../../pages/images/logo.png";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll ni bloklash/ochish
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div className="logo-container">
          <a href="/public" className="logo-link">
            <img src={logo} alt="University Logo" className="logo" />
            <span className="university-name">
              Buxoro Xalqaro <br /> Universiteti
            </span>
          </a>
        </div>

        {/* Mobil menyu tugmasi */}
        <button
          className="sm:hidden block p-2 text-white focus:outline-none z-50"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobil menyu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[rgba(13,27,42,0.95)] z-40 flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center space-y-8 text-white text-xl">
              <li className="nav-item">Afzalliklar</li>
              <li className="nav-item">Yo'nalishlar</li>
              <li className="nav-item">Litsenziya</li>
              <li className="nav-item">Joylashuv</li>
            </ul>

            <a
              href="https://qabul.bxu.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8"
            >
              <button className="px-10 py-3 text-white border-2 border-white rounded-full font-semibold text-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#c0392b] hover:border-[#c0392b]">
                Ariza topshirish
              </button>
            </a>
          </div>
        )}

        {/* Desktop menyu */}
        <nav className="hidden sm:flex items-center">
          <ul className="flex space-x-6">
            <li className="nav-item">Afzalliklar</li>
            <li className="nav-item">Yo'nalishlar</li>
            <li className="nav-item">Litsenziya</li>
            <li className="nav-item">Joylashuv</li>
          </ul>

          <a
            href="https://qabul.bxu.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6"
          >
            <button className="px-10 py-3 text-white border-2 border-white rounded-full font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#c0392b] hover:border-[#c0392b]">
              Ariza topshirish
            </button>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
