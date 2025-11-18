// src/layouts/Footer.tsx
import Link from "next/link";

type FooterProps = {
  extraClass?: string;
};

export default function Footer({ extraClass }: FooterProps) {
  return (
    <footer className={extraClass ?? "main-footer"}>
      <div className="main-footer-top">
        <div className="theme_container">
          <div className="row clearfix">
            {/* Brand / About */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget-item">
                <div className="title">
                  <h2>About Us</h2>
                </div>
                <div className="our-info">
                  <div className="text">
                    <p>
                      We are a community-focused church serving our neighbors
                      with worship, fellowship, and outreach.
                    </p>
                  </div>
                </div>
                <ul className="social-link d-flex gap-3 mt-3">
                  <li>
                    <a href="https://facebook.com/geecn1" aria-label="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@geecn"
                      aria-label="YouTube"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="title">
                  <h2>Quick Links</h2>
                </div>
                <ul className="icon-list">
                  <li>
                    <Link href="/">
                      <a>
                        <i className="far fa-arrow-right" /> Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>
                        <i className="far fa-arrow-right" /> About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/leaders">
                      <a>
                        <i className="far fa-arrow-right" /> Leaders
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/members/register">
                      <a>
                        <i className="far fa-arrow-right" /> Members Register
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>
                        <i className="far fa-arrow-right" /> Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-4 col-md-12">
              <div className="footer-widget-item">
                <div className="title">
                  <h2>Contact</h2>
                </div>
                <ul className="icon-list">
                  <li>
                    <div className="icon">
                      <i className="far fa-map-marker-alt" />
                    </div>
                    <div className="text">
                      5227 Murfreesboro Rd, La Vergne, TN
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="text">
                      <a href="mailto:info@tsegachurch.org">
                        info@tsegachurch.org
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="text">
                      <a href="tel:+10123456789">+1 (615) 485-1516</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="main-footer-bottom">
        <div className="theme_container">
          <div className="main-footer-bottom-inner">
            <ul>
                <li>
                   <a
                    href="https://www.fassiltsegaye.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                    color: '#667eea',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#764ba2'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#667eea'}
                    >
                    Developed by www.fassiltsegaye.com
                </a>
            </li>

            </ul>
            <div className="text">
              <p>
                © {new Date().getFullYear()} GEECN All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
