import "./LandingPage.css";
import React, { useEffect } from "react";
import Header from "../../components/header/header";
function LandingPage() {
  useEffect(() => {
    // Header scroll effekti
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    // Feature-point animatsiyalari
    const featurePoints = document.querySelectorAll(".feature-point");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    featurePoints.forEach((point) => {
      point.style.opacity = "0";
      point.style.transform = "translateY(20px)";
      point.style.transition = "all 0.6s ease";
      observer.observe(point);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <div className="landing-page">
      <div>
        <Header />
      </div>
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Xalqaro darajadagi Universitet talabasi bo'ling!
          </h1>

          <div className="feature-point">
            Yuqori ta'lim sifati, zamonaviy o'quv auditoriyalari va zamonaviy
            muhitga munosib yuqori salohiyatli professor o'qituvchilar
          </div>

          <div className="feature-point">
            Eng yuqori maosh to'lanadigan IT kasblari (AI, Kiberxavfsizlik,
            Ma'lumotlar ilmi, Raqamli biznes)
          </div>

          <div className="feature-point">
            Universitetdagi startap laboratoriyasida o'z biznes yoki texnologik
            loyihangizni amalga oshirishingiz mumkin!
          </div>

          <div className="action-buttons">
            <a href="https://qabul.bxu.uz/" target="_blank">
              <button className="primary-button">Ariza topshirish</button>
            </a>
            <button className="secondary-button">
              Sirtqi va masofaviy ta'lim ham mavjud!
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
