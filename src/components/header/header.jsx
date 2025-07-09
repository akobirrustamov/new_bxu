import React, { useState, useEffect } from "react";
import logo from "../../pages/images/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMenuOpen) {
        setIsMenuOpen(false); // scroll bo‘lsa menyuni yop
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <header
      id="home"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(13,27,42,0.95)] shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 md:px-12 py-4 md:py-6">
        <a href="/" className="flex items-center space-x-3 z-50">
          <img
            src={logo}
            alt="University Logo"
            className="h-12 md:h-20 transition-transform duration-300 hover:rotate-[-6deg]"
          />
          <span className="text-white font-bold text-lg md:text-2xl leading-tight text-left">
            Buxoro Xalqaro <br className="hidden md:block" /> Universiteti
          </span>
        </a>

        <button
          className="lg:hidden text-white focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <a href="#home">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          </a>
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-[rgba(13,27,42,0.98)] z-40 flex flex-col items-center p-4 pt-40">
            <ul className="flex flex-col items-center space-y-8 text-white text-xl w-full max-w-xs">
              {[
                { label: "Afzalliklar", id: "features" },
                { label: "Yo'nalishlar", id: "directions" },
                { label: "Litsenziya", id: "license" },
                { label: "Joylashuv", id: "location" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="w-full text-center py-2 hover:text-[#1abc9c] transition-colors"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleAnchorClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://qabul.bxu.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12"
            >
              <button className="px-10 py-3 text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-[#c0392b] hover:border-[#c0392b] transition-all">
                Ariza topshirish
              </button>
            </a>
          </div>
        )}

        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8 text-white">
            {[
              { label: "Afzalliklar", id: "features" },
              { label: "Yo'nalishlar", id: "directions" },
              { label: "Litsenziya", id: "license" },
              { label: "Joylashuv", id: "location" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleAnchorClick(e, item.id)}
                  className="hover:text-[#1abc9c] transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://qabul.bxu.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8"
          >
            <button className="px-10 py-3 text-white border-2 border-white rounded-full font-semibold hover:bg-[#c0392b] hover:border-[#c0392b] transition-all">
              Ariza topshirish
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
