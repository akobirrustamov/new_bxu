import React from "react";
import { FaBook, FaUniversity, FaFileContract, FaClock, FaCommentAlt, FaBed } from "react-icons/fa";

const items = [
    { icon: <FaUniversity size={24} />, title: "Hemis platformasi", link: "https://student.hemis.uz/dashboard/login" },
    { icon: <FaBook size={24} />, title: "E-kutubxona", link: "https://library.buxpxti.uz/" },
    { icon: <FaFileContract size={24} />, title: "Shartnoma olish", link: "https://t.me/ulugbek_ravshanovich" },
    {
        icon: <FaClock size={24} />, title: "Dars jadvali", link: "https://student.hemis.uz/dashboard/login"
    },
    { icon: <FaCommentAlt size={24} />, title: "Taklif va shikoyatlar", link: "https://t.me/shuxrat221_004" },
    { icon: <FaBed size={24} />, title: "Talabalar yotoqxonasi", link: "https://t.me/Shahriyoruzp" },
];

function UsefulInfo() {
    return (
        <div className="bg-white px-4 py-10 sm:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto text-left">
                <h2 className="text-3xl font-bold text-[#213972] mb-3">Foydali ma'lumotlar</h2>
                <p className="text-[#213972] text-base sm:text-lg mb-10 max-w-3xl">
                    Bu nafaqat talabalar hayoti markazi, balki turli madaniyatlar kesishmasi hamda umrbodiy do'stlar orttiriladigan dargoh.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, idx) => (
                        <a href={item.link}>
                            <div
                                key={idx}
                                className="flex items-center bg-[#f7f8fa] p-5 rounded-xl shadow-sm hover:shadow-md transition group cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-[#0c1d53] rounded-lg flex items-center justify-center shadow-xl group-hover:scale-105 transition">
                                    <span className="text-white">{item.icon}</span>
                                </div>
                                <span className="ml-4 text-[16px] font-medium text-[#0c1d53] group-hover:underline">
                                    {item.title}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UsefulInfo;
