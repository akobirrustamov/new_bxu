import React, { useState, useEffect, useRef } from "react";
import logo from "../../pages/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();
  const toggleButtonRef = useRef();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Agar menyu ochiq bo'lsa VA
      // bosilgan element menyu ichida bo'lmasa VA
      // bosilgan element toggle button bo'lmasa
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const menuLinks = [
    { name: "Afzalliklar", href: "#features" },
    { name: "Yo'nalishlar", href: "#directions" },
    { name: "Litsenziya", href: "#license" },
    { name: "Joylashuv", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 py-4 md:py-6 px-4 md:px-12 transition-all duration-300 ${
        isScrolled ? "bg-[#213972] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center z-50 relative">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 hover:scale-105 transition duration-300"
        >
          <img
            src={logo}
            alt="Logo"
            className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
          />
          <span className="text-white md:text-2xl text-base leading-tight text-left">
            Buxoro Xalqaro <br /> Universiteti
          </span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8">
            {menuLinks.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="text-white font-medium text-xl hover:text-green-500 transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="https://qabul.bxu.uz/" target="_blank" rel="noreferrer">
            <button className="text-lg border border-white rounded-3xl bg-[#213972] py-3 px-6 hover:bg-[#CF0921] hover:scale-105 transition duration-300">
              Ariza topshirish
            </button>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={toggleButtonRef}
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50"
        >
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#213972] bg-opacity-95 z-40 pt-16"
          ref={menuRef}
        >
          <div className="container mx-auto px-4 py-8">
            <ul className="flex flex-col items-center space-y-6">
              {menuLinks.map((item, idx) => (
                <li key={idx} className="w-full">
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="text-white font-medium text-2xl hover:text-green-500 transition duration-300 block py-4 text-center"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="w-full max-w-xs mt-8">
                <a
                  href="https://qabul.bxu.uz/"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <button className="w-full text-lg border-2 border-white rounded-3xl bg-[#213972] py-4 px-6 hover:bg-[#CF0921] transition duration-300">
                    Ariza topshirish
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
