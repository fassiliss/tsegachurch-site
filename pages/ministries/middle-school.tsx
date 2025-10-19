import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function MiddleSchoolMinistry() {
  return (
    <>
      <Head>
        <title>Middle School’s Ministry — Tsega Church</title>
      </Head>
      <Header />

      <main className="theme_container">
        <div
          className="ministry-page"
          style={{ textAlign: "center", padding: "60px 20px" }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            Middle School’s Ministry
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: "1.7",
              color: "#555",
            }}
          >
            The Middle School Ministry is designed to guide students through an
            exciting season of discovery and growth — helping them understand
            their faith, build confidence, and develop lasting friendships in
            Christ.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            We focus on interactive lessons, fun activities, and open
            discussions that connect God’s Word to real life. Our leaders are
            passionate about equipping students to make wise choices, serve
            others, and grow in their relationship with Jesus during these
            formative years.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
