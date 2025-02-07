import React from "react";
const articles = [
  {
    id: 1,
    category: "Architecture",
    image: "/about/artical1.png", // Replace with actual image URL
    title: "Home Staging Tips to Attract Buyers Quickly",
    author: "Brooklyn Simmons",
    date: "July 9, 2024",
    authorImg: "/about/ar1.png",
  },
  {
    id: 2,
    category: "Building",
    image: "/about/artical2.png", // Replace with actual image URL
    title: "Navigating the Mortgage Approval Process",
    author: "Jerome Bell",
    date: "July 9, 2024",
    authorImg: "/about/ar2.png",
  },
  {
    id: 3,
    category: "Real Estate",
    image: "/about/artical3.png", // Replace with actual image URL
    title: "The Ultimate Checklist for First-Time Home Buyers",
    author: "Ralph Edwards",
    date: "July 9, 2024",
    authorImg: "/about/ar3.png",
  },
  {
    id: 4,
    category: "Architecture",
    image: "/about/artical1.png", // Replace with actual image URL
    title: "Home Staging Tips to Attract Buyers Quickly",
    author: "Brooklyn Simmons",
    date: "July 9, 2024",
    authorImg: "/about/ar1.png",
  },
  {
    id: 5,
    category: "Building",
    image: "/about/artical2.png", // Replace with actual image URL
    title: "Navigating the Mortgage Approval Process",
    author: "Jerome Bell",
    date: "July 9, 2024",
    authorImg: "/about/ar2.png",
  },
  {
    id: 6,
    category: "Real Estate",
    image: "/about/artical3.png", // Replace with actual image URL
    title: "The Ultimate Checklist for First-Time Home Buyers",
    author: "Ralph Edwards",
    date: "July 9, 2024",
    authorImg: "/about/ar3.png",
  },
  {
    id: 7,
    category: "Architecture",
    image: "/about/artical1.png", // Replace with actual image URL
    title: "Home Staging Tips to Attract Buyers Quickly",
    author: "Brooklyn Simmons",
    date: "July 9, 2024",
    authorImg: "/about/ar1.png",
  },
  {
    id: 8,
    category: "Building",
    image: "/about/artical2.png", // Replace with actual image URL
    title: "Navigating the Mortgage Approval Process",
    author: "Jerome Bell",
    date: "July 9, 2024",
    authorImg: "/about/ar2.png",
  },
  {
    id: 9,
    category: "Real Estate",
    image: "/about/artical3.png", // Replace with actual image URL
    title: "The Ultimate Checklist for First-Time Home Buyers",
    author: "Ralph Edwards",
    date: "July 9, 2024",
    authorImg: "/about/ar3.png",
  },
];
const BlogScreen = () => {
  return (
    <div>
      <section className="md:py-16 px-4 lg:px-32">
        <div className="text-center mb-10">
          <h2 className="text-[64px] font-abhaya font-bold text-center text-[#020617] mb-1">
            Latest <span className="text-[#FF6700]">Articles</span>
          </h2>
          <p className="text-[#000000] text-[18px] font-[400] font-poppins">
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
      <span className="absolute top-4 left-4 bg-transparent border border-[#003366] text-[#003366] text-sm font-medium px-3 py-1 rounded-[4px]">
        {article.category}
      </span>
    </div>
    <div>
      <h3 className="text-[20px] font-semibold text-[#020617] mb-2 font-poppins">
        {article.title}
      </h3>
      <hr className="border-[#D9D9D9] my-3 mb-5" />
      <div className="flex items-center justify-between bg-[#ECECEC] rounded-md p-2">
        <div className="flex items-center">
          <img
            src={article.authorImg} // Replace with author image URL
            alt={article.author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-[16px] font-[600] font-poppins text-[#020617]">
              {article.author}
            </p>
            <p className="text-[14px] font-[400] font-poppins text-[#6E6E6E]">
              {article.date}
            </p>
          </div>
        </div>
        <button className="text-orange-500">
          <img src="/about/Vector.png" alt="vector" />
        </button>
      </div>
    </div>
  </div>
);
