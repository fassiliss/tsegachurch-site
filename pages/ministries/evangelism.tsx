import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function EvangelismMinistry() {
  return (
    <>
      <Head>
        <title>Evangelism Ministry / የውንጌል አገልግሎት — Tsega Church</title>
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
            Evangelism Ministry
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
            The Evangelism Ministry exists to share the message of Jesus Christ
            with love, humility, and boldness. We are called to reach our
            community and the world with the good news of salvation through
            personal witness, outreach events, and acts of service.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Whether through neighborhood visits, local missions, or supporting
            global outreach, we seek to make disciples and reflect Christ’s
            compassion to everyone. Join us as we bring light and hope to those
            who need it most.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
