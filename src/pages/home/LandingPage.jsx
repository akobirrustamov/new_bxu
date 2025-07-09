import "./LandingPage.css";
import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import Partnership from "../../components/partnership/Partnership";
import License from "../../components/license/License";
import News from "../../components/news/News";
<<<<<<< HEAD
import Usefullinfo from "../../components/UsefulInfo/UsefulInfo";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import six from "../images/six.png";
import rektor from "../images/rektor.png";
import kazlov from "../images/kazlov.png";
import ali from "../images/ali.png";
=======
import ApplicationForm from "../../components/application-form/ApplicationForm";

>>>>>>> 479672e (my commit)
function LandingPage() {
  const professors = [
    {
      img: rektor,
      name: "Baratov Sharif Ramazanovich",
      desc: "Buxoro Xalqaro Universiteti rektori, xalqaro psixologiya fanlari akademiyasining vitse-prezidenti, Psixologiya fanlari doktori, Professor",
    },
    {
      img: kazlov,
      name: "Vladimir Vasilyevich Kozlov",
      desc: "Taniqli rus psixologi. U ijtimoiy psixologiya, krizis psixologiyasi va integrativ psixologiya sohalarida faoliyat yuritadi. Ikki marta doktorlik ilmiy darajasini olgan, 1000 dan ortiq ilmiy ishlar, 135 dan ortiq monografiyalar muallifi. Yaroslavl davlat universitetida professor va ilmiy maktab asoschisi. Shuningdek, u xalqaro psixologik konferensiyalar tashkilotchisi va ko'plab doktorantlarga rahbarlik qilgan.",
    },
    {
      img: ali,
      name: "Ali Asqarxon Kosimov",
      desc: "Ali Asqarxon Qosimov, Anqara Yildirim Boyazid universiteti katta ilmiy xodimi, “Sulton Yildirim Boyazid va Amir Temur” xalqaro simpozium tashkiliy qo'mitasi a'zosi. Anqara Yildirim Boyazid universitetining Samarqand davlat universiteti bilan hamkorligi 2020-yildan boshlangan. Ayni shu yilda Anqara Yildirim Boyazid universiteti rektori Ibrohim Aydinlining O'zbekistonga birinchi safari chog'ida O'zbekistonning 8 universiteti bilan hamkorlik o'rnatilgan. Samarqand davlat universiteti ularning asosiysi hisoblanadi.",
    },
  ];
  const items = [
    { img: one, title: "Zamonaviy auditoriyalar" },
    { img: two, title: "Ikkinchi va uchinchi kurs SIRTQI ta'lim" },
    { img: three, title: "Karyera markazi" },
    { img: four, title: "Xalqaro aloqalar" },
    { img: four, title: "Startap va ishlanmalar laboratoriyasi" },
    { img: six, title: "100 mingdan ortiq manbalar" },
  ];
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
    <div>
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
              Universitetdagi startap laboratoriyasida o'z biznes yoki
              texnologik loyihangizni amalga oshirishingiz mumkin!
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

      <div>
        <div className="bg-white px-4 sm:px-6 lg:px-16 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0c1d53] mb-8">
            Nega aynan Buxoro Xalqaro Universiteti?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="text-left relative overflow-hidden rounded-xl shadow-sm group cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full sm:h-[270px] h-[230px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 rounded-xl"></div>
                <span className="absolute bottom-4 left-4 right-4 text-white font-medium text-sm sm:text-base">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <h1>Ta'lim yo'nalishlari</h1>
          </div>
        </div>
        <div className="hidden lg:block px-4 sm:px-6 lg:px-16 py-10 bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c1d53] mb-8">
            Professor o'qituvchilar jamoasi
          </h2>

          <div className="space-y-6 text-left">
            {professors.map((prof, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row bg-[#f7f8fa] rounded-xl shadow-sm overflow-hidden"
              >
                <div className="shrink-0 mb-4 sm:mb-0 sm:mr-8 overflow-hidden rounded-lg">
                  <img
                    src={prof.img}
                    alt={prof.name}
                    className="w-[390px] h-[380px] object-cover"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <h3 className="text-[30px] font-semibold text-[#213972] mb-1">
                    {prof.name}
                  </h3>
                  <p className="text-[24px] w-[750px] text-gray-700 leading-relaxed">
                    {prof.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Partnership />
        <ApplicationForm/>
        <License />
        <Usefullinfo />
        <News />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
