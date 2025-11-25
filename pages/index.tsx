// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
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
            <link rel="icon" href="/assets/images/grace-logo-new.png" />
            <style>{`
    .banner-section-one.style-three {
      display: block !important;
      opacity: 1 !important;
      visibility: visible !important;
      height: auto !important;
      min-height: 600px !important;
    }

    .banner-section-one .swiper-slide {
      min-height: 600px !important;
    }

    .banner-section-one .banner-block-one {
      min-height: 600px !important;
      position: relative !important;
    }

    .event-card {
      cursor: pointer;
    }
    
    .event-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
    }
    
    .dark-mode .event-card {
      background: #1a1a1a !important;
    }
    
    .dark-mode .event-card > div:last-child {
      background: #1a1a1a !important;
    }
    
    .dark-mode .event-card h4 {
      color: #fff !important;
    }
    
    .dark-mode .event-card p {
      color: #ccc !important;
    }

    @media (max-width: 991px) {
      .banner-section-one.style-three {
        min-height: 500px !important;
      }

      .banner-section-one .swiper-slide {
        min-height: 500px !important;
      }

      .banner-section-one .banner-block-one {
        min-height: 500px !important;
      }
    }
  `}</style>
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
            "/assets/images/main-slider/main-slider-14.png",
            "/assets/images/main-slider/main-slider-15.png",
          ].map((src, i) => (
              <SwiperSlide key={i}>
                  <div className="banner-block-one" style={{ position: 'relative', minHeight: '600px' }}>
                      <img
                          src={src}
                          alt="Church banner"
                          style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              zIndex: 0
                          }}
                      />
                      <div className="theme_container" style={{ position: 'relative', zIndex: 1 }}>
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
                        <span>Worship • Get together • Love</span> <br /> እንኳን ወደ ግሬስ ኢትዮጵያ
                        ወንጌላዊያን ቤተክርስቲያን በናሽቪል በደህና መጡ።

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
                              <Nav.Link
                                  as={"button"}
                                  eventKey="tab-1"
                                  style={{
                                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                      color: 'white',
                                      border: '2px solid #10b981',
                                      fontWeight: '600',
                                      padding: '10px 20px',
                                      borderRadius: '8px',
                                      margin: '0 5px'
                                  }}
                              >
                                  <span>Our Mission</span>
                              </Nav.Link>
                          </Nav.Item>

                          <Nav.Item as={"li"} role="presentation">
                              <Nav.Link
                                  as={"button"}
                                  eventKey="tab-2"
                                  style={{
                                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                      color: 'white',
                                      border: '2px solid #f59e0b',
                                      fontWeight: '600',
                                      padding: '10px 20px',
                                      borderRadius: '8px',
                                      margin: '0 5px'
                                  }}
                              >
                                  <span>Our Beliefs</span>
                              </Nav.Link>
                          </Nav.Item>

                          <Nav.Item as={"li"} role="presentation">
                              <Nav.Link
                                  as={"button"}
                                  eventKey="tab-3"
                                  style={{
                                      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                      color: 'white',
                                      border: '2px solid #ef4444',
                                      fontWeight: '600',
                                      padding: '10px 20px',
                                      borderRadius: '8px',
                                      margin: '0 5px'
                                  }}
                              >
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

        {/* Upcoming Events Section */}
        <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
            <div className="theme_container">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                        Upcoming Events
                    </h2>
                    <p style={{ fontSize: "1.1rem", color: "#666" }}>
                        Join us for these exciting church activities
                    </p>
                </div>

                <div className="row">
                    {[
                        {
                            date: "Dec 15",
                            year: "2024",
                            icon: "📅",
                            title: "Family Movie Night",
                            description: "Join us for popcorn, games, and a family-friendly film",
                            time: "6:00 PM - 9:00 PM",
                            location: "Fellowship Hall"
                        },
                        {
                            date: "Jan 20-22",
                            year: "2025",
                            icon: "💑",
                            title: "Marriage Retreat",
                            description: "Weekend getaway for couples to strengthen their marriage",
                            time: "Weekend Getaway",
                            location: "Mountain View Resort"
                        },
                        {
                            date: "Feb 2",
                            year: "2025",
                            icon: "👶",
                            title: "Child Dedication",
                            description: "Dedicate your children to the Lord in a special ceremony",
                            time: "During Sunday Service",
                            location: "Main Sanctuary"
                        }
                    ].map((event, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div
                                className="event-card"
                                style={{
                                    background: "white",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                    transition: "transform 0.3s",
                                    height: "100%"
                                }}
                            >
                                <div style={{
                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    padding: "30px",
                                    color: "white",
                                    textAlign: "center"
                                }}>
                                    <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
                                        {event.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: "1.5rem",
                                        marginBottom: "10px",
                                        color: "white",
                                        fontWeight: "600"
                                    }}>
                                        {event.date}
                                    </h3>
                                    <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                                        {event.year}
                                    </p>
                                </div>
                                <div style={{ padding: "30px" }}>
                                    <h4 style={{
                                        fontSize: "1.3rem",
                                        marginBottom: "15px",
                                        fontWeight: "600"
                                    }}>
                                        {event.title}
                                    </h4>
                                    <p style={{
                                        fontSize: "0.95rem",
                                        color: "#666",
                                        marginBottom: "15px",
                                        lineHeight: "1.6"
                                    }}>
                                        {event.description}
                                    </p>
                                    <div style={{ fontSize: "0.9rem", color: "#667eea" }}>
                                        <p style={{ marginBottom: "5px" }}>
                                            ⏰ {event.time}
                                        </p>
                                        <p>📍 {event.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <Link
                        href="/events"
                        className="primary_btn-two"
                        style={{
                            padding: "14px 40px",
                            fontSize: "1.1rem",
                            display: "inline-block",
                            textDecoration: "none"
                        }}
                    >
                        View All Events
                    </Link>
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
                  <img src="assets/images/resource/kebero.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/kebero.png"
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
                  <img src="assets/images/resource/satisfy5.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/satisfy5.png"
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
                  <img src="assets/images/resource/satisfy3.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/satisfy3.png"
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
                  <img src="assets/images/resource/satisfy2.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/satisfy2.png"
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
                  <img src="assets/images/resource/satisfy1.png" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/satisfy1.png"
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
