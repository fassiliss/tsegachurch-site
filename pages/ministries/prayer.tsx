import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function PrayerMinistry() {
  return (
    <>
      <Head>
        <title>Prayer Ministry — Tsega Church</title>
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
            Prayer Ministry / የጸሎት አገልግሎት
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
            The Prayer Ministry at Tsega Church exists to encourage a deeper
            connection with God through prayer. We believe that prayer changes
            hearts, circumstances, and communities — it’s the foundation of
            everything we do.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Our prayer team gathers regularly to intercede for our church
            family, city, and world. We invite everyone to join us in praying
            with faith, persistence, and unity — trusting that God hears and
            answers according to His perfect will.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
