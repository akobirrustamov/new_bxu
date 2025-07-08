import React from "react";
import logo from "./logo.png";
function Footer() {
  return (
    <div className="bg-white p-6 md:p-8 lg:p-10 shadow-md">
      <div className="max-w-6xl mx-auto">
        <div className={"items-center justify-center w-full"}>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Buxoro Xalqaro Universiteti manzili
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.8958577959097!2d64.42846967583635!3d39.80932777154381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5009003f1c477b%3A0x920d498788a13e58!2sBuxoro%20psixologiya%20va%20xorijiy%20tillar%20instituti!5e0!3m2!1sru!2s!4v1728054121217!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
            className={"my-2 w-[700px]"}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex py-2 px-4 justify-around flex-wrap space-y-2 bg-[#213972] rounded-2xl  ">
          <div className="flex items-start">
            <img className={"w-64"} src={logo} />
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-800 mr-2">+</span>
            <a
              href="tel:+998553099999"
              className="text-blue-600 hover:text-blue-800"
            >
              +998 (55) 309-99-99
            </a>
          </div>
          <div>icon instagram icon telegram icon youtube</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
