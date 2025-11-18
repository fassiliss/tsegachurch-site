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
                                        <a onClick={closeMenu}><img src="/assets/images/logo-light5.png" alt="Tsega Church" style={{ maxHeight: '60px' }} /></a>
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
                    <div className="mobile-menu-overlay d-lg-none" style={{ position: 'fixed', top: '80px', left: 0, right: 0, bottom: 0, background: 'var(--bg-color)', zIndex: 999, overflowY: 'auto', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '15px' }}><Link href="/"><a onClick={closeMenu} style={{ display: 'block', padding: '12px 16px', fontSize: '16px', fontWeight: '500', color: 'var(--text-color)', textDecoration: 'none', borderRadius: '8px' }}><i className="fas fa-home me-2"></i> Home</a></Link></li>
                            <li style={{ marginBottom: '15px' }}><Link href="/about"><a onClick={closeMenu} style={{ display: 'block', padding: '12px 16px', fontSize: '16px', fontWeight: '500', color: 'var(--text-color)', textDecoration: 'none', borderRadius: '8px' }}><i className="fas fa-info-circle me-2"></i> About</a></Link></li>
                            <li style={{ marginBottom: '15px' }}><Link href="/leaders"><a onClick={closeMenu} style={{ display: 'block', padding: '12px 16px', fontSize: '16px', fontWeight: '500', color: 'var(--text-color)', textDecoration: 'none', borderRadius: '8px' }}><i className="fas fa-users me-2"></i> Leaders</a></Link></li>
                            <li style={{ marginBottom: '15px' }}><Link href="/members/register"><a onClick={closeMenu} style={{ display: 'block', padding: '12px 16px', fontSize: '16px', fontWeight: '500', color: 'var(--text-color)', textDecoration: 'none', borderRadius: '8px' }}><i className="fas fa-user-plus me-2"></i> Members</a></Link></li>
                            <li style={{ marginBottom: '15px' }}>
                                <button onClick={() => setMinistriesOpen(!ministriesOpen)} style={{ display: 'block', width: '100%', padding: '12px 16px', fontSize: '16px', fontWeight: '500', color: 'var(--text-color)', textAlign: 'left', background: 'none', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                                    <i className="fas fa-church me-2"></i> Ministries <i className={`fas fa-angle-${ministriesOpen ? 'up' : 'down'} float-end`}></i>
                                </button>
                                {ministriesOpen && (
                                    <ul style={{ listStyle: 'none', padding: '10px 0 0 20px', margin: 0 }}>
                                        {[
                                            { name: "Young Adult's Ministry", href: "/ministries/young-adults" },
                                            { name: "Women's Ministry", href: "/ministries/women" },
                                            { name: "Men's Ministry", href: "/ministries/men" },
                                            { name: "Bible Study", href: "/ministries/bible-study" },
                                            { name: "Family Ministry", href: "/ministries/family" },
                                            { name: "Worship Art's Ministry", href: "/ministries/worship-arts" },
                                            { name: "High School Ministry", href: "/ministries/high-school" },
                                            { name: "Middle School Ministry", href: "/ministries/middle-school" },
                                            { name: "Kid's Ministry", href: "/ministries/kids" },
                                            { name: "Prayer Ministry", href: "/ministries/prayer" },
                                            { name: "Evangelism Ministry", href: "/ministries/evangelism" },
                                            { name: "Audio-Visual Ministry", href: "/ministries/audio-visual" },
                                        ].map((m) => (
                                            <li key={m.href} style={{ marginBottom: '8px' }}><Link href={m.href}><a onClick={closeMenu} style={{ display: 'block', padding: '10px 12px', fontSize: '14px', color: 'var(--text-color)', textDecoration: 'none', borderRadius: '6px', opacity: 0.9 }}>{m.name}</a></Link></li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li style={{ marginBottom: '15px' }}><Link href="/contact"><a onClick={closeMenu} style={{ display: 'block', padding: '12px 16px', fontSize: '16px', fontWeight: '500', color: 'var(--text-color)', textDecoration: 'none', borderRadius: '8px' }}><i className="fas fa-envelope me-2"></i> Contact</a></Link></li>
                            <li style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.1)' }}><div style={{ padding: '0 16px' }}><ThemeToggle /></div></li>
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