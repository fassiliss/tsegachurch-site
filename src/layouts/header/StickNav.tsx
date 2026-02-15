import Link from "next/link";
import { Blog, Contact, Donation, Home, Page, Portfolio } from "./Menus";

const StickNav = ({
  openSidebar,
  openSearchBar,
  logo,
  sidebarImg,
  btnClass,
}) => {
  return (
    <div className="sticky-header animated slideInDown">
      <div className="header-upper">
        <div className="header-container-box">
          <div className="inner-container">
            <div className="left-column">
              <div className="logo">
                <Link href="/">
                  <img
                    src={logo ? logo : "assets/images/logo-light.png"}
                    alt=""
                  />
                </Link>
              </div>
              {/*Nav Box*/}
              <div className="nav-outer">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <img src="assets/images/icons/icon-bar.png" alt="" />
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation">
                      <li className="dropdown current">
                         href="#"Home 
                        <ul>
                          <Home />
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-right" />
                        </div>
                      </li>
                      <li className="dropdown">
                        href="#"Page
                        <ul>
                          <Page />
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-right" />
                        </div>
                      </li>
                      <li className="dropdown">
                        href="#"Donation
                        <ul>
                          <Donation />
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-right" />
                        </div>
                      </li>
                      <li className="dropdown">
                        href="#"Blog
                        <ul>
                          <Blog />
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-right" />
                        </div>
                      </li>
                      <Portfolio />
                      <Contact />
                    </ul>
                  </div>
                </nav>
                {/* language */}
                <div className="language">
                  <select>
                    <option data-display="English">English</option>
                    <option value={1}>French</option>
                    <option value={2}>Spanish</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="right-column">
              <div className="search-toggler" onClick={() => openSearchBar()}>
                <i className="far fa-search" />
              </div>
              <div
                className="menu-bar sidemenu-nav-toggler"
                onClick={() => openSidebar()}
              >
                <img
                  src={
                    sidebarImg
                      ? sidebarImg
                      : "assets/images/icons/icon-menu.png"
                  }
                  alt=""
                />
              </div>
              href="#" className=
              {btnClass ? btnClass : "primary_btn style-seven"}
              Donation
              <i className="far fa-heart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StickNav;
