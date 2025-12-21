// src/layouts/header/Header.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
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
                                    <Link href="/" legacyBehavior>
                                        <a onClick={closeMenu}>
                                            <img
                                                src="/assets/images/grace-logo-new.png"
                                                alt="GEECN"
                                                style={{ maxHeight: "60px" }}
                                            />
                                        </a>
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
                                    <i className={navOpen ? "fas fa-times" : "fas fa-bars"}></i>
                                </button>

                                <nav className="main-menu d-none d-lg-block">
                                    <ul className="navigation d-flex mb-0">
                                        <li>
                                            <Link href="/" legacyBehavior>
                                                <a className="nav-link">Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about" legacyBehavior>
                                                <a className="nav-link">About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/leaders" legacyBehavior>
                                                <a className="nav-link">Leaders</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/members/register" legacyBehavior>
                                                <a className="nav-link">Members</a>
                                            </Link>
                                        </li>

                                        <li className="dropdown">
                                            <a className="nav-link">
                                                Ministries <i className="fa fa-angle-down ms-1"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <Link href="/ministries/young-adults" legacyBehavior>
                                                        <a>Young Adults Ministry</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ministries/women" legacyBehavior>
                                                        <a>Womens Ministry</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ministries/men" legacyBehavior>
                                                        <a>Mens Ministry</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ministries/bible-study" legacyBehavior>
                                                        <a>Bible Study</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ministries/family" legacyBehavior>
                                                        <a>Family Ministry</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ministries/worship-arts" legacyBehavior>
                                                        <a>Worship Arts Ministry</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ministries/kids" legacyBehavior>
                                                        <a>Kids Ministry</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ministries/prayer" legacyBehavior>
                                                        <a>Prayer Ministry</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ministries/evangelism" legacyBehavior>
                                                        <a>Evangelism Ministry</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ministries/audio-visual" legacyBehavior>
                                                        <a>Audio-Visual Ministry</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="dropdown">
                                            <a className="nav-link">
                                                Events <i className="fa fa-angle-down ms-1"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <Link href="/events" legacyBehavior>
                                                        <a>Upcoming Events</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/media" legacyBehavior>
                                                        <a>Media Gallery</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/announcements" legacyBehavior>
                                                        <a>Announcements</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link href="/contact" legacyBehavior>
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="right-column d-none d-lg-flex align-items-center gap-3">
                                <ThemeToggle />
                                <Link href="/admin" legacyBehavior>
                                    <a
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
                                        <i className="fas fa-user-shield me-2"></i>
                                        Admin
                                    </a>
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
                                <Link href="/" legacyBehavior>
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-home me-3"></i> Home
                                    </a>
                                </Link>
                            </li>

                            <li style={{ marginBottom: "10px" }}>
                                <Link href="/about" legacyBehavior>
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-info-circle me-3"></i> About
                                    </a>
                                </Link>
                            </li>

                            <li style={{ marginBottom: "10px" }}>
                                <Link href="/leaders" legacyBehavior>
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-users me-3"></i> Leaders
                                    </a>
                                </Link>
                            </li>

                            <li style={{ marginBottom: "10px" }}>
                                <Link href="/members/register" legacyBehavior>
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-user-plus me-3"></i> Members
                                    </a>
                                </Link>
                            </li>

                            <li style={{ marginBottom: "10px" }}>
                                <button
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
                    <i className="fas fa-church me-3"></i> Ministries
                  </span>
                                    <i
                                        className={
                                            ministriesOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"
                                        }
                                    ></i>
                                </button>

                                {ministriesOpen && (
                                    <ul style={{ listStyle: "none", marginTop: "10px" }}>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/young-adults" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Young Adults</a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/women" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Women</a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/men" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Men</a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/bible-study" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Bible Study</a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/family" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Family</a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/worship-arts" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Worship Arts</a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/kids" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Kids Ministry</a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/prayer" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Prayer</a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/evangelism" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Evangelism</a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/ministries/audio-visual" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">Audio Visual</a>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li style={{ marginBottom: "10px" }}>
                                <button
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
                    <i className="fas fa-calendar-alt me-3"></i> Events
                  </span>
                                    <i className={eventsOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                                </button>

                                {eventsOpen && (
                                    <ul style={{ listStyle: "none", marginTop: "10px" }}>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/events" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">
                                                    <i className="fas fa-calendar-check me-2"></i> Upcoming Events
                                                </a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/media" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">
                                                    <i className="fas fa-photo-video me-2"></i> Media Gallery
                                                </a>
                                            </Link>
                                        </li>
                                        <li style={{ paddingLeft: "20px" }}>
                                            <Link href="/announcements" legacyBehavior>
                                                <a onClick={closeMenu} className="mobile-link">
                                                    <i className="fas fa-bullhorn me-2"></i> Announcements
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li style={{ marginBottom: "10px" }}>
                                <Link href="/contact" legacyBehavior>
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-envelope me-3"></i> Contact
                                    </a>
                                </Link>
                            </li>

                            <li style={{ marginTop: "20px" }}>
                                <Link href="/admin" legacyBehavior>
                                    <a
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
                                        <i className="fas fa-user-shield me-3"></i> Admin
                                    </a>
                                </Link>
                            </li>

                            <li style={{ marginTop: "30px", textAlign: "center" }}>
                                <ThemeToggle />
                            </li>
                        </ul>
                    </div>
                )}
            </header>
            <div style={{ height: "80px" }}></div>
        </>
    );
}
