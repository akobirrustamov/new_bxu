import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    massage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/v1/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Server error");

      setFormData({ name: "", phone: "", massage: "" });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (error) {
      alert("Xatolik yuz berdi!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left side text */}
        <div className="w-full md:w-1/2 ">
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
            <div className="p-4 bg-green-100 text-green-800 rounded shadow">
              ✅ Ma'lumotlaringiz muvaffaqiyatli yuborildi!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ismingizni kiriting"
                className="w-full border border-[#213972] text-[#213972] rounded-md px-4 py-2 placeholder-[#213972] focus:outline-none focus:ring-2 focus:ring-[#213972]"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+998"
                className="w-full border border-[#213972] text-[#213972] rounded-md px-4 py-2 placeholder-[#213972] focus:outline-none focus:ring-2 focus:ring-[#213972]"
                required
              />

              <textarea
                placeholder="Xabar"
                name="massage"
                value={formData.massage}
                onChange={handleChange}
                className="resize-none w-full border border-[#213972] text-[#213972] rounded-md px-4 py-2 placeholder-[#213972] focus:outline-none focus:ring-2 focus:ring-[#213972]"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#213972] hover:bg-[#1a2f5f] text-white font-semibold py-2 rounded-md transition-all duration-200 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
