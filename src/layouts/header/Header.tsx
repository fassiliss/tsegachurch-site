// src/layouts/header/Header.tsx
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="main-header header-style-two">
      {/* Top bar */}

      {/* Header main */}
      <div className="header-upper">
        <div className="header-container-box">
          <div className="inner-container d-flex align-items-center justify-content-between">
            {/* Left: logo */}
            <div className="left-column d-flex align-items-center">
              <div className="logo me-3">
                <Link href="/">
                  <a>
                    <img
                      src="/assets/images/logo-three.png"
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
          </div>
        </div>
      </div>
    </header>
  );
}
