// pages/about.tsx
import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "src/components/PageBanner";
import { Nav, Tab } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Head>
        <title>Tsega Church — About Us</title>
        <meta
          name="description"
          content="Learn more about Grace Ethiopian Church—our story, mission, and next steps."
        />
      </Head>

      <Header />

      {/* Top banner */}
      <PageBanner
        pageName="About Us"
        pageTitle="Learn More About Tsega Church"
      />

      {/* About section (template-style) */}
      <section className="about-section-three">
        <div className="theme_container">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6">
              <div className="about-three-blcok">
                <div className="image">
                  <img src="/assets/images/resource/icon-3-1.png" alt="" />
                </div>
                <div className="image-two">
                  <img src="/assets/images/resource/about-3-8.png" alt="" />
                </div>
                <div className="image-three">
                  <img src="/assets/images/resource/about-3-6.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="about-block-four">
                <div className="big-title">About Us</div>
                <div className="image">
                  <img src="/assets/images/resource/about-3-5.png" alt="" />
                </div>
                <div className="image">
                  <img src="/assets/images/resource/about-3-7.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-us-block-two style-five">
                <div className="sub-title mb-20">
                  <span className="title-sep-left">
                    <img src="/assets/images/resource/icon-9.png" alt="" />
                  </span>
                  Why Grace Ethiopian Evangelical Church
                </div>
                <h2 className="sec-title mb-20">
                  <span>Know God. Find Family.</span> <br /> Make a Difference.
                </h2>

                <Tab.Container defaultActiveKey={"tab-1"}>
                  <div className="mission-block style-two">
                    <div className="tab-btn">
                      <Nav
                        as={"ul"}
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                          <Nav.Item as={"li"} role="presentation">
                              <Nav.Link
                                  as={"button"}
                                  eventKey="tab-1"
                                  style={{
                                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                      color: 'white',
                                      border: '2px solid #10b981',
                                      fontWeight: '600',
                                      padding: '10px 20px',
                                      borderRadius: '8px',
                                      margin: '0 5px'
                                  }}
                              >
                                  <span>Our Mission</span>
                              </Nav.Link>
                          </Nav.Item>

                          <Nav.Item as={"li"} role="presentation">
                              <Nav.Link
                                  as={"button"}
                                  eventKey="tab-2"
                                  style={{
                                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                      color: 'white',
                                      border: '2px solid #f59e0b',
                                      fontWeight: '600',
                                      padding: '10px 20px',
                                      borderRadius: '8px',
                                      margin: '0 5px'
                                  }}
                              >
                                  <span>Our Beliefs</span>
                              </Nav.Link>
                          </Nav.Item>

                          <Nav.Item as={"li"} role="presentation">
                              <Nav.Link
                                  as={"button"}
                                  eventKey="tab-3"
                                  style={{
                                      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                      color: 'white',
                                      border: '2px solid #ef4444',
                                      fontWeight: '600',
                                      padding: '10px 20px',
                                      borderRadius: '8px',
                                      margin: '0 5px'
                                  }}
                              >
                                  <span>Next Steps</span>
                              </Nav.Link>
                          </Nav.Item>
                      </Nav>
                    </div>
                  </div>

                  <Tab.Content className="tab-content" id="myTabContent">
                    <Tab.Pane className="tab-pane fade" eventKey="tab-1">
                      <div className="text">
                        At of Nashville, our mission is to lead people into a
                        growing relationship with Jesus, through worship,
                        discipleship, and service.
                      </div>
                      <div className="tab-icon">
                        <ul>
                          <li>
                            <i className="far fa-check" /> Biblical Teaching
                          </li>
                          <li>
                            <i className="far fa-check" /> Spirit-filled Worship
                          </li>
                          <li>
                            <i className="far fa-check" /> Community &
                            Fellowship
                          </li>
                          <li>
                            <i className="far fa-check" /> Serving Others
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane className="tab-pane fade" eventKey="tab-2">
                      <div className="text">
                        We believe in the authority of Scripture, the power of
                        the Gospel, and living out our faith daily with love and
                        integrity.
                      </div>
                      <div className="tab-icon">
                        <ul>
                          <li>
                            <i className="far fa-check" /> God the Father, Son &
                            Holy Spirit
                          </li>
                          <li>
                            <i className="far fa-check" /> Salvation through
                            Christ alone
                          </li>
                          <li>
                            <i className="far fa-check" /> The importance of
                            prayer
                          </li>
                          <li>
                            <i className="far fa-check" /> Loving our neighbors
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane className="tab-pane fade" eventKey="tab-3">
                      <div className="text">
                        Ready to get involved? Explore your next steps in faith:
                        join a small group, serve on a ministry team, or partner
                        in outreach.
                      </div>
                      <div className="tab-icon">
                        <ul>
                          <li>
                            <i className="far fa-check" /> Plan Your Visit
                          </li>
                          <li>
                            <i className="far fa-check" /> Join a Small Group
                          </li>
                          <li>
                            <i className="far fa-check" /> Serve with Us
                          </li>
                          <li>
                            <i className="far fa-check" /> Become a Member
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
