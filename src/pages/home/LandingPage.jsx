import "./LandingPage.css";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Partnership from "../../components/partnership/Partnership";
import License from "../../components/license/License";
import News from "../../components/news/News";
import Usefullinfo from "../../components/UsefulInfo/UsefulInfo";
import Gallary from "../../components/gallery/Gallery";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import six from "../images/six.png";
import rektor from "../images/rektor.png";
import kazlov from "../images/kazlov.png";
import ali from "../images/ali.png";
import front from "../images/front.png";
import ApplicationForm from "../../components/application-form/ApplicationForm";
import Zoom from "react-reveal/Zoom";

function LandingPage() {
  const directions = {
    tabs: ["Bakalavriyat", "Magistratura", "Doktorantura"],
    data: {
      Bakalavriyat: [
        {
          code: "60310900 - Psixologiya (faoliyat turlari bo'yicha)",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
            {
              type: "Sirtqi",
              duration: "5 yil",
              language: "O'zbek tili",
              price: "12 million",
            },
          ],
        },
        {
          code: "60111800 - Xorijiy til va adabiyoti (tillar bo'yicha)",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
            {
              type: "Masofaviy",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "10 million",
            },
          ],
        },
        {
          code: "60112600 - Maktabgacha va boshlang'ich ta'limda xorijiy til",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
          ],
        },
        {
          code: "60310100 - Iqtisodiyot (tarmoqlar va sohalar bo'yicha)",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
            {
              type: "Kechki",
              duration: "5 yil",
              language: "O'zbek tili",
              price: "14 million",
            },
          ],
        },
        {
          code: "60111400 - O'zbek tili va adabiyoti",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
            {
              type: "Sirtqi",
              duration: "5 yil",
              language: "O'zbek tili",
              price: "12 million",
            },
          ],
        },
        {
          code: "60220300 - Tarix (mamlakatlar va yo'nalishlar bo'yicha)",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
          ],
        },
        {
          code: "60111300 - Musiqa ta'limi",
          programs: [
            {
              type: "Kunduzgi",
              duration: "3 yil",
              language: "O'zbek tili",
              price: "12 million",
            },
            {
              type: "Kechki",
              duration: "5 yil",
              language: "O'zbek tili",
              price: "10 million",
            },
          ],
        },
        {
          code: "60110200 - Maktabgacha ta'lim",
          programs: [
            {
              type: "Kunduzgi",
              duration: "3 yil",
              language: "O'zbek tili",
              price: "12 million",
            },
          ],
        },
        {
          code: "60110500 - Boshlang'ich ta'lim",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
            {
              type: "Sirtqi",
              duration: "5 yil",
              language: "O'zbek tili",
              price: "12 million",
            },
          ],
        },
        {
          code: "60112200 - Jismoniy madaniyat",
          programs: [
            {
              type: "Kunduzgi",
              duration: "3 yil",
              language: "O'zbek tili",
              price: "12 million",
            },
          ],
        },
        {
          code: "60112100 - Milliy g'oya, ma'naviyat asoslari va huquq ta'limi",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
          ],
        },
        {
          code: "60610100 - Axborot tizimlari va texnologiyalari",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "16 million",
            },
            {
              type: "Kechki",
              duration: "5 yil",
              language: "O'zbek tili",
              price: "14 million",
            },
          ],
        },
        {
          code: "61010400 - Turizm",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
          ],
        },
        {
          code: "60110400 - Defektologiya",
          programs: [
            {
              type: "Kunduzgi",
              duration: "4 yil",
              language: "O'zbek tili",
              price: "15 million",
            },
          ],
        },
      ],
      Magistratura: [
        {
          code: "70310901 - Psixologiya",
          programs: [
            {
              type: "Kunduzgi",
              duration: "2 yil",
              language: "O'zbek tili",
              price: "20 million",
            },
          ],
        },
        {
          code: "70310102 - Iqtisodiyot",
          programs: [
            {
              type: "Kunduzgi",
              duration: "2 yil",
              language: "O'zbek tili",
              price: "20 million",
            },
          ],
        },
        {
          code: "70110501 - Ta'lim nazariyasi va metodikasi",
          programs: [
            {
              type: "Kunduzgi",
              duration: "2 yil",
              language: "O'zbek tili",
              price: "20 million",
            },
          ],
        },
        {
          code: "70111301 - Musiqa ta'limi va san'at",
          programs: [
            {
              type: "Kunduzgi",
              duration: "2 yil",
              language: "O'zbek tili",
              price: "20 million",
            },
          ],
        },
        {
          code: "70112201 - Jismoniy tarbiya va sport",
          programs: [
            {
              type: "Kunduzgi",
              duration: "2 yil",
              language: "O'zbek tili",
              price: "20 million",
            },
          ],
        },
        {
          code: "70110101 - Pedagogika nazariyasi",
          programs: [
            {
              type: "Kunduzgi",
              duration: "2 yil",
              language: "O'zbek tili",
              price: "20 million",
            },
          ],
        },
        {
          code: "70111401 - O'zbek tili va adabiyoti",
          programs: [
            {
              type: "Kunduzgi",
              duration: "2 yil",
              language: "O'zbek tili",
              price: "20 million",
            },
          ],
        },
        {
          code: "70230101 - Lingvistika",
          programs: [
            {
              type: "Kunduzgi",
              duration: "2 yil",
              language: "O'zbek tili",
              price: "20 million",
            },
          ],
        },
      ],
      Doktorantura: [],
    },
  };
  const [activeTab, setActiveTab] = useState("Bakalavriyat"); // Default to first tab

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
  return (
    <div>
      <Header />
      <div className="landing-page">
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
        <section id="features">
          <div className="bg-white px-4 sm:px-6 lg:px-16 py-10">
            <h1 className="sm:text-5xl text-3xl font-bold mb-8 text-left text-[#213972]">
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
        </section>
        <div>
          <section id="directions">
            <div class="bg-white px-4 sm:px-6 lg:px-16 py-10 p-8">
              <h1 class="sm:text-5xl text-3xl font-bold mb-8 text-left text-[#213972]">
                Ta'lim yo'nalishlari
              </h1>

              {/* Display programs for active tab */}
              <div className="bg-white pb-12 mx-auto rounded-xl">
                <div className="flex md:w-[412px] w-[327px] bg-[#B0B9CC] rounded-full p-1 mb-8">
                  {Object.keys(directions.data).map((label, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(label)}
                      className={`md:px-6 px-4 py-2 rounded-full font-medium md:text-sm text-[12px] transition-all duration-200 ${
                        activeTab === label
                          ? "bg-[#1D3473] text-white"
                          : "text-white"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {/* Display tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
                  {directions.data[activeTab].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#0C2C64] to-[#004C88] text-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <h3 className="font-bold text-lg mb-4 border-b border-white/30 pb-3 flex items-center">
                        {item.code}
                      </h3>

                      <div className="space-y-4">
                        {item.programs.map((prog, idx) => (
                          <div
                            key={idx}
                            className="bg-white/90 text-[#213972] p-4 rounded-lg border border-gray-100 hover:scale-[1.02] transition-transform duration-200"
                          >
                            <div className="flex justify-between items-start">
                              <p className="font-bold text-sm uppercase tracking-wide text-blue-800">
                                {prog.type}
                              </p>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                {prog.language || prog.lang}{" "}
                                {/* Use whichever field exists */}
                              </span>
                            </div>

                            <div className="flex justify-between items-center mt-3">
                              <div className="flex items-center text-sm">
                                <svg
                                  className="w-4 h-4 mr-1 text-gray-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                                {prog.duration}
                              </div>
                              <div className="text-sm font-bold bg-blue-50 px-3 py-1 rounded-full">
                                {prog.price}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="hidden lg:block px-4 sm:px-6 lg:px-16 py-10 bg-white">
          <h2 className="font-medium text-[45px] leading-[60px] tracking-normal text-left text-[#213972] mb-8">
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
                  <p className="text-[24px] w-[750px] text-[#213972] leading-relaxed">
                    {prof.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Partnership />
        <div className="hidden sm:block">
          <Gallary />
        </div>
        <div className="block sm:hidden">
          <ApplicationForm />
        </div>
        <div>
          <div className="bg-white py-8 px-4 sm:px-6 lg:px-10">
            <div className="bg-[#213972] text-white rounded-[25px] overflow-hidden shadow-lg flex flex-col items-center justify-center lg:flex-row">
              {/* Chapdagi rasm */}
              <div className="pt-4 md:pt-0">
                <img
                  src={front}
                  alt="Universitet binosi"
                  className="border-2 border-white w-[310px] h-[240px] md:w-[500px] md:h-[400px] rounded-[25px] opacity-100"
                />
              </div>

              {/* O'ngdagi matn */}
              <div className="lg:w-1/2 w-full p-6 lg:p-8 flex flex-col text-center md:text-left">
                <h2 className="text-xl sm:text-4xl font-semibold mb-4">
                  Universitet haqida
                </h2>
                <p className="text-sm sm:text-2xl leading-relaxed">
                  Prezidentimiz SH.M.Mirziyoyevning 2021-yil 21-22 yanvar
                  kunlari Buxoro viloyatiga tashrifi davomida va Xalq
                  deputatlari viloyat Kengashining navbatdagi tashqari
                  sessiyasida bergan topshiriqlari bo'yicha 4-sonli bayonining
                  98-bandiga asosan tashkil etilgan.
                  <br />
                  Oliygohimizda bugungi kunda 3 ta kampus, umumiy hisobda 6000
                  o'rinli o'quv binosi hamda 500 o'rinli talabalar yotoqxonasi
                  mavjud. Bizda jami 16 ta bakalavr, 8 ta magistratura hamda 6
                  ta ta'lim shakli bo'yicha DOKTORANTURA (Psixologiya,
                  Filologiya, Pedagogika fanlari bo'yicha) mavjud.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section id="license">
          <License />
        </section>
        <div className="hidden sm:block">
          <ApplicationForm />
          <Usefullinfo />
          <News />
        </div>
        <section id="location">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
