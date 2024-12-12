import React, { useState, useEffect } from "react";
import heroBg from "../assest/hero-bg.jpg";
import aboutimg from "../assest/Burger bacon.jpg";
import secsion2 from "../assest/secsion2.jpg";
import secsion3 from "../assest/secsion3.jpg";
import sl2 from "../assest/sl333.jpeg";
import sl3 from "../assest/pexels-valeriya-1639565.jpg";
import sl4 from "../assest/aboutnew.jpg";
import sl5 from "../assest/43311-cheeseburger-fast-aboutnew.jpg";

import "./Aboutmodule.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const captions = [
    "One click for delicious meals!",
    "Discover great flavors!",
    "Favorite flavors in one place!",
    "Perfect meal experience!",
    "Fast, delicious, delivered right to your door!",
  ];

  const slides = [
    { src: heroBg, alt: "First slide" },
    { src: sl2, alt: "Second slide" },
    { src: sl3, alt: "Third slide" },
    { src: sl4, alt: "Fourth slide" },
    { src: sl5, alt: "Fifth slide" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Hero Area */}
      <div>
        <div className="container mx-auto mt-5">
          <h2
            className="text-right text-red-500 text-xl mb-4"
            style={{
              fontFamily: "'Oleo Script', cursive",
              fontStyle: "italic",
              fontSize: "1.4rem",
            }}
          >
            {captions[currentSlide]}
          </h2>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                  style={{ height: "650px" }}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-5/6 h-full object-cover"
                    style={{
                      borderRadius: "0",
                      boxShadow: "none",
                    }}
                  />  
                </div>
              ))}
            </div>
            {/* Nút điều khiển trước */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              aria-label="Previous Slide"
            >
              &#10094;
            </button>
            {/* Nút điều khiển sau */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              aria-label="Next Slide"
            >
              &#10095;
            </button>
            {/* Chỉ số slide */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-red-500" : "bg-gray-300"}`}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-white shadow-md"></header>
      {/* End Header Section */}

      {/* About Section */}
      <section className="about_section py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="md:w-1/2 p-4">
              <div className="img-box">
                <img
                  src={aboutimg}
                  alt="About Us"
                  className="w-full h-1/2 rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-4">
              <div className="detail-box flex flex-col h-full overflow-hidden">
                <div className="heading_container flex-grow mb-4">
                  <h2 className="text-3xl text-black text-center overflow-hidden">
                    We Are HUST
                  </h2>
                </div>
                <div className="text-2xl font-semibold uppercase text-red-500 text-center pb-3">
                  Lời giới thiệu chung
                </div>
                {/* Sứ mệnh và tầm nhìn */}
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md">
                  <ul className="space-y-2 italic text-center">
                    <li className="text-lg font-bold text-gray-800">
                      Sứ mệnh và tầm nhìn
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg mt-2">
                      <strong>Sứ mệnh: </strong> Tạo ra món ăn nhanh nhưng vẫn
                      đảm bảo dinh dưỡng, phục vụ mọi đối tượng khách hàng, từ
                      trẻ em đến người lớn.
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg">
                      <strong>Tầm nhìn: </strong> Trở thành chuỗi cửa hàng ăn
                      nhanh đáng tin cậy và phổ biến nhất trong khu vực.
                    </li>
                  </ul>
                </div>

                {/* Lí do thành lập */}
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md mt-4">
                  <ul className="space-y-2 italic text-center">
                    <li className="text-lg font-bold text-gray-800">
                      Lí do thành lập
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg mt-2">
                      Xuất phát từ đam mê với món ăn nhanh của người sáng lập.
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg">
                      Mong muốn thay đổi cách mọi người nghĩ về "đồ ăn nhanh":
                      không chỉ nhanh mà còn lành mạnh và đầy đủ dinh dưỡng.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* About Section 2 */}
      <section className="about_section py-12 bg-slate-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="md:w-1/2 p-4">
              <div className="img-box">
                <img
                  src={secsion2}
                  alt="Our Team"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-4">
              <div className="detail-box flex flex-col h-full overflow-hidden">
                <div className="heading_container flex-grow mb-4">
                  <h2 className="text-3xl text-black text-center overflow-hidden">
                    We Are HUST
                  </h2>
                </div>
                <div className="text-2xl font-semibold uppercase text-red-500 text-center pb-3">
                  Đội ngũ của chúng tôi
                </div>
                {/* Nhân viên phục vụ */}
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md">
                  <ul className="space-y-2 italic text-black text-center">
                    <li className="text-lg font-bold text-gray-800">
                      Nhân viên phục vụ
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg mt-2">
                      <strong>Đào tạo chuyên nghiệp: </strong> Tất cả nhân viên
                      đều được đào tạo về cách thức phục vụ chuyên nghiệp và
                      thân thiện.
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg">
                      <strong>Tương tác với khách hàng: </strong> Tạo môi trường
                      thân thiện, cởi mở cho khách hàng.
                    </li>
                  </ul>
                </div>

                {/* Đội ngũ chăm sóc khách hàng */}
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md mt-4">
                  <ul className="space-y-2 italic text-black text-center">
                    <li className="text-lg font-bold text-gray-800">
                      Đội ngũ chăm sóc khách hàng
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg mt-2">
                      <strong>Luôn sẵn sàng hỗ trợ: </strong> Đảm bảo rằng mọi
                      vấn đề hoặc thắc mắc của khách hàng đều được giải quyết
                      nhanh chóng.
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg">
                      <strong>Chính sách hoàn trả: </strong> Thể hiện tính công
                      bằng với chính sách hoàn trả và giải quyết các khiếu nại.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section 2 */}

      {/* About Section 3 */}
      <section className="about_section py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="md:w-1/2 p-4">
              <div className="img-box">
                <img
                  src={secsion3}
                  alt="Thank You"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-4">
              <div className="detail-box flex flex-col h-full overflow-hidden">
                <div className="heading_container flex-grow mb-4">
                  <h2 className="text-3xl text-black text-center overflow-hidden">
                    We Are HUST
                  </h2>
                </div>
                <div className="text-2xl font-semibold uppercase text-red-500 text-center pb-3">
                  Lời Cảm Ơn và Kêu Gọi Hành Động
                </div>
                {/* Lời cảm ơn chân thành */}
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md">
                  <ul className="space-y-2 italic text-center">
                    <li className="text-lg font-bold text-gray-800">
                      Lời cảm ơn chân thành
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg mt-2">
                      Gửi lời cảm ơn chân thành đến khách hàng vì đã ủng hộ và
                      đồng hành cùng cửa hàng trong suốt chặng đường phát triển.
                    </li>
                  </ul>
                </div>

                {/* Kêu gọi khách hàng tiếp tục lựa chọn */}
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md mt-4">
                  <ul className="space-y-2 italic text-center">
                    <li className="text-lg font-bold text-gray-800">
                      Kêu gọi khách hàng tiếp tục lựa chọn
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg mt-2">
                      <strong>Thử nghiệm ngay hôm nay: </strong> "Hãy đến với
                      chúng tôi để thưởng thức ngay những món ăn ngon lành và
                      tận hưởng trải nghiệm dịch vụ tuyệt vời!"
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg">
                      <strong>
                        Mời đăng ký chương trình khách hàng thân thiết:{" "}
                      </strong>{" "}
                      Đưa ra lợi ích của việc đăng ký chương trình (như giảm
                      giá, quà tặng sinh nhật).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section 3 */}
    </div>
  );
};

export default About;
