// src/layouts/header/Header.tsx
import Link from "next/link";
import { useState } from "react";
import HeaderSidebar from "./HeaderSidebar";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="main-header header-style-two">
        {/* Header main */}
        <div className="header-upper">
          <div className="header-container-box">
            <div className="inner-container d-flex align-items-center justify-content-between">
              {/* Left: logo + mobile toggle */}
              <div className="left-column d-flex align-items-center">
                <div className="logo me-3">
                  <Link href="/">
                    <a>
                      <img
                        src="/assets/images/logo-light5.png"
                        alt="Tsega Church"
                      />
                    </a>
                  </Link>
                </div>

                {/* Mobile toggle */}
                <button
                  aria-label="Toggle navigation"
                  className="mobile-nav-toggler btn btn-link p-0 d-md-none"
                  onClick={() => setNavOpen((s) => !s)}
                >
                  <img src="/assets/images/icons/icon-bar.png" alt="Menu" />
                </button>

                {/* Nav */}
                <nav
                  className={`main-menu navbar-expand-md navbar-light ${
                    navOpen ? "show" : ""
                  }`}
                >
                  <ul
                    className={`navigation d-md-flex mb-0 ${
                      navOpen ? "d-block mt-3" : "d-none d-md-flex"
                    }`}
                  >
                    <li className="nav-item">
                      <Link href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/leaders">
                        <a className="nav-link">Leaders</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/members/register">
                        <a className="nav-link">Members</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Right: actions */}
              <div className="right-column d-none d-md-flex align-items-center gap-3">
                {/* Search button */}
                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                >
                  <i className="far fa-search" />
                </button>

                {/* Sidebar button */}
                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={() => setSidebarOpen(true)}
                  aria-label="Open sidebar"
                >
                  <i className="fas fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlays */}
      <HeaderSidebar open={sidebarOpen} close={() => setSidebarOpen(false)} />
      <HeaderSearch open={searchOpen} close={() => setSearchOpen(false)} />
    </>
  );
}
