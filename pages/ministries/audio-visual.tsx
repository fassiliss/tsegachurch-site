import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function AudioVisualMinistry() {
  return (
    <>
      <Head>
        <title>Audio-Visual Ministry — Tsega Church</title>
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
            Audio-Visual Ministry
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
            The Audio-Visual Ministry serves faithfully behind the scenes to
            create a worship environment where sound, lighting, and media all
            come together to glorify God. Our team ensures every song, sermon,
            and announcement is experienced with clarity and excellence—both
            in-person and online.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            From operating soundboards and cameras to managing livestreams and
            presentations, this ministry plays a vital role in communicating the
            gospel through technology. If you have a passion for media,
            production, or technical service, we welcome you to join the team!
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
