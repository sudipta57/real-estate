import React from "react";
const articles = [
  {
    id: 1,
    category: "Architecture",
    image: "/about/artical1.png", // Replace with actual image URL
    title: "Home Staging Tips to Attract Buyers Quickly",
    author: "Brooklyn Simmons",
    date: "July 9, 2024",
  },
  {
    id: 2,
    category: "Building",
    image: "/about/artical2.png", // Replace with actual image URL
    title: "Navigating the Mortgage Approval Process",
    author: "Jerome Bell",
    date: "July 9, 2024",
  },
  {
    id: 3,
    category: "Real Estate",
    image: "/about/artical3.png", // Replace with actual image URL
    title: "The Ultimate Checklist for First-Time Home Buyers",
    author: "Ralph Edwards",
    date: "July 9, 2024",
  },
  {
    id: 4,
    category: "Architecture",
    image: "/about/artical1.png", // Replace with actual image URL
    title: "Home Staging Tips to Attract Buyers Quickly",
    author: "Brooklyn Simmons",
    date: "July 9, 2024",
  },
  {
    id: 5,
    category: "Building",
    image: "/about/artical2.png", // Replace with actual image URL
    title: "Navigating the Mortgage Approval Process",
    author: "Jerome Bell",
    date: "July 9, 2024",
  },
  {
    id: 6,
    category: "Real Estate",
    image: "/about/artical3.png", // Replace with actual image URL
    title: "The Ultimate Checklist for First-Time Home Buyers",
    author: "Ralph Edwards",
    date: "July 9, 2024",
  },
  {
    id: 7,
    category: "Architecture",
    image: "/about/artical1.png", // Replace with actual image URL
    title: "Home Staging Tips to Attract Buyers Quickly",
    author: "Brooklyn Simmons",
    date: "July 9, 2024",
  },
  {
    id: 8,
    category: "Building",
    image: "/about/artical2.png", // Replace with actual image URL
    title: "Navigating the Mortgage Approval Process",
    author: "Jerome Bell",
    date: "July 9, 2024",
  },
  {
    id: 9,
    category: "Real Estate",
    image: "/about/artical3.png", // Replace with actual image URL
    title: "The Ultimate Checklist for First-Time Home Buyers",
    author: "Ralph Edwards",
    date: "July 9, 2024",
  },
];
const BlogScreen = () => {
  return (
    <div>
      <section className="md:py-16 px-4 lg:px-32">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-[64px] font-semibold text-gray-800">
            Latest <span className="text-orange-500">Articles</span>
          </h2>
          <p className="mt-2 md:text-[18px] font-[400]">
            Personalized property recommendations, expert advice, <br />
            throughout the buying or renting process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogScreen;
const ArticleCard = ({ article }) => (
  <div className="bg-white  overflow-hidden">
    <div className="relative">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <span className="absolute top-4 left-4 bg-transparent border border-[#003366] text-[#003366] text-sm font-medium px-3 py-1 rounded-full">
        {article.category}
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {article.title}
      </h3>
      <hr className="border-gray-300 mb-3" />
      <div className="flex items-center justify-between bg-[#ECECEC] rounded-md p-2">
        <div className="flex items-center">
          <img
            src="/about/ar1.png" // Replace with author image URL
            alt={article.author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">
              {article.author}
            </p>
            <p className="text-xs text-gray-500">{article.date}</p>
          </div>
        </div>
        <button className="text-orange-500">&gt;</button>
      </div>
    </div>
  </div>
);
