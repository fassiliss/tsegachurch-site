import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function WomensMinistry() {
  return (
    <>
      <Head>
        <title>Women’s Ministry / የሴቶች አገልግሎት — Tsega Church</title>
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
            Women’s Ministry
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
            The Women’s Ministry at Tsega Church is dedicated to inspiring and
            equipping women to grow spiritually, build meaningful friendships,
            and live out their God-given purpose with strength and grace.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Through Bible studies, prayer gatherings, mentorship, and community
            events, we create a welcoming space where women of all ages can find
            encouragement and support. Together, we seek to follow Christ, love
            one another, and make an impact in our homes, church, and community.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
