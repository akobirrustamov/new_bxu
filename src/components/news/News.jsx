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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {newsList?.slice(0, 4).map((item, index) => (
          <div key={index}>
            <div
              onClick={() => navigate(`/news-detail/${item.id}`)}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md cursor-pointer h-full flex flex-col"
            >
              {/* Image with hover effect */}
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                  src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}
                  alt={item.title}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content with title and date */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Title with bottom line */}
                <div className="border-b border-gray-200">
                  <h3
                    className="text-[16px] font-semibold text-gray-800 group-hover:text-blue-600 transition-colors"
                    title={item.title} // Show full title on hover
                  >
                    {truncateText(item.title)}
                  </h3>
                </div>

                {/* Date and optional subtitle */}
                <div className="mt-auto">
                  <p className="text-gray-500 text-sm italic">
                    {formatDate(item.createdAt)}
                  </p>
                  {/* Optional subtitle */}
                  {item.subtitle && (
                    <p className="text-gray-600 mt-2">
                      {truncateText(item.subtitle)}
                    </p>
                  )}
                </div>
              </div>

              {/* Heart icon placeholder */}
              <div className="absolute top-4 right-4 text-red-500 text-2xl">
                {/*👀*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
