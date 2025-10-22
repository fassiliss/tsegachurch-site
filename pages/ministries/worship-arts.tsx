import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function WorshipArtsMinistry() {
  return (
    <>
      <Head>
        <title>Worship Arts Ministry / የማምለኪያ እና ፈጠራ አገልግሎት — Tsega Church</title>
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
            Worship Arts Ministry
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
            The Worship Arts Ministry at Tsega Church exists to glorify God and
            lead our congregation into meaningful, Spirit-led worship. Through
            music, media, and creative expression, we aim to connect hearts to
            the presence of Jesus.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Our team includes vocalists, instrumentalists, sound and media
            technicians, and creative artists — all united by a passion to honor
            God with excellence and authenticity. We believe worship is more
            than music; it’s a lifestyle of surrender, gratitude, and joy.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
