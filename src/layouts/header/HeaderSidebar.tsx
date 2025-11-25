import { Fragment } from "react";

const HeaderSidebar = ({ open, close }) => {
  return (
    <Fragment>
      <section
        className={`header-widget-sidebar ${open ? "open_sidebar" : ""}`}
      >
        <div className="wrapper-box">
          <div className="content-wrapper">
            <div
              className="header-widget-sidebar-close"
              onClick={() => close()}
            >
              <span className="far fa-times" />
            </div>
            <div className="about-widget widget">
              <div className="logo">
                <img src="assets/images/logo-light3.png" alt="" />
              </div>
              <div className="text">
                Welcome to Grace Ethiopian Evangelical Church Nashville — a
                place to grow in faith, find hope, and experience God’s love
                together.
              </div>
            </div>
            <div className="footer-widget-item recent-news-widget widget">
              <h4>Build generation</h4>
              <div className="footer-widget-news">
                <ul>
                  <li>
                    <div className="img-box">
                      <img src="assets/images/resource/footer-3.png" alt="" />
                    </div>
                    <div className="text-box">
                      {/* <p>
                        <span className="far fa-calendar-alt" />
                        24th January 2021
                      </p> */}
                      <h6>
                        <a href="#">
                          We can build anything in <br />
                          hill ground or building.
                        </a>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img src="assets/images/resource/footer-4.png" alt="" />
                    </div>
                    <div className="text-box">
                      {/* <p>
                        <span className="far fa-calendar-alt" />
                        24th January 2021
                      </p> */}
                      <h6>
                        <a href="#">
                          We can build anything in <br />
                          hill ground or building.
                        </a>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget contact-widget">
              <div className="footer-widget-item">
                <div className="title">
                  <h2>About Us</h2>
                </div>
                <div className="our-info">
                  <div className="text">
                    <p>
                      We believe in the authority of Scripture, the power of the
                      Gospel, and living out our faith daily with love and
                      integrity.
                    </p>
                  </div>
                </div>
                <div className="icon-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="far fa-map-marker-alt" />
                      </div>
                      <div className="text">
                        5227 Murfreesboro Rd, La Vergne, TN 37086
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="far fa-envelope" />
                      </div>
                      <div className="text">hotline@gmail.com</div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="far fa-phone" />
                      </div>
                      <div className="text">(615) 485-1516</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default HeaderSidebar;
