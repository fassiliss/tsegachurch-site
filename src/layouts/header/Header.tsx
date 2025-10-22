// src/layouts/header/Header.tsx
import Link from "next/link";
import { useState } from "react";
import HeaderSidebar from "./HeaderSidebar";
import HeaderSearch from "./HeaderSearch";
import ThemeToggle from "src/components/ThemeToggle";

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

                {/* Navigation menu */}
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
                    <li>
                      <Link href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/about">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/leaders">
                        <a className="nav-link">Leaders</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/members/register">
                        <a className="nav-link">Members</a>
                      </Link>
                    </li>

                    {/* Ministries dropdown */}
                    <li className="dropdown">
                      <a href="#" className="nav-link">
                        Ministries <i className="fa fa-angle-down ms-1"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link href="/ministries/young-adults">
                            <a>Young Adult’s Ministry / የወጣቶች አገልግሎት</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/women">
                            <a>Women’s Ministry / የሴቶች አገልግሎት</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/men">
                            <a>Men’s Ministry / የወንዶች አገልግሎት</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/bible-study">
                            <a>Bible Study’s / የመጽሐፍ ቅዱስ ትምህርት አገልግሎት</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/family">
                            <a>Family Ministry / ቤተሰብ አገልግሎት</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/worship-arts">
                            <a>Worship Art’s Ministry / የአምልኮ እና ፈጠራ አገልግሎት </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/high-school">
                            <a>High School’s Ministry / የከፍተኛ ትምህርት አገልግሎት </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/middle-school">
                            <a>
                              Middle School’s Ministry / የመካከለኛ ትምህርት አገልግሎት
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/kids">
                            <a>Kid’s Ministry / የሕፃናት አገልግሎት</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/prayer">
                            <a>Prayer Ministry / የጸሎት አገልግሎት</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/evangelism">
                            <a>Evangelism Ministry / ምስክር አገልግሎት</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ministries/audio-visual">
                            <a>Audio-Visual Ministry / የድምጽ እና ቪዲዮ አገልግሎት</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/contact">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Right: search + sidebar */}
              <div className="right-column d-none d-md-flex align-items-center gap-3">
                <ThemeToggle />

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
