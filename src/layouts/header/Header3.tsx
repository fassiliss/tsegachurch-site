import Link from "next/link";
import { Fragment, useState } from "react";
import MobileMenu from "./MobileMenu"; // keep if you have this; otherwise remove & the related bits

const Header3 = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);

  const openMobileMenu = () => {
    if (typeof document !== "undefined") {
      document.body.classList.add("mobile-menu-visible");
    }
  };
  const closeMobileMenu = () => {
    if (typeof document !== "undefined") {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  return (
    <Fragment>
      <header className="main-header header-style-four">
        {/* Header Upper */}
        <div className="header-upper">
          <div className="header-container-box">
            <div className="inner-container">
              {/* Left: Logo */}
              <div className="left-column">
                <div className="logo">
                  <Link href="/">
                    {/* update the logo path if needed */}
                    <img src="/assets/images/logo-light-3.png" alt="Logo" />
                  </Link>
                </div>
              </div>

              {/* Middle: Nav */}
              <div className="middle-column">
                <div className="nav-outer">
                  {/* Mobile toggler */}
                  <div className="mobile-nav-toggler" onClick={openMobileMenu}>
                    <img src="/assets/images/icons/icon-bar.png" alt="menu" />
                  </div>

                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="/members/register">Members Register</Link>
                        </li>
                        <li>
                          <Link href="/leaders">Leaders</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Right: (kept minimal; no donation/search/sidebar) */}
              <div className="right-column" />
            </div>
          </div>
        </div>
        {/* End Header Upper */}

        {/* Mobile Menu (if you have this component) */}
        <MobileMenu close={closeMobileMenu} />

        {/* Backdrop for any side overlays (kept for compatibility) */}
        <div
          className="nav-overlay"
          style={{ display: sideBarToggle ? "block" : "none" }}
          onClick={() => setSideBarToggle(false)}
        />
      </header>
    </Fragment>
  );
};

export default Header3;
