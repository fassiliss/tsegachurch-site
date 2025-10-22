import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function HighSchoolMinistry() {
  return (
    <>
      <Head>
        <title>High School’s / የከፍተኛ ትምህርት አገልግሎት Ministry — Tsega Church</title>
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
            High School’s Ministry
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
            The High School Ministry is dedicated to helping students grow in
            their faith, build lasting friendships, and discover their identity
            in Christ. We create a safe space for young people to ask questions,
            share life, and experience God’s presence together.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Through weekly gatherings, worship nights, small groups, and service
            projects, students are encouraged to live boldly for Jesus in their
            schools and communities. Our goal is to equip the next generation to
            impact the world with love and truth.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
