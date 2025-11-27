// src/layouts/header/Header.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "src/components/ThemeToggle";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [ministriesOpen, setMinistriesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // 🔹 Detect scroll to switch header style
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => {
        setNavOpen(false);
        setMinistriesOpen(false);
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

                            {/* LEFT: Logo + Desktop Nav */}
                            <div className="left-column d-flex align-items-center">
                                <div className="logo me-3">
                                    <Link href="/">
                                        <a onClick={closeMenu}>
                                            <img
                                                src="/assets/images/grace-logo-new.png"
                                                alt="Tsega Church"
                                                style={{ maxHeight: "60px" }}
                                            />
                                        </a>
                                    </Link>
                                </div>

                                {/* Mobile Menu Toggle */}
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

                                {/* Desktop Navigation */}
                                <nav className="main-menu d-none d-lg-block">
                                    <ul className="navigation d-flex mb-0">
                                        <li><Link href="/"><a className="nav-link">Home</a></Link></li>
                                        <li><Link href="/about"><a className="nav-link">About</a></Link></li>
                                        <li><Link href="/leaders"><a className="nav-link">Leaders</a></Link></li>
                                        <li><Link href="/members/register"><a className="nav-link">Members</a></Link></li>

                                        {/* Ministries Dropdown */}
                                        <li className="dropdown">
                                            <a className="nav-link">
                                                Ministries <i className="fa fa-angle-down ms-1"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><Link href="/ministries/young-adults"><a>Young Adult’s Ministry</a></Link></li>
                                                <li><Link href="/ministries/women"><a>Women’s Ministry</a></Link></li>
                                                <li><Link href="/ministries/men"><a>Men’s Ministry</a></Link></li>
                                                <li><Link href="/ministries/bible-study"><a>Bible Study</a></Link></li>
                                                <li><Link href="/ministries/family"><a>Family Ministry</a></Link></li>
                                                <li><Link href="/ministries/worship-arts"><a>Worship Arts Ministry</a></Link></li>
                                                <li><Link href="/ministries/kids"><a>Kids Ministry</a></Link></li>
                                                <li><Link href="/ministries/prayer"><a>Prayer Ministry</a></Link></li>
                                                <li><Link href="/ministries/evangelism"><a>Evangelism Ministry</a></Link></li>
                                                <li><Link href="/ministries/audio-visual"><a>Audio-Visual Ministry</a></Link></li>
                                            </ul>
                                        </li>

                                        <li><Link href="/contact"><a className="nav-link">Contact</a></Link></li>
                                    </ul>
                                </nav>
                            </div>

                            {/* RIGHT: Theme toggle + Admin */}
                            <div className="right-column d-none d-lg-flex align-items-center gap-3">
                                <ThemeToggle />

                                <Link href="/admin">
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

                {/* MOBILE MENU */}
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

                            {/* MOBILE: Home */}
                            <li style={{ marginBottom: "10px" }}>
                                <Link href="/">
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-home me-3"></i> Home
                                    </a>
                                </Link>
                            </li>

                            {/* MOBILE: About */}
                            <li style={{ marginBottom: "10px" }}>
                                <Link href="/about">
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-info-circle me-3"></i> About
                                    </a>
                                </Link>
                            </li>

                            {/* MOBILE: Leaders */}
                            <li style={{ marginBottom: "10px" }}>
                                <Link href="/leaders">
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-users me-3"></i> Leaders
                                    </a>
                                </Link>
                            </li>

                            {/* MOBILE: Members */}
                            <li style={{ marginBottom: "10px" }}>
                                <Link href="/members/register">
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-user-plus me-3"></i> Members
                                    </a>
                                </Link>
                            </li>

                            {/* MOBILE Ministries Dropdown */}
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
                                    <span><i className="fas fa-church me-3"></i> Ministries</span>
                                    <i className={`fas fa-chevron-${ministriesOpen ? "up" : "down"}`}></i>
                                </button>

                                {ministriesOpen && (
                                    <ul style={{ listStyle: "none", marginTop: "10px" }}>
                                        {[
                                            { name: "Young Adults", href: "/ministries/young-adults" },
                                            { name: "Women", href: "/ministries/women" },
                                            { name: "Men", href: "/ministries/men" },
                                            { name: "Bible Study", href: "/ministries/bible-study" },
                                            { name: "Family", href: "/ministries/family" },
                                            { name: "Worship Arts", href: "/ministries/worship-arts" },
                                            { name: "Kids Ministry", href: "/ministries/kids" },
                                            { name: "Prayer", href: "/ministries/prayer" },
                                            { name: "Evangelism", href: "/ministries/evangelism" },
                                            { name: "Audio Visual", href: "/ministries/audio-visual" }
                                        ].map((item) => (
                                            <li key={item.href} style={{ paddingLeft: "20px" }}>
                                                <Link href={item.href}>
                                                    <a onClick={closeMenu} className="mobile-link">
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li><Link href="/media"><a className="nav-link">Media</a></Link></li>


                            {/* MOBILE: Contact */}
                            <li style={{ marginBottom: "10px" }}>
                                <Link href="/contact">
                                    <a onClick={closeMenu} className="mobile-link">
                                        <i className="fas fa-envelope me-3"></i> Contact
                                    </a>
                                </Link>
                            </li>

                            {/* MOBILE: Admin */}
                            <li style={{ marginTop: "20px" }}>
                                <Link href="/admin">
                                    <a
                                        onClick={closeMenu}
                                        className="mobile-link"
                                        style={{
                                            background: "#ff7a00",
                                            color: "#fff",
                                            borderRadius: "10px",
                                            padding: "12px",
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                    >
                                        <i className="fas fa-user-shield me-3"></i>
                                        Admin
                                    </a>
                                </Link>
                            </li>

                            {/* MOBILE: Theme toggle */}
                            <li style={{ marginTop: "30px", textAlign: "center" }}>
                                <ThemeToggle />
                            </li>

                        </ul>
                    </div>
                )}
            </header>

            {/* Spacer so content doesn’t hide behind header */}
            <div style={{ height: "80px" }}></div>
        </>
    );
}
