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
                <img src="assets/images/logo-light.png" alt="" />
              </div>
              <div className="text">
                We Have Over 40 Payment Ways for Locking the Lowest Room Rates.
                No Credit Card Needed! Read Reviews from Verified Guests.
              </div>
            </div>
            <div className="footer-widget-item recent-news-widget widget">
              <h4>Instagram Feeds</h4>
              <div className="footer-widget-news">
                <ul>
                  <li>
                    <div className="img-box">
                      <img src="assets/images/resource/footer-1.jpg" alt="" />
                    </div>
                    <div className="text-box">
                      <p>
                        <span className="far fa-calendar-alt" />
                        24th January 2021
                      </p>
                      <h6>
                        <a href="#">
                          We can build anything ni <br />
                          hill ground or building.
                        </a>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img src="assets/images/resource/footer-2.jpg" alt="" />
                    </div>
                    <div className="text-box">
                      <p>
                        <span className="far fa-calendar-alt" />
                        24th January 2021
                      </p>
                      <h6>
                        <a href="#">
                          We can build anything ni <br />
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
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusanum doloremue laudantiue totame
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
                        4486 Richards Avenue, Modesto CA - 95354
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
                      <div className="text">
                        4486 Richards Avenue, Modesto CA - 95354
                      </div>
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
