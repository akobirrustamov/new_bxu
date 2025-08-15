import React, { useState, useEffect } from "react";
import ApiCall, { baseUrl } from "../../config/index";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Telefon raqamini formatlash uchun funksiya
  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // Agar qiymat +998 dan boshlanmasa yoki bo'sh bo'lsa, +998 ni qo'shamiz
    if (!value.startsWith("+998")) {
      setFormData({ ...formData, phone: "+998" });
      return;
    }

    // Faqat raqamlar va + belgisiga ruxsat berish
    const cleanedValue = value.replace(/[^0-9+]/g, "");

    // Umumiy uzunlik +998 dan keyin 9 ta raqam (jami 13 belgi)
    const formattedValue =
      cleanedValue.length > 13 ? cleanedValue.substring(0, 13) : cleanedValue;

    setFormData({ ...formData, phone: formattedValue });
  };

  // Boshqa inputlar uchun umumiy o'zgarish funksiyasi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Telefon raqamini tekshirish (9 ta raqam bo'lishi kerak +998 dan keyin)
    if (formData.phone.length !== 13) {
      alert("Iltimos, to'liq telefon raqamini kiriting (+998XXXXXXXXX)");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await ApiCall(
        `/api/v1/message`,
        "POST",
        formData,
        null,
        true
      );

      setSubmitSuccess(true);
      setFormData({ name: "", phone: "+998", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error);
      alert(
        "Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left side text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#213972] mb-3 sm:text-left text-center">
            Ariza topshirish
          </h2>
          <p className="text-[#213972] sm:w-[400px] sm:text-left text-center text-base">
            Hoziroq ariza qoldiring - biz sizga imkoniyatlar haqida batafsil
            ma'lumot beramiz!
          </p>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2">
          {submitSuccess ? (
            <div className="p-4 bg-green-100 text-green-800 rounded shadow text-center">
              ✅ Ma'lumotlaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan
              bog'lanamiz.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ismingizni kiriting"
                  className="w-full border border-[#213972] text-[#213972] rounded-md px-4 py-2 placeholder-[#213972] focus:outline-none focus:ring-2 focus:ring-[#213972]"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="+998 XX XXX XX XX"
                  className="w-full border border-[#213972] text-[#213972] rounded-md px-4 py-2 placeholder-[#213972] focus:outline-none focus:ring-2 focus:ring-[#213972]"
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Xabar"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="resize-none w-full border border-[#213972] text-[#213972] rounded-md px-4 py-2 placeholder-[#213972] focus:outline-none focus:ring-2 focus:ring-[#213972]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#213972] hover:bg-[#1a2f5f] text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Yuborilmoqda...
                  </span>
                ) : (
                  "Ro'yxatdan o'tish"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
