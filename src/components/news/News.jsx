import React, { useEffect, useState } from "react";
import ApiCall, { baseUrl } from "../../config";
import { useNavigate } from "react-router-dom";

function News() {
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await ApiCall("/api/v1/news", "GET", null, null, true);
      setNewsList(response.data);
    } catch (error) {
      setNewsList([]);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Function to truncate text to 100-120 characters at the last space
  const truncateText = (text) => {
    const maxLength = 90;
    const minLength = 70;

    if (text.length <= maxLength) return text;

    let truncated = text.substr(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");

    // If we find a space within our acceptable range
    if (lastSpace > minLength) {
      truncated = truncated.substr(0, lastSpace);
    } else {
      // If no good space found, just cut at maxLength
      truncated = text.substr(0, maxLength);
    }

    return truncated + "...";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="text-start mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Yangiliklar</h1>
        <div className="w-20 h-1 bg-blue-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {newsList?.slice(0, 4).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/news-detail/${item.id}`)}
            className="cursor-pointer border border-blue-500 rounded-xl shadow hover:shadow-lg transition duration-300 bg-white overflow-hidden flex flex-col"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
              />
            </div>

            <div className="p-4 flex flex-col justify-between flex-grow bg-[#F8F8F8]">
              <h3
                className="text-left text-sm font-semibold text-gray-800 mb-2 hover:text-blue-600 transition"
                title={item.title}
              >
                {truncateText(item.title)}
              </h3>

              <p className="text-left text-xs text-gray-500 mt-auto">
                {new Date(item.createdAt).toLocaleString("uz-UZ", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
