// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// your layouts
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
// import Header3 from "@/src/layouts/header/Header3";
// slider configs (keep your file as is)
import { banner1, fiveItemCarousel, testimonialSlider } from "@/sliderProps";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tsega Church — Home</title>
        <link rel="icon" href="/assets/images/logo-light5.png" />
      </Head>

      <Header />

      {/* HERO */}
      <section className="banner-section-one style-three">
        <Swiper {...banner1} className="banner-section-one-carousel">
          {[
            "/assets/images/main-slider/main-slider-10.png",
            "/assets/images/main-slider/main-slider-8.png",
            "/assets/images/main-slider/main-slider-9.png",
            "/assets/images/main-slider/main-slider-11.png",
          ].map((src, i) => (
            <SwiperSlide key={i}>
              <div className="banner-block-one">
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${src})` }}
                />
                <div className="theme_container">
                  <div className="content-box">
                    <div className="inner-box text-center">
                      <h6 className="banner-slider-sub-title mb-30">
                        <span className="title-sep-left">
                          <img
                            src="/assets/images/resource/icon-11.png"
                            alt=""
                          />
                        </span>
                        Welcome to Grace Ethiopian Evangelical Church of
                        Nashville
                      </h6>
                      <h2 className="banner-slider-title text-center mb-30">
                        <span>Worship • Get together • Love</span> <br /> You
                        belong here.
                      </h2>
                      <div className="banner-slider-text">
                        Join us Sundays at Grace Ethiopian Evangelical Church of
                        Nashville 11:00 AM. We’re a family pursuing Jesus
                        together. <br /> እሁድ በ11:00 ጠዋት በግሬስ ኢትዮጵያ ወንጌላዊያን
                        ቤተክርስቲያን በናሽቪል አብረውን ያምልኩ።
                      </div>
                      <div className="banner-slider-btn"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* QUICK FEATURES */}
      <section className="feature-section">
        <div className="theme_container">
          <div className="row">
            {[
              {
                icon: "flaticon-igloo",
                title: "Sunday Service",
                text: "11:00 AM — All are welcome.",
              },
              {
                icon: "flaticon-polar-bear",
                title: "Kids & Youth",
                text: "Safe, fun, Christ-centered.",
              },
              {
                icon: "flaticon-planet-earth",
                title: "Groups",
                text: "Grow in faith & community.",
              },
              {
                icon: "flaticon-environment",
                title: "Outreach",
                text: "Serving our neighbors.",
              },
            ].map((f, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="feature-block">
                  <div className="feature-block_icon">
                    <i className={f.icon} />
                  </div>
                  <h4 className="feature-block_title">{f.title}</h4>
                  <div className="feature-block_text">{f.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION WITH TABS */}
      {/* ABOUT SECTION (church version with tabs + images) */}
      <section className="about-section-three">
        <div className="theme_container">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6">
              <div className="about-three-blcok">
                <div className="image">
                  <img src="/assets/images/resource/icon-3-1.png" alt="" />
                </div>
                <div className="image-two">
                  <img src="/assets/images/resource/about-3-8.png" alt="" />
                </div>
                <div className="image-three">
                  <img src="/assets/images/resource/about-3-6.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="about-block-four">
                <div className="big-title">About Us</div>
                <div className="image">
                  <img src="/assets/images/resource/about-3-5.png" alt="" />
                </div>
                <div className="image">
                  <img src="/assets/images/resource/about-3-7.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-us-block-two style-five">
                <div className="sub-title mb-20">
                  <span className="title-sep-left">
                    <img src="/assets/images/resource/icon-9.png" alt="" />
                  </span>
                  Why Greace Ethiopian Evangelical Church
                </div>
                <h2 className="sec-title mb-20">
                  <span>Know God. Find Family.</span> <br /> Make a Difference.
                </h2>

                <Tab.Container defaultActiveKey={"tab-1"}>
                  <div className="mission-block style-two">
                    <div className="tab-btn">
                      <Nav
                        as={"ul"}
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <Nav.Item as={"li"} role="presentation">
                          <Nav.Link as={"button"} eventKey="tab-1">
                            <span>Our Mission</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} role="presentation">
                          <Nav.Link as={"button"} eventKey="tab-2">
                            <span>Our Beliefs</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} role="presentation">
                          <Nav.Link as={"button"} eventKey="tab-3">
                            <span>Next Steps</span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>

                  <Tab.Content className="tab-content" id="myTabContent">
                    <Tab.Pane className="tab-pane fade" eventKey="tab-1">
                      <div className="text">
                        At Grace Ethiopian Evangelical Church of Nashville, our
                        mission is to lead people into a growing relationship
                        with Jesus, through worship, discipleship, and service.
                      </div>
                      <div className="tab-icon">
                        <ul>
                          <li>
                            <i className="far fa-check" /> Biblical Teaching
                          </li>
                          <li>
                            <i className="far fa-check" /> Spirit-filled Worship
                          </li>
                          <li>
                            <i className="far fa-check" /> Community &
                            Fellowship
                          </li>
                          <li>
                            <i className="far fa-check" /> Serving Others
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane className="tab-pane fade" eventKey="tab-2">
                      <div className="text">
                        We believe in the authority of Scripture, the power of
                        the Gospel, and living out our faith daily with love and
                        integrity.
                      </div>
                      <div className="tab-icon">
                        <ul>
                          <li>
                            <i className="far fa-check" /> God the Father, Son &
                            Holy Spirit
                          </li>
                          <li>
                            <i className="far fa-check" /> Salvation through
                            Christ alone
                          </li>
                          <li>
                            <i className="far fa-check" /> The importance of
                            prayer
                          </li>
                          <li>
                            <i className="far fa-check" /> Loving our neighbors
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane className="tab-pane fade" eventKey="tab-3">
                      <div className="text">
                        Ready to get involved? Explore your next steps in faith:
                        join a small group, serve on a ministry team, or partner
                        in outreach.
                      </div>
                      <div className="tab-icon">
                        <ul>
                          <li>
                            <i className="far fa-check" /> Plan Your Visit
                          </li>
                          <li>
                            <i className="far fa-check" /> Join a Small Group
                          </li>
                          <li>
                            <i className="far fa-check" /> Serve with Us
                          </li>
                          <li>
                            <i className="far fa-check" /> Become a Member
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-thirty-one">
        <div className="theme_container">
          <Swiper
            {...fiveItemCarousel}
            className="five-item-carousel owl-theme owl-carousel"
          >
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/g1.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/g1.png"
                    className="zoom-btn"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/g2.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/g2.png"
                    className="zoom-btn"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/g3.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/g3.png"
                    className="zoom-btn"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/g4.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/g4.png"
                    className="zoom-btn"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/g5.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/g5.png"
                    className="zoom-btn"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />
    </>
  );
}
