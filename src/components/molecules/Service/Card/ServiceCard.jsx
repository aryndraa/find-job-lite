import React from "react";
import { AiFillHeart, AiOutlineTeam } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = ({ searchQuery }) => {
  const serviceData = [
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-young-happy-woman-glasses_1153-6309.jpg",
      serviceImage: "https://img.freepik.com/free-photo/female-web-developer_53876-15019.jpg",
      title: "Data Analysis with Python",
      author: "Emma Bright",
      likes: 2400,
      visitors: 50,
      price: "180.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg",
      serviceImage: "https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg",
      title: "Python for Data Science",
      author: "Xavier Dreams",
      likes: 1903,
      visitors: 20,
      price: "120.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-smiling-confident-businessman_53419-548.jpg",
      serviceImage: "https://img.freepik.com/free-photo/web-development-code_53876-18009.jpg",
      title: "Full-Stack Web Development",
      author: "Lucas Bright",
      likes: 3000,
      visitors: 45,
      price: "250.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-happy-asian-woman_1098-18218.jpg",
      serviceImage: "https://img.freepik.com/free-photo/social-media-marketing_53876-18384.jpg",
      title: "Social Media Marketing Strategy",
      author: "Maya Chen",
      likes: 1500,
      visitors: 30,
      price: "100.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-african-american-man-casual-outfit_181624-12682.jpg",
      serviceImage: "https://img.freepik.com/free-photo/ux-ui-design-concept_53876-12218.jpg",
      title: "UI/UX Design for Beginners",
      author: "Jordan Lee",
      likes: 2100,
      visitors: 60,
      price: "200.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-young-woman-smiling_1154-1900.jpg",
      serviceImage: "https://img.freepik.com/free-photo/graphic-design-tools_53876-12387.jpg",
      title: "Graphic Design Essentials",
      author: "Sophia Grace",
      likes: 1800,
      visitors: 55,
      price: "130.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/smiling-businessman_13339-189.jpg",
      serviceImage: "https://img.freepik.com/free-photo/seo-concept_53876-13761.jpg",
      title: "SEO Basics for Small Businesses",
      author: "Max Richards",
      likes: 1700,
      visitors: 40,
      price: "90.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-smiling-african-american-woman_181624-182.jpg",
      serviceImage: "https://img.freepik.com/free-photo/content-writing-laptop_53876-14019.jpg",
      title: "Content Writing Masterclass",
      author: "Aisha Jones",
      likes: 2000,
      visitors: 75,
      price: "110.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-bearded-man-suit_53876-101181.jpg",
      serviceImage: "https://img.freepik.com/free-photo/finance-analysis_53876-10185.jpg",
      title: "Financial Analysis for Startups",
      author: "William Steele",
      likes: 2200,
      visitors: 65,
      price: "300.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-young-woman-posing_1154-6701.jpg",
      serviceImage: "https://img.freepik.com/free-photo/marketing-strategy_53876-18384.jpg",
      title: "Digital Marketing Strategy",
      author: "Isabella Green",
      likes: 1800,
      visitors: 45,
      price: "200.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-young-man-glasses_181624-14399.jpg",
      serviceImage: "https://img.freepik.com/free-photo/website-design-development_53876-10186.jpg",
      title: "Frontend Web Development",
      author: "David Smith",
      likes: 2500,
      visitors: 50,
      price: "220.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-bearded-man-suit_53876-101181.jpg",
      serviceImage: "https://img.freepik.com/free-photo/business-presentation-laptop_53876-13384.jpg",
      title: "Pitch Deck Design",
      author: "Jake Turner",
      likes: 1300,
      visitors: 25,
      price: "150.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-african-american-woman_181624-19182.jpg",
      serviceImage: "https://img.freepik.com/free-photo/content-management_53876-14018.jpg",
      title: "Blog Content Management",
      author: "Michelle Hales",
      likes: 1600,
      visitors: 55,
      price: "80.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-smiling-woman-business-attire_181624-12215.jpg",
      serviceImage: "https://img.freepik.com/free-photo/social-media-management_53876-13763.jpg",
      title: "Social Media Management",
      author: "Grace Lee",
      likes: 2100,
      visitors: 70,
      price: "190.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-young-man-smiling_181624-13760.jpg",
      serviceImage: "https://img.freepik.com/free-photo/database-concept_53876-13781.jpg",
      title: "SQL Database Management",
      author: "Chris Evans",
      likes: 1900,
      visitors: 40,
      price: "160.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-african-man-glasses_181624-15648.jpg",
      serviceImage: "https://img.freepik.com/free-photo/photo-editing-software_53876-13687.jpg",
      title: "Photo Editing & Retouching",
      author: "Alex Brown",
      likes: 1250,
      visitors: 35,
      price: "140.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-businessman-wearing-suit_181624-15663.jpg",
      serviceImage: "https://img.freepik.com/free-photo/market-analysis_53876-13786.jpg",
      title: "Market Research & Analysis",
      author: "Brian Thomson",
      likes: 2300,
      visitors: 60,
      price: "280.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-young-woman-beautiful-smile_1154-1901.jpg",
      serviceImage: "https://img.freepik.com/free-photo/branding-design_53876-12384.jpg",
      title: "Branding Design",
      author: "Sophia Wang",
      likes: 1550,
      visitors: 45,
      price: "170.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-happy-young-woman-studio_181624-11092.jpg",
      serviceImage: "https://img.freepik.com/free-photo/voice-over-recording_53876-13872.jpg",
      title: "Professional Voice-Over",
      author: "Ella Martin",
      likes: 2100,
      visitors: 30,
      price: "130.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-young-businessman_181624-18933.jpg",
      serviceImage: "https://img.freepik.com/free-photo/translation-concept_53876-13781.jpg",
      title: "Translation Services (EN/ES)",
      author: "Carlos Ramirez",
      likes: 2400,
      visitors: 75,
      price: "100.000",
    }
  ];

  // Filter berdasarkan query
  const filteredServices = serviceData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredServices.map((service, index) => (
        <div key={index} className="border rounded-lg p-4 transition">
          <div className="flex justify-between items-center gap-3 mb-4">
            <div className="bg-cover h-10 w-10">
              <img
                src={service.authorImage}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <Link to="/service/details-service">
              <div className="cursor-pointer">
                <h1 className="text-sm font-semibold font-poppins">
                  {service.author}
                </h1>
              </div>
            </Link>
            <div className="border border-primary rounded-full p-2 hover:bg-primary transition-all ease-in duration-200 cursor-pointer">
              <MdOutlineFavoriteBorder className="text-primary text-base hover:text-white" />
            </div>
          </div>
          <img
            src={service.serviceImage}
            alt="Service"
            className="rounded-lg w-full h-40 object-cover"
          />
          <div className="mt-3">
            <Link to="/service/details-service">
              <h3 className="text-xl font-bold">{service.title}</h3>
            </Link>
            <div className="flex items-center gap-5 mt-3 mb-3 font-poppins">
              <div className="flex gap-2 items-center">
                <AiFillHeart className="text-primary text-[15px]" />
                <p className="text-[13px] font-medium">{service.likes}</p>
              </div>
              <div className="flex gap-2 items-center">
                <AiOutlineTeam className="text-primary text-base" />
                <p className="text-[13px] font-medium">
                  {service.visitors} Visitors
                </p>
              </div>
            </div>
            <div className="border-b border-[#e8e8e8]"></div>
            <div className="mt-4">
              <h1 className="text-sm font-medium font-poppins">Start From</h1>
              <h1 className="text-xl font-semibold text-primary font-poppins">
                Rp. {service.price}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
