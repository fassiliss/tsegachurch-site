import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function MensMinistry() {
  return (
    <>
      <Head>
        <title>Men’s Ministry — Tsega Church</title>
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
            Men’s Ministry
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
            The Men’s Ministry at Tsega Church is committed to helping men grow
            in faith, integrity, and leadership. We believe men are called to
            lead their homes, workplaces, and communities with humility and
            strength through Christ.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Through prayer groups, Bible studies, mentorship, and community
            service, we encourage men to support one another and live out their
            faith boldly. Together, we build brotherhood and become godly
            examples for future generations.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
