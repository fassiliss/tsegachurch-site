// src/layouts/header/Header.tsx
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "src/components/ThemeToggle";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setNavOpen(false);
    setMinistriesOpen(false);
    setEventsOpen(false);
  };

  return (
    <>
      <header
        className={`main-header header-style-two ${
          isScrolled ? "header-scrolled" : "header-at-top"
        }`}
      >
        <div className="header-upper">
          <div className="header-container-box">
            <div className="inner-container d-flex align-items-center justify-content-between">
              <div className="left-column d-flex align-items-center">
                <div className="logo me-3">
                  <Link href="/" onClick={closeMenu}>
                    <img
                      src="/assets/images/grace-logo-new.png"
                      alt="GEECN"
                      style={{ maxHeight: "60px" }}
                    />
                  </Link>
                </div>

                <button
                  aria-label="Toggle navigation"
                  className="mobile-nav-toggler btn btn-link p-0 d-lg-none"
                  onClick={() => setNavOpen((s) => !s)}
                  style={{
                    border: "none",
                    background: "none",
                    fontSize: "24px",
                    color: "var(--primary-color)",
                  }}
                >
                  <i className={navOpen ? "fas fa-times" : "fas fa-bars"} />
                </button>

                <nav className="main-menu d-none d-lg-block">
                  <ul className="navigation d-flex mb-0">
                    <li>
                      <Link href="/" className="nav-link">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link href="/about" className="nav-link">
                        About
                      </Link>
                    </li>

                    <li>
                      <Link href="/leaders" className="nav-link">
                        Leaders
                      </Link>
                    </li>

                    <li>
                      <Link href="/members/register" className="nav-link">
                        Members
                      </Link>
                    </li>

                    <li className="dropdown">
                      {/* Not a real link -> use button */}
                      <button type="button" className="nav-link">
                        Ministries <i className="fa fa-angle-down ms-1" />
                      </button>

                      <ul className="submenu">
                        <li>
                          <Link href="/ministries/young-adults">
                            Young Adults Ministry
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/women">Womens Ministry</Link>
                        </li>
                        <li>
                          <Link href="/ministries/men">Mens Ministry</Link>
                        </li>
                        <li>
                          <Link href="/ministries/bible-study">
                            Bible Study
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/family">Family Ministry</Link>
                        </li>
                        <li>
                          <Link href="/ministries/worship-arts">
                            Worship Arts Ministry
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/kids">Kids Ministry</Link>
                        </li>
                        <li>
                          <Link href="/ministries/prayer">Prayer Ministry</Link>
                        </li>
                        <li>
                          <Link href="/ministries/evangelism">
                            Evangelism Ministry
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/audio-visual">
                            Audio-Visual Ministry
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      {/* Not a real link -> use button */}
                      <button type="button" className="nav-link">
                        Events <i className="fa fa-angle-down ms-1" />
                      </button>

                      <ul className="submenu">
                        <li>
                          <Link href="/events">Upcoming Events</Link>
                        </li>
                        <li>
                          <Link href="/media">Media Gallery</Link>
                        </li>
                        <li>
                          <Link href="/announcements">Announcements</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="right-column d-none d-lg-flex align-items-center gap-3">
                <ThemeToggle />

                <Link
                  href="/admin"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#ff7a00",
                    color: "#fff",
                    borderRadius: "999px",
                    padding: "8px 18px",
                    fontWeight: 600,
                    border: "none",
                  }}
                >
                  <i className="fas fa-user-shield me-2" />
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {navOpen && (
          <div
            className="mobile-menu-overlay d-lg-none"
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 999,
              overflowY: "auto",
              padding: "30px 20px",
              backdropFilter: "blur(10px)",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <Link href="/" onClick={closeMenu} className="mobile-link">
                  <i className="fas fa-home me-3" /> Home
                </Link>
              </li>

              <li style={{ marginBottom: "10px" }}>
                <Link href="/about" onClick={closeMenu} className="mobile-link">
                  <i className="fas fa-info-circle me-3" /> About
                </Link>
              </li>

              <li style={{ marginBottom: "10px" }}>
                <Link
                  href="/leaders"
                  onClick={closeMenu}
                  className="mobile-link"
                >
                  <i className="fas fa-users me-3" /> Leaders
                </Link>
              </li>

              <li style={{ marginBottom: "10px" }}>
                <Link
                  href="/members/register"
                  onClick={closeMenu}
                  className="mobile-link"
                >
                  <i className="fas fa-user-plus me-3" /> Members
                </Link>
              </li>

              <li style={{ marginBottom: "10px" }}>
                <button
                  type="button"
                  onClick={() => setMinistriesOpen(!ministriesOpen)}
                  className="mobile-link"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <i className="fas fa-church me-3" /> Ministries
                  </span>
                  <i
                    className={
                      ministriesOpen
                        ? "fas fa-chevron-up"
                        : "fas fa-chevron-down"
                    }
                  />
                </button>

                {ministriesOpen && (
                  <ul style={{ listStyle: "none", marginTop: "10px" }}>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/young-adults"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Young Adults
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/women"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Women
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/men"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Men
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/bible-study"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Bible Study
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/family"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Family
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/worship-arts"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Worship Arts
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/kids"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Kids Ministry
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/prayer"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Prayer
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/evangelism"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Evangelism
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/ministries/audio-visual"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        Audio Visual
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li style={{ marginBottom: "10px" }}>
                <button
                  type="button"
                  onClick={() => setEventsOpen(!eventsOpen)}
                  className="mobile-link"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <i className="fas fa-calendar-alt me-3" /> Events
                  </span>
                  <i
                    className={
                      eventsOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"
                    }
                  />
                </button>

                {eventsOpen && (
                  <ul style={{ listStyle: "none", marginTop: "10px" }}>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/events"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        <i className="fas fa-calendar-check me-2" /> Upcoming
                        Events
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/media"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        <i className="fas fa-photo-video me-2" /> Media Gallery
                      </Link>
                    </li>
                    <li style={{ paddingLeft: "20px" }}>
                      <Link
                        href="/announcements"
                        onClick={closeMenu}
                        className="mobile-link"
                      >
                        <i className="fas fa-bullhorn me-2" /> Announcements
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li style={{ marginBottom: "10px" }}>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mobile-link"
                >
                  <i className="fas fa-envelope me-3" /> Contact
                </Link>
              </li>

              <li style={{ marginTop: "20px" }}>
                <Link
                  href="/admin"
                  onClick={closeMenu}
                  className="mobile-link"
                  style={{
                    background: "#ff7a00",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i className="fas fa-user-shield me-3" /> Admin
                </Link>
              </li>

              <li style={{ marginTop: "30px", textAlign: "center" }}>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* spacer for fixed header */}
      <div style={{ height: "80px" }} />
    </>
  );
}
