import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import heroBg from "../assest/hero-bg.jpg";
import "./Aboutmodule.css";
import aboutimg from "../assest/Burger bacon.jpg";
import secsion2 from "../assest/secsion2.jpg";
import secsion3 from "../assest/secsion3.jpg";
import sl2 from "../assest/sl333.jpeg";
import sl3 from "../assest/pexels-valeriya-1639565.jpg";
import sl4 from "../assest/sl44.webp";
import sl5 from "../assest/Tarte Flambee.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const About = () => {
  const [caption, setCaption] = useState("One click for delicious meals!");

  const captions = [
    "One click for delicious meals!",
    "Discover great flavors!",
    "Favorite flavors in one place!",
    "Perfect meal experience!",
    "Fast, delicious, delivered right to your door!",
  ];

  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleCaptions");

    const handleSlideChange = (event) => {
      const activeIndex = event.to; // Lấy index của slide hiện tại
      setCaption(captions[activeIndex]);
    };

    carouselElement.addEventListener("slid.bs.carousel", handleSlideChange);

    return () => {
      carouselElement.removeEventListener(
        "slid.bs.carousel",
        handleSlideChange
      );
    };
  }, []);

  return (
    <div>
      {/*{/* Hero Area */}
      <div className="hero_area">
        <div className="container mt-5">
          <h2
            className="text-right text-red-500 text-2xl"
            style={{
              fontFamily: "'Oleo Script', cursive",
              fontStyle: "italic",
              fontSize: "1.7rem",
            }}
          >
            {caption}
          </h2>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2500"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={heroBg}
                  alt="First slide"
                  className="d-block w-100 carousel-img"
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img
                  src={sl2}
                  alt="Second slide"
                  className="d-block w-100 carousel-img"
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img
                  src={sl3}
                  className="d-block w-100 carousel-img"
                  alt="Third slide"
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img src={sl4} className="d-block w-100 carousel-img" />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img src={sl5} className="d-block w-100 carousel-img" />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Header Section */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="menu.html">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="about.html">
                      About <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="book.html">
                      Book Table
                    </a>
                  </li>
                </ul>
                <div className="user_option">
                  <a href="" className="user_link">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </a>
                  <a className="cart_link" href="#">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 456.029 456.029"
                      style={{ enableBackground: "new 0 0 456.029 456.029" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4C457.728,97.71,450.56,86.958,439.296,84.91z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                        </g>
                      </g>
                    </svg>
                  </a>
                  <form className="form-inline">
                    <button
                      className="btn my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                  <a href="" className="order_online">
                    Order Online
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* End Header Section */}
      </div>
      {/* About Section */}
      <section className="about_section layout_padding ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box m-4">
                <img src={aboutimg} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2 className="text-3xl text-black text-center">
                    We Are HUST
                  </h2>
                </div>
                <div className="text-2xl font-semibold uppercase text-red-500 text-center pb-3">
                  Lời giới thiệu chung
                </div>
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md ">
                  <ul className="space-y-2 italic text-center bg-center">
                    Sứ mệnh và tầm nhìn
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic mt-2">
                      <strong>Sứ mệnh: </strong> Tạo ra món ăn nhanh nhưng vẫn
                      đảm bảo dinh dưỡng, phục vụ mọi đối tượng khách hàng, từ
                      trẻ em đến người lớn.
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic">
                      <strong>Tầm nhìn: </strong> Trở thành chuỗi cửa hàng ăn
                      nhanh đáng tin cậy và phổ biến nhất trong khu vực.
                    </li>
                  </ul>
                </div>

                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md mt-4">
                  <ul className="space-y-2 italic text-center">
                    Lí do thành lập
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic mt-2">
                      Xuất phát từ đam mê với món ăn nhanh của người sáng lập.
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic">
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

      <section className="about_section layout_padding mt-12 bg-slate-500 text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box m-4">
                <img src={secsion2} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2 className=" text-white text-center pt-3">We Are HUST</h2>
                </div>
                <div className="text-2xl font-semibold uppercase text-red-500 text-center pb-3">
                  Đội ngũ của chúng tôi
                </div>
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md">
                  <ul className="space-y-2 italic text-black text-center">
                    Nhân viên phục vụ
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic mt-2">
                      <strong>Đào tạo chuyên nghiệp: </strong> Tất cả nhân viên
                      đều được đào tạo về cách thức phục vụ chuyên nghiệp và
                      thân thiện.
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic">
                      <strong>Tương tác với khách hàng: </strong> Tạo môi trường
                      thân thiện, cởi mở cho khách hàng.
                    </li>
                  </ul>
                </div>

                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md mt-4">
                  <ul className="space-y-2 italic text-black text-center">
                    Đội ngũ chăm sóc khách hàng
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic mt-2">
                      <strong>Luôn sẵn sàng hỗ trợ: </strong> Đảm bảo rằng mọi
                      vấn đề hoặc thắc mắc của khách hàng đều được giải quyết
                      nhanh chóng.
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic">
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

      <section className="about_section layout_padding mt-12 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box m-4">
                <img src={secsion3} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2 className="text-black text-center">We Are HUST</h2>
                </div>
                <div className="text-2xl font-semibold uppercase text-red-500 text-center pb-3">
                  Lời Cảm Ơn và Kêu Gọi Hành Động
                </div>
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md">
                  <ul className="space-y-2 italic text-center">
                    Lời cảm ơn chân thành
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic mt-2">
                      Gửi lời cảm ơn chân thành đến khách hàng vì đã ủng hộ và
                      đồng hành cùng cửa hàng trong suốt chặng đường phát triển.
                    </li>
                  </ul>
                </div>
                <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md mt-4">
                  <ul className="space-y-2 italic text-center">
                    Kêu gọi khách hàng tiếp tục lựa chọn
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic mt-2">
                      <strong>Thử nghiệm ngay hôm nay: </strong> "Hãy đến với
                      chúng tôi để thưởng thức ngay những món ăn ngon lành và
                      tận hưởng trải nghiệm dịch vụ tuyệt vời!"
                    </li>
                    <li className="p-2 bg-white rounded-lg shadow-md text-gray-700 text-sm font-medium transform transition-all hover:bg-gray-100 hover:text-red-600 hover:scale-105 hover:shadow-lg not-italic">
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
      {/* End About Section */}
    </div>
  );
};

export default About;
