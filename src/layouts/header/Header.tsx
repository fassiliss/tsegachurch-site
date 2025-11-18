// src/layouts/header/Header.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
import HeaderSidebar from "./HeaderSidebar";
import HeaderSearch from "./HeaderSearch";
import ThemeToggle from "src/components/ThemeToggle";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [ministriesOpen, setMinistriesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".main-header");
            if (window.scrollY > 50) {
                header?.classList.add("fixed-top");
            } else {
                header?.classList.remove("fixed-top");
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => {
        setNavOpen(false);
        setMinistriesOpen(false);
    };

    return (
        <>
            <header className="main-header header-style-two">
                <div className="header-upper">
                    <div className="header-container-box">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                            <div className="left-column d-flex align-items-center">
                                <div className="logo me-3">
                                    <Link href="/">
                                        <a onClick={closeMenu}><img src="/assets/images/grace-logo-new.png" alt="Tsega Church" style={{ maxHeight: '60px' }} /></a>
                                    </Link>
                                </div>

                                <button aria-label="Toggle navigation" className="mobile-nav-toggler btn btn-link p-0 d-lg-none" onClick={() => setNavOpen((s) => !s)} style={{ border: 'none', background: 'none', fontSize: '24px', color: 'var(--primary-color)' }}>
                                    <i className={navOpen ? "fas fa-times" : "fas fa-bars"}></i>
                                </button>

                                <nav className="main-menu d-none d-lg-block">
                                    <ul className="navigation d-flex mb-0">
                                        <li><Link href="/"><a className="nav-link">Home</a></Link></li>
                                        <li><Link href="/about"><a className="nav-link">About</a></Link></li>
                                        <li><Link href="/leaders"><a className="nav-link">Leaders</a></Link></li>
                                        <li><Link href="/members/register"><a className="nav-link">Members</a></Link></li>
                                        <li className="dropdown">
                                            <a href="#" className="nav-link">Ministries <i className="fa fa-angle-down ms-1"></i></a>
                                            <ul className="submenu">
                                                <li><Link href="/ministries/young-adults"><a>Young Adult's Ministry</a></Link></li>
                                                <li><Link href="/ministries/women"><a>Women's Ministry</a></Link></li>
                                                <li><Link href="/ministries/men"><a>Men's Ministry</a></Link></li>
                                                <li><Link href="/ministries/bible-study"><a>Bible Study</a></Link></li>
                                                <li><Link href="/ministries/family"><a>Family Ministry</a></Link></li>
                                                <li><Link href="/ministries/worship-arts"><a>Worship Art's Ministry</a></Link></li>
                                                <li><Link href="/ministries/high-school"><a>High School Ministry</a></Link></li>
                                                <li><Link href="/ministries/middle-school"><a>Middle School Ministry</a></Link></li>
                                                <li><Link href="/ministries/kids"><a>Kid's Ministry</a></Link></li>
                                                <li><Link href="/ministries/prayer"><a>Prayer Ministry</a></Link></li>
                                                <li><Link href="/ministries/evangelism"><a>Evangelism Ministry</a></Link></li>
                                                <li><Link href="/ministries/audio-visual"><a>Audio-Visual Ministry</a></Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact"><a className="nav-link">Contact</a></Link></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="right-column d-none d-lg-flex align-items-center gap-3">
                                <ThemeToggle />
                                <button className="btn btn-sm btn-outline-light" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar"><i className="fas fa-bars" /></button>
                            </div>
                        </div>
                    </div>
                </div>

                {navOpen && (
                    <div
                        className="mobile-menu-overlay d-lg-none"
                        style={{
                            position: 'fixed',
                            top: '80px',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, var(--bg-color) 0%, rgba(100, 50, 200, 0.05) 100%)',
                            zIndex: 999,
                            overflowY: 'auto',
                            padding: '30px 20px',
                            boxShadow: '0 -4px 20px rgba(0,0,0,0.2)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}>
                                <Link href="/">
                                    <a onClick={closeMenu} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '16px 20px',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        color: 'var(--text-color)',
                                        textDecoration: 'none',
                                        borderRadius: '12px',
                                        background: 'rgba(100, 50, 200, 0.08)',
                                        border: '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <i className="fas fa-home me-3" style={{ fontSize: '20px', width: '24px' }}></i>
                                        <span>Home</span>
                                    </a>
                                </Link>
                            </li>

                            <li style={{ marginBottom: '8px' }}>
                                <Link href="/about">
                                    <a onClick={closeMenu} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '16px 20px',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        color: 'var(--text-color)',
                                        textDecoration: 'none',
                                        borderRadius: '12px',
                                        background: 'rgba(100, 50, 200, 0.08)',
                                        border: '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <i className="fas fa-info-circle me-3" style={{ fontSize: '20px', width: '24px' }}></i>
                                        <span>About</span>
                                    </a>
                                </Link>
                            </li>

                            <li style={{ marginBottom: '8px' }}>
                                <Link href="/leaders">
                                    <a onClick={closeMenu} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '16px 20px',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        color: 'var(--text-color)',
                                        textDecoration: 'none',
                                        borderRadius: '12px',
                                        background: 'rgba(100, 50, 200, 0.08)',
                                        border: '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <i className="fas fa-users me-3" style={{ fontSize: '20px', width: '24px' }}></i>
                                        <span>Leaders</span>
                                    </a>
                                </Link>
                            </li>

                            <li style={{ marginBottom: '8px' }}>
                                <Link href="/members/register">
                                    <a onClick={closeMenu} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '16px 20px',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        color: 'var(--text-color)',
                                        textDecoration: 'none',
                                        borderRadius: '12px',
                                        background: 'rgba(100, 50, 200, 0.08)',
                                        border: '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <i className="fas fa-user-plus me-3" style={{ fontSize: '20px', width: '24px' }}></i>
                                        <span>Members</span>
                                    </a>
                                </Link>
                            </li>

                            {/* Ministries Dropdown */}
                            <li style={{ marginBottom: '8px' }}>
                                <button
                                    onClick={() => setMinistriesOpen(!ministriesOpen)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        padding: '16px 20px',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        color: 'var(--text-color)',
                                        textAlign: 'left',
                                        background: 'rgba(100, 50, 200, 0.12)',
                                        border: '2px solid rgba(100, 50, 200, 0.2)',
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-church me-3" style={{ fontSize: '20px', width: '24px' }}></i>
                                        <span>Ministries</span>
                                    </div>
                                    <i className={`fas fa-chevron-${ministriesOpen ? 'up' : 'down'}`} style={{ fontSize: '16px' }}></i>
                                </button>

                                {ministriesOpen && (
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: '12px 0 0 0',
                                        margin: 0,
                                        background: 'rgba(100, 50, 200, 0.05)',
                                        borderRadius: '0 0 12px 12px',
                                        marginTop: '-8px',
                                        paddingTop: '16px',
                                    }}>
                                        {[
                                            { name: "Young Adult's Ministry", href: "/ministries/young-adults", icon: "fa-fire" },
                                            { name: "Women's Ministry", href: "/ministries/women", icon: "fa-female" },
                                            { name: "Men's Ministry", href: "/ministries/men", icon: "fa-male" },
                                            { name: "Bible Study", href: "/ministries/bible-study", icon: "fa-book-open" },
                                            { name: "Family Ministry", href: "/ministries/family", icon: "fa-home-heart" },
                                            { name: "Worship Art's", href: "/ministries/worship-arts", icon: "fa-music" },
                                            { name: "High School", href: "/ministries/high-school", icon: "fa-graduation-cap" },
                                            { name: "Middle School", href: "/ministries/middle-school", icon: "fa-school" },
                                            { name: "Kid's Ministry", href: "/ministries/kids", icon: "fa-child" },
                                            { name: "Prayer Ministry", href: "/ministries/prayer", icon: "fa-hands-praying" },
                                            { name: "Evangelism", href: "/ministries/evangelism", icon: "fa-bullhorn" },
                                            { name: "Audio-Visual", href: "/ministries/audio-visual", icon: "fa-video" },
                                        ].map((ministry) => (
                                            <li key={ministry.href} style={{ marginBottom: '6px', paddingLeft: '20px' }}>
                                                <Link href={ministry.href}>
                                                    <a onClick={closeMenu} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '12px 16px',
                                                        fontSize: '16px',
                                                        fontWeight: '600',
                                                        color: 'var(--text-color)',
                                                        textDecoration: 'none',
                                                        borderRadius: '8px',
                                                        background: 'transparent',
                                                        transition: 'all 0.2s ease',
                                                    }}>
                                                        <i className={`fas ${ministry.icon} me-3`} style={{ fontSize: '16px', width: '20px', opacity: 0.7 }}></i>
                                                        <span>{ministry.name}</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            <li style={{ marginBottom: '8px' }}>
                                <Link href="/contact">
                                    <a onClick={closeMenu} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '16px 20px',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        color: 'var(--text-color)',
                                        textDecoration: 'none',
                                        borderRadius: '12px',
                                        background: 'rgba(100, 50, 200, 0.08)',
                                        border: '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <i className="fas fa-envelope me-3" style={{ fontSize: '20px', width: '24px' }}></i>
                                        <span>Contact</span>
                                    </a>
                                </Link>
                            </li>

                            {/* Theme Toggle */}
                            <li style={{
                                marginTop: '24px',
                                paddingTop: '24px',
                                borderTop: '2px solid rgba(100, 50, 200, 0.15)',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <ThemeToggle />
                            </li>
                        </ul>
                    </div>
                )}
            </header>

            <div style={{ height: "80px", width: "100%" }}></div>
            <HeaderSidebar open={sidebarOpen} close={() => setSidebarOpen(false)} />
            <HeaderSearch open={searchOpen} close={() => setSearchOpen(false)} />
        </>
    );
}